// Importo Lirerias 
require('dotenv').config()
//Importo Clases 
const Busquedas = require('./models/busquedas');

//Importo Metodos Helpers 
const { leerInput, inquirerMenu, pausa, listadoLugares } = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');


//Inicio del programa 
const main = async()=>{

        //Declaro variables 
        let opt = ''; 
        const busqueda = new Busquedas();

        //Inicio ciclo para el menu 
        do{
            opt =  await inquirerMenu(); //Esperate hasta que devuelva algo 
        // console.log( { opt } );

            switch (opt) {
                case '1':
                    //Mostrar Mensaje  
                    const termino = await leerInput('Ciudad: ');
                    // console.log(termino);   // Me muestra lo que queremos buscar 
                    const lugares = await  busqueda.ciudad(termino); 
                    // console.log(lugares); // Muestra el arreglo de la busqueda 

                    const id = await listadoLugares( lugares );
                     console.log( 'Buscando...' ); // Me muestra la Id de la selección
                    const lugarSeleccionado = lugares.find( l => l.id === id );

                    // console.log( lugarSeleccionado ); // Por medio del find podemos buscar el lugar seleccionado de nuestro arreglo creado 
                    //Guardar  los lugares  como historial 
                    guardarDB(lugarSeleccionado);

                    // Seleccionar clima
                    const clima = await busqueda.clima(lugarSeleccionado);
                    //console.log("Clima Desc->",clima); // Objeto resultado del API

                    // Clima 

                    //Mostrar resultado 
                 //   console.clear();
                    console.log('\n Información de la ciudad \n'.green);
                    console.log(' Ciudad -> ', lugarSeleccionado.nombre.blue );
                    console.log(' Lat ->', lugarSeleccionado.lat );
                    console.log(' Lng ->', lugarSeleccionado.lng );
                    console.log(' Temperatura ->', clima.temp );
                    console.log(' Min ->', clima.min );
                    console.log(' Max ->', clima.max );
                    console.log(' Descripción ->', clima.desc.blue );
                break;
                case '2':
                    //Ver el Historial 
                    const data = leerDB();
                    console.log("!! Historial de tus busquedas -> ".red);
                    console.log(data);
                break;            

            }

            await pausa(  );

        }while( opt !=='0' );

}

main();



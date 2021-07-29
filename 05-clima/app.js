// Importo Lirerias 
require('dotenv').config()
//Importo Clases 
const Busquedas = require('./models/busquedas');

//Importo Metodos Helpers 
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');


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
                    const lugar = await leerInput('Ciudad: ');
                    // console.log(lugar);
                   await  busqueda.ciudad(lugar); 


                    
                    //Buscar  los lugares 


                    // Seleccinar clima


                    // Clima 

                    //Mostrar resultado 
                    console.log('\n Información de la ciudad \n'.green);
                    console.log(' Ciudad ' );
                    console.log(' Lat ' );
                    console.log(' Lng ' );
                    console.log(' Temperatura ' );
                    console.log(' Min ' );
                    console.log(' Max ' );
                break;
                case '2':
                    //
                break;            

            }

            await pausa(  );

        }while( opt !=='0' );

}

main();



//Importo librerias Recomendación primero paquetes de importación de tercero y luego las nuestras
require('colors');

// Importo helpers 
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); -> Es la manera a manita sin usar el inquirer
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main= async()=>{

   // console.log("hola mundo".green);
   
    let opt = ''; 

    const tareas = new Tareas();

    const tareaDB = leerDB();

    if(tareaDB){
        //Establecer las tareas
        //TODO : cargarTareasFromArray
        tareas.cargarTareasFromArray( tareaDB );

    }

    do{
        opt =  await inquirerMenu(); //Esperate hasta que devuelva algo 
       // console.log( { opt } );


        switch (opt) {
            case '1':
                //Crear opcion 
                const descrip = await leerInput('Descripción:');
                tareas.crearTarea(descrip);
                
            break;
            case '2':
                //Listar tareas 
               // console.log(tareas._listado);
                console.log(tareas.listadoArr);
                
            break;
            case '3':
                //Listar tareas 
                tareas.listadoCompleto(tareas._listado); 
                //console.log(tareas._listado);
                
            break;            

        }

         guardarDB( tareas.listadoArr );

        
        await pausa(  );
    
    }while( opt !=='0' );

}

main();
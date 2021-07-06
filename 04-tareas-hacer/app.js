//Importo librerias Recomendación primero paquetes de importación de tercero y luego las nuestras
require('colors');

// Importo helpers 
// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');


console.clear();

const main= async()=>{

   // console.log("hola mundo".green);
   
    let opt = ''; 
    do{
        opt =  await inquirerMenu(); //Esperate hasta que devuelva algo 
        console.log( { opt } );
        
        await pausa();
    
    }while( opt !=='0' );

}

main();
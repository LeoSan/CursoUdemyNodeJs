//Importo librerias Recomendación primero paquetes de importación de tercero y luego las nuestras
require('colors');

// Importo helpers 
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main= async()=>{

   // console.log("hola mundo".green);
   
    let opt = ''; 
    do{
        opt =  await mostrarMenu(); //Esperate hasta que devuelva algo 
        console.log( {opt } );
        if (opt !== '0' ) await pausa();
    }while( opt !=='0' );

}

main();
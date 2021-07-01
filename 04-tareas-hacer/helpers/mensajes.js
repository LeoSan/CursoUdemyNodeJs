//Importo librerias 
require('colors');

const mostrarMenu = ()=>{

     //Creamos una promesa para que se pueda ejecutar 
    return new Promise(resolver => {
        console.clear();
        console.log("=========================================".red);
        console.log("##  <--|°.°|--> Seleccione una  opción ##".yellow);
        console.log("========================================\n".red);
    
        console.log(` ${'1.'.green } Crear tarea`);
        console.log(` ${'2.'.green } Listar tareas`);
        console.log(` ${'3.'.green } Listar tareas completadas`);
        console.log(` ${'4.'.green } Listar tareas pendientes`);
        console.log(` ${'5.'.green } Completar tarea`);
        console.log(` ${'6.'.green } Borrar tarea`);
        console.log(` ${'0.'.green } salir \n`);
    
        /*Manera de escribir y recibir por pantalla */
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
        /*Manera mostrar en pantalla */
        readLine.question('Seleccione una opción:', (opt)=>{
            //console.log({ opt });
            readLine.close();
            resolver(opt);
        })
    })
}

const pausa = () =>{

    return new Promise(resolver => {

        /*Manera de escribir y recibir por pantalla */
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
        /*Manera mostrar en pantalla */
        readLine.question(`\nPresione ${ 'ENTER'.blue }\n`, (opt)=>{
            //console.log({ opt });
            readLine.close();
            resolver(opt);
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}
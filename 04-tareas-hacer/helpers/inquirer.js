const inquirer = require('inquirer'); 
require('colors');

//Peguntas 

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Que deseas hacer',
        choices:[
            {
                value:'1', 
                name:'1. Crear tarea'
            },
            {
                value:'2', 
                name:'2. Listar tareas'
            },
            {
                value:'3', 
                name:'3. Listar tareas completadas'
            },
            {
                value:'4', 
                name:'4. Listar tareas pendientes'
            },
            {
                value:'5', 
                name:'5. Completar tareas '
            },
            {
                value:'6', 
                name:'6. Borrar tarea'
            },
            {
                value:'0', 
                name:'0. Salir'
            },

        ]
    }

];


const inquirerMenu = async() =>{

    console.clear();
    console.log("=========================================".red);
    console.log("##  <--|°.°|--> Seleccione una  opción ##".yellow);
    console.log("========================================\n".red);

    const { opcion } = await inquirer.prompt( preguntas ); 
    return opcion; 

}

const pausa = async () =>{

    const question = [
        {
            type:'input',
            name:'enter',
            message: `Presione ${'enter'.green} para continuar`
        }

    ]
    console.log('\n')
    await inquirer.prompt(question);

}



module.exports = {
    inquirerMenu,
    pausa 
}

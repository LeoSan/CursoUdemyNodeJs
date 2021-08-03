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
                name:`${'1.-'.green} Buscar Ciudad`
            },
            {
                value:'2', 
                name:`${'2.-'.green} Historial`
            },

            {
                value:'0', 
                name:`${'0.-'.green} Salir`
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

const leerInput = async (message)=>{

    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length == 0){
                    return `Por favor ingrese un valor`;
                }
                return true;
            }

        }

    ];

    const { desc }  = await inquirer.prompt(question);
    return desc;

}

const listadoLugares = async(lugares = [] )=>{

    const choicesDos =  lugares.map( (lugar, indice) =>{
        const idx = `${indice + 1 }`.green; 
        return {
            value:lugar.id,
            name: `${idx} - ${lugar.nombre}` 
        }
    }); 

    choicesDos.unshift ({
        value:'0',
        name:'0. - '.green + 'Cancelar'
    })    
    const preguntasDos = [
        {
            type: 'list',
            name: 'id', 
            message:'Seleccione Lugar:',
            choices:choicesDos
        }

    ];



    const { id } = await inquirer.prompt( preguntasDos ); 
    return id; 
}

const confirmar = async (mensaje) =>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message:mensaje
        }
    ]

    const { ok } = await inquirer.prompt( question ); 
    return ok; 


}

const mostrarListadoCheckList = async(tareas = [] )=>{

    const choicesDos =  tareas.map( (tarea, indice) =>{
        const idx = `${indice + 1 }`.green; 
        return {
            value:tarea.id,
            name: `${idx} - ${tarea.desc}`,
            checked: (tarea.completado)?true : false
        }
    }); 


    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids', 
            message:'Selecciones',
            choices:choicesDos
        }

    ];



    const { ids } = await inquirer.prompt( pregunta ); 
    return ids; 
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares, 
    confirmar,
    mostrarListadoCheckList 
}

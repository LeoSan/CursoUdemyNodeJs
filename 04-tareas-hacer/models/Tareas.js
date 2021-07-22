//Importo librerias de node 
const { v4: uudiv4 } = require('uuid');

//Importo clases 
const Tarea = require('./tarea');



class Tareas {
    //Defino propiedad _ privada 
    _listado = {};

    //Es un getter 
    get listadoArr(){
        
        const listado = [];

        Object.keys( this._listado ).forEach( key =>{
            const tarea = this._listado[key];
            listado.push( tarea );
        } );

        return listado;

    }


    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        }); 
        

    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        //Listado en Js 
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto(){
        
        let stringListado = ''; 
        let indiceColor = ''; 



        this.listadoArr.forEach( (tarea, indice) => {

            const indiceColor        = `${ indice + 1}`.green;
            const {desc, completado} = tarea; 
            const status             = (completado)? 'Completada'.green : 'Pendiente'.red; 
            
            const resultado = `${indiceColor} ${desc}::${status}`;
            console.log();
            console.log(resultado);
        
        }); 
        
    }



}

module.exports = Tareas;
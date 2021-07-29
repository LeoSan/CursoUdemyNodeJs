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

    //Metodo para eliminar tarea 
    borrarTarea (id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
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

    listarPendientesCompletadas( completadas = true ){
        
        let stringListado = ''; 
        let indiceColor = ''; 
        let bandera = false;

        this.listadoArr.forEach( (tarea, indice) => {

            const indiceColor        = `${ indice + 1}`.green;
            const {desc, completado} = tarea; 

            if (completadas == false && completado == null){
                const status  = 'Pendientes'.red;  
                const resultado = `${indiceColor} ${desc}::${status}`;
                console.log();
                console.log(resultado);
                bandera = true; 
            }

            if (completadas == true && completado != null){
                const status  = 'Completada'.green;  
                const resultado = `${indiceColor} ${desc}::${status} - Fecha:${completado.green}`;
                console.log();
                console.log(resultado);
                bandera = true; 
            }

        }); 

        if (bandera == false){
            const mensaje = (completadas )? 'Completadas'.green: 'Pendientes'.blue ;
            console.log(` ${'Lo siento no hay tareas::'.red} ${ mensaje }`);
        }
        
    }

    toggleCompletadas( ids = [] ){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if ( !tarea.completado ){
                tarea.completado = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea =>{

            if ( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completado = null;
            }
        });

    }


}

module.exports = Tareas;
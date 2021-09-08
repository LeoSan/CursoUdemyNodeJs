
const express = require('express');
const cors = require('cors')

const db = require('../config/db');


 


class server{

    constructor(){
        this.app      = express();
        this.port     = process.env.PORT;
        this.usuPath  = '/api/users';
        this.authPath  = '/api/auth';

        this.conectarDB();

        //midlewares
        this.app.use( cors() ); // Esto permite un grado de seguridad

        this.midlewares();
        
        
        //rutas de aplicación
        this.routes();

    }

    routes(){

        this.app.use( this.authPath , require('../routes/auth') );    
        this.app.use( this.usuPath , require('../routes/user') );
            
        
    }

    listen(){
        // Esto permite indicar en que puesto escuchara 
        this.app.listen( this.port ,  ()=>{
            console.log('Estoy escuchando desde el puerto ->', this.port  );
        })
    }

    midlewares(){
        //Directorio publico 
        this.app.use( express.static('public') );
        
        //Habilitar leer los valores de un body del raw -> Esta manera es de enviar json a los apis 
        this.app.use(express.json());

    }    
    
    async conectarDB(){
       await db.dbConetion()

    }

}

module.exports = server;
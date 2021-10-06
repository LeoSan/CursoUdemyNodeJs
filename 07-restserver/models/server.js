//Importo librerrias 
const express = require('express');
const cors = require('cors')

//Importo Base Datos
const db = require('../config/db');

//Importo Carga de Archivos d
const fileUpload = require('express-fileupload');


 class server{

    constructor(){
        this.app      = express();
        this.port     = process.env.PORT;
        this.paths  = {
            auth:'/api/auth',
            usuario:'/auth/users',
            categoria:'/api/categoria',
			buscar:     '/api/buscar',
            productos:  '/api/productos',
            upload:     '/api/uploads',

        };
        this.usuPath  = '/api/users';
        this.authPath  = '/api/auth';

         // Conectar a base de datos
		this.conectarDB();

        //midlewares
        this.midlewares();

        //rutas de aplicación
        this.routes();

    }

    routes(){

        this.app.use( this.authPath , require('../routes/auth') );    
        this.app.use( this.usuPath , require('../routes/user') );
        this.app.use( this.paths.categoria , require('../routes/categoria') );
		
		this.app.use( this.paths.buscar, require('../routes/buscar'));
		//this.app.use( this.paths.productos, require('../routes/productos'));
		this.app.use( this.paths.upload, require('../routes/upload'));
            
        
    }

    listen(){
        // Esto permite indicar en que puesto escuchara 
        this.app.listen( this.port ,  ()=>{
            console.log('Estoy escuchando desde el puerto ->', this.port  );
        })
    }

    midlewares(){
        // Esto permite un grado de seguridad
		this.app.use( cors() ); 
		
		//Directorio publico 
        this.app.use( express.static('public') );
        
        //Habilitar leer los valores de un body del raw -> Esta manera es de enviar json a los apis 
        this.app.use(express.json());

        //Permite manejar el fileUpload - Carga de Archivos 
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    }    
    
    async conectarDB(){
       await db.dbConetion()

    }

}

module.exports = server;
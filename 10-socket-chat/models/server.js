//Importo librerrias 
const express = require('express');
const cors = require('cors')

//Importo Base Datos
const db = require('../config/db');

// Importamos el controlador de Socket 

const { socketController } = require('../sockets/controller'); //Paso 6 -> se debe crear un controlador para el socket Contralador 

//Importo Carga de Archivos d
const fileUpload = require('express-fileupload');


 class server{

    constructor(){
        this.app      = express();
        this.port     = process.env.PORT;
        
        this.server = require('http').createServer( this.app ); // Paso 1 -> Para Socket
        this.io     = require('socket.io')( this.server );// Paso 2 -> Para Socket


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

        //Paso 5: Metodo para escuchar los socket 
        this.sockets()

    }

    routes(){

        this.app.use( this.authPath , require('../routes/auth') );    
        this.app.use( this.usuPath , require('../routes/user') );
        this.app.use( this.paths.categoria , require('../routes/categoria') );
		
		this.app.use( this.paths.buscar, require('../routes/buscar'));
		//this.app.use( this.paths.productos, require('../routes/productos'));
		this.app.use( this.paths.upload, require('../routes/upload'));
            
        
    }

    // Paso 4: Metodo para escuchar los socket 
    sockets() {

        //Se hace este ajuste para que en un solo llamado tengamos la referencia sl socket de los demas y a el  mismo 
        this.io.on('connection', (socket) => socketController(socket, this.io) );

    }


    listen(){
        // Esto permite indicar en que puesto escuchara 
    
        //this.app.listen( this.port ,  ()=>{
        this.server.listen( this.port ,  ()=>{ // Paso 3-> 
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
            tempFileDir : '/tmp/', 
            createParentPath:true, //Esto permite crear directorios si no encuentra la ruta 
        }));

    }    
    
    async conectarDB(){
       await db.dbConetion()

    }

}

module.exports = server;
//Importo librerrias 
const express = require('express');
const cors = require('cors')
const {socketController} = require('../sockets/controller');

 class server{

    constructor(){
        this.app      = express();
        this.port     = process.env.PORT;
        this.paths  = {  };

        //Iniciamos socket
        //Paso 1: Creamos nuestro server socket  
        this.server = require('http').createServer(this.app);

        //Paso 2: Creamos nuetro objeto de entrada y salida io del server creado -> Es toda la información de nuestros clientes conectados, usamos io para enviar informacion  
        this.io = require('socket.io')(this.server);


        //midlewares
        this.midlewares();

        //rutas de aplicación
        this.routes();

        //Paso 4: Configuro mis sockets y eventos y 
        this.sockets(); 

    }

    routes(){
        //this.app.use( this.usuPath.usuario , require('../routes/user') );
    }

    //Paso 5: Iniciamos nuestro client sockets 
    sockets(){
        //Pasothis.io.on('connection', client => { ... });
        this.io.on('connection', socketController);
    }

    listen(){
        //Paso 3:
        // Esto permite indicar en que puesto escuchara 
        this.server.listen( this.port ,  ()=>{
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

    }    
    


}

module.exports = server;
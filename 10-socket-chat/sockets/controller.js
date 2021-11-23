const { Socket } = require('socket.io');

const { comprobarJWT } = require('../helpers/generar-jwt');

const { ChatMensaje } = require('../models');
const ChatMensajes = require('../models/chat-mensajes');
const chatMensaje = new ChatMensaje();

const socketController = async(socket= new Socket, io ) => {//Esto es algo que no se debe hacer en producción,  io ->  es todo el servidor del socket lo reicbo cmo argumento del contrlador 
    //Permite ver todo el socket 
    //console.log('cliente conectado', socket);
    
    //Aqui recibimos el token cuando inicia sección 
    //console.log('cliente conectado', socket.handshake.headers['x-token']);

    const token = socket.handshake.headers['x-token']; 
    const usuario = await comprobarJWT(token);

    if (!usuario){
        return socket.disconnect(); 
    }

    //agregar el usuario conectado
    chatMensaje.conectarUsuario(usuario);
    
    //Decirle al todo el mundo me conecte 
    io.emit('usuarios-activos', chatMensaje.usuariosArr );

    console.log('Se conecto :', usuario.nombre); 

    //Limpiar cuando alguien se desconecta 
    socket.on('disconnect', ()=>{
        chatMensaje.desconectarUSuario(usuario.id);
        io.emit('usuarios-activos', chatMensaje.usuariosArr );
    });

    socket.on('disconnect', ()=>{
        chatMensaje.desconectarUSuario(usuario.id);
        io.emit('usuarios-activos', chatMensaje.usuariosArr );
    });


        //Enviamos 
    socket.on('enviar-mensaje', ({uid, mensaje, time})=>{

        chatMensaje.enviarMensaje(usuario.id, usuario.nombre, mensaje, time ); 
        io.emit('recibir-mensajes', chatMensaje.ultimos10);

    }); 

}

module.exports = {
    socketController
}


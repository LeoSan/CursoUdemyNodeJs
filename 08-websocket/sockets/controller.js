const socketController = (socket) => { 
    //console.log("Cliente Conectado Socket -> ", socket.id); 
    socket.on('disconnect', ()=>{
        console.log("Cliente Desconectado -> ");
    }); 

    //Forma  de recibir mensaje desde el cliente 
    socket.on('enviar-mensaje', (payload, callback) => {
        console.log("Mensaje recibido");
        console.log(payload);
        //Forma de ejecutar el callback
        const id = "741"; //Supongamos que se conecta a la BD y hace algo puedes poner -> async(payload, callback) <- para consultas en la BD
        callback(id);

        //Formar de enviar  al cliente 
        //Se recomienda que el payload sean objetos literales o primitivos, no instancias 
        // this.io.emit('enviar-mensaje', payload ); // Esta es la forma si los usamos desde server.js 
        //broadcast -> Enviar mensaje a todos 
        socket.broadcast.emit('enviar-mensaje', payload );

    }); 


}

module.exports = {
    socketController
}
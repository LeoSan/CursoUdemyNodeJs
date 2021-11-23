const {Socket} = require('socket.io');

const socketController = (socket= new Socket) => {//Esto es algo que no se debe hacer en producción 

    
    console.log('cliente conectado', socket.id);
}



module.exports = {
    socketController
}


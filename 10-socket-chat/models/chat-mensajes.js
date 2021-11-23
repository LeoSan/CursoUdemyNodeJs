class Mensaje {

    constructor(uid, nombre, mensaje, time){
        this.uid = uid;
        this.nombre = nombre; 
        this.mensaje = mensaje; 
        this.time = time; 
    }
}

class ChatMensajes {

    constructor(){
        this.mensajes = [];
        this.usuarios = { }
    }

    get ultimos10(){
        this.mensajes = this.mensajes.splice(0, 10);
        return this.mensajes;
    }

    get usuariosArr(){
        return Object.values(this.usuarios);// [ {}, {}, {},{} ]
    }

    enviarMensaje(uid, nombre, mensaje, time){
        this.mensajes.unshift(
            new Mensaje(uid, nombre, mensaje, time)
        );

    }    
    
    conectarUsuario( usuario){
        this.usuarios[usuario.id] = usuario ;
    }
    
    desconectarUSuario(id){
        delete this.usuarios[id]; 

    }

}

module.exports = ChatMensajes;
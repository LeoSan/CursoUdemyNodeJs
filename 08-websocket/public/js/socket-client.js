
//Referencias del html 
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


//Paso 6: Esta es nuestra comunicacación 
const socket = io();

socket.on('connect', ()=>{
    console.log("Conectado -> Indicando desde el lado del Front ");
    lblOnline.style.display ='';
    lblOffline.style.display ='none';
}); 

socket.on('disconnect', ()=>{
    console.log("Desconectado -> Indicando desde el lado del Front ");
    lblOnline.style.display ='none';
    lblOffline.style.display ='';
}); 


//Creo un evento listener  Front-Backend 
btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value; 
    const payload = {
        mensaje,
        id:'querty',
        fecha:new Date().getTime(),
    }
    //Forma de emitir un evento que// Enviar mensaje al servidor 
    //Parametros Identificador, Valor, Callback
    socket.emit('enviar-mensaje', payload, (id)=>{
        //Este tercer Callback es la respuesta del servidor y lo recibe como segundo argumento en la función desde el servidor
        console.log('Resp - del Servidor ', id)

    });
}); 

//Forma de escuchar desde el servidor  

socket.on('enviar-mensaje', (payload)=>{
    console.log("Mensaje  Recibido desde El Servidor ", payload);

}); 

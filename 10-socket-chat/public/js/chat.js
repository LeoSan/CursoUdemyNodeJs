
const url = (window.location.hostname.includes('localhost'))
    ? 'http://localhost:8080/api/auth/'
    : 'https://restserver-curso-fher.herokuapp.com/api/auth/';



let usuAutenticado = null;
let usuario = null;
let socket = null;

const txtUid     = document.querySelector('#txtUid');
const txtMensaje = document.querySelector('#txtMensaje');
const ulUsuarios = document.querySelector('#ulUsuarios');
const ulMensajes = document.querySelector('#ulMensajes');
const btnSalir   = document.querySelector('#btnSalir');

const validarJWT = async () => {

    const token = localStorage.getItem('token') || '';

    if (token.length <= 10) {
        window.location = 'index.html';
        throw new Error('No hay token en el servidor');
    }


    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-token': token }// Decimos que es un tipo Json 
        });

        const { usuAutenticado: userDB, token: tokenDB } = await resp.json();
        console.log("Resp", userDB, tokenDB);
        localStorage.setItem('token', tokenDB);
        usuario = userDB;
        document.title = usuario.nombre;

    } catch (error) {

        alert("Se produjo un error en autenticación.");
        window.location = 'index.html';

    }

    //Inicio socket 
    await conectarSocket();

}


//Inicio socket 
const conectarSocket = async () => {

    //Instancio Socket -> Siempre y cuando el front tenga lo requerido 
    socket = io({
        'extraHeaders': {
            'x-token': localStorage.getItem('token')
        }
    });

    //Eventos  a Huevooooooooooooooooooo
        socket.on('connect', ()=>{
            console.log('Sockets online'); 
        });

        socket.on('disconnect', ()=>{
            console.log('Sockets offline'); 
        });

    //Inicio mis escuchadores 
    socket.on('recibir-mensajes', dibujarMensajes);    
    
    socket.on('usuarios-activos', (payload)=>{
        //chat.jsconsole.log(payload);
        dibujarUsuarios(payload);

    });   
    
    socket.on('mensaje-privado', ()=>{

    });

    //Inicio Eventos 
    



}


const dibujarUsuarios =(usuarios = [] )=>{

    let usersHtml = '';

    usuarios.forEach( user=>{
        usersHtml+=`
            <li>
                <p>
                    <h5 class="text-success">${user.nombre}</h5>
                    <span class="fs-6 text-muted">${user._id}</span>
                </p>
            </li>

        `;
    });

    ulUsuarios.innerHTML = usersHtml;
}

const dibujarMensajes =(mensajes = [] )=>{

    let mensajesHtml = '';

    mensajes.forEach( ({nombre, mensaje, time})=>{
        mensajesHtml+=`
                <li class="in">
                    <div class="chat-img">
                    <h5>${nombre}</h5>    
                    <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png">
                        
                    </div>
                    <div class="chat-body">
                        <div class="chat-message">
                            <h5>${nombre}</h5>   
                            <h5>${mensaje}</h5>
                            <p>${time}</p>
                        </div>
                    </div>
                </li>`;
    });

    ulMensajes.innerHTML = mensajesHtml;
}

const main = async () => {
    await validarJWT();
}

txtMensaje.addEventListener('keyup', ({keyCode})=>{
    //console.log(env);
    const mensaje = txtMensaje.value;
    const uid = txtUid.value;
    const time =  new Date();

    //Valido que no sea la tecla neter
    if(keyCode !== 13){
        return;
    }
    if( mensaje.length === 0 ){
        return;
    }

    socket.emit('enviar-mensaje', {mensaje, uid, time});

    txtMensaje.value = '';

})

main();

//
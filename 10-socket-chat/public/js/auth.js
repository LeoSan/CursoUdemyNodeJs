

const miFormulario = document.querySelector('form');
const msjAlert = document.querySelector('#msjAlert');

msjAlert.style.display = 'none';

const url = ( window.location.hostname.includes('localhost') )
            ? 'http://localhost:8080/api/auth/'
            : 'https://restserver-curso-fher.herokuapp.com/api/auth/';


//Genero Escuchador JS

miFormulario.addEventListener('submit', ev => {


    ev.preventDefault();//Esta manera evita hacer un refresh del navegador web 
    
    console.log("entro aqui");
    const formData = {};//Data que queremos enviarle al servidor 

    //Manera de leer los elementos del formulario 
    for( let el of miFormulario.elements ) {
        if ( el.name.length > 0 ) 
            formData[el.name] = el.value
    }

    //Enviamos la petición. 
    fetch( url + 'login', {//Es una promesa 
        method: 'POST',
        body: JSON.stringify( formData ),//Serealizamos 
        headers: { 'Content-Type': 'application/json' }// Decimos que es un tipo Json 
    })
    .then( resp => resp.json() )//Entonces 1 
    .then( ({ msg, token }) => {//Entonces 2 
        if( msg ){
            msjAlert.style.display = 'block';
            msjAlert.innerText = msg;
            return console.error( msg );
        }
        msjAlert.style.display = 'none';
        localStorage.setItem('token', token);
        window.location = 'chat.html';
    })
    .catch( err => {
        console.log("Error::",err);
        msjAlert.style.display = 'block';
        msjAlert.innerText = err;
    })
    
});




            

function onSignIn(googleUser) {

    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var id_token = googleUser.getAuthResponse().id_token;
    const data = { id_token };

    fetch( url + 'google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data )
    })
    .then( resp => resp.json() )
    .then( ({ token }) => {
        localStorage.setItem('token',token);
        window.location = 'chat.html';
    })
    .catch( console.log );
    
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

        msjAlert.style.display = 'block';
        msjAlert.innerText = 'User signed out.';
    console.log('User signed out.');
    });
}
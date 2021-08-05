const express = require('express');
const app = express();


//Midleware 

//Permite manejar paginas dinamicas handlebars
app.set('view engine', 'hbs'); 

//Servir contenido estatico
app.use( express.static('public') );



//Configuración de rutas 

app.get('/', function (req, res) {
    
    const opciones = {
        nombre:'Leonard',
        titulo:'Como usar handlebars'
    }
    res.render('home', opciones);
    
});


app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/hola-italiano', function (req, res) {
    res.send('Ciao mondo,  mondo,  mondo, mondo, mondo')
});


//Error -> Ruta que permite redireccionar si el usuario pone una ruta que no esta mapeada 
app.get('*', (req,  res)=>{
    res.sendFile(__dirname + '/public/404.html');
});

/* por la linea 7 se obvia este paso 
// Nuestro primer hola mundo 
app.get('/', function (req, res) {
    res.send('Hello World')
});
*/

// Esto permite indicar en que puesto escuchara 
app.listen(3000)
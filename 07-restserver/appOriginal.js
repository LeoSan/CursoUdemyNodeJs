//Paso 1: Importamos  
const express = require('express');
const app = express();

require('dotenv').config()

//Paso 2: Generamos ruta 

app.get('/',  (req, res)=> {
    res.send('Ciao mondo')
});


//Paso 3: 
// Esto permite indicar en que puesto escuchara 
app.listen(process.env.PORT,  ()=>{

    console.log('Estoy escuchando desde el puerto ->'  + process.env.PORT  );
})

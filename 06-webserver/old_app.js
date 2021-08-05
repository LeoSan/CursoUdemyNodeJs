
//Documentación -> https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener

//Este viene por defecto en node.js para transformar tu node en un server 
const http = require('http');

http.createServer( (req, res)=>{

res.writeHead(200, {'Content-Type': 'application/json'}); 

const persona = {
    id:1,
    edad:33,
    nombre:'Leonard'
}


        res.write(JSON.stringify(persona) );
        
        res.end();

})
.listen(3050);

console.log("Escuchando ", 3050)


//Importo librerias 
require('dotenv').config();

//Importo clase
const Server = require('./models/server');


//Instancio Objeto server
const server = new Server();

//Inicio con listen 
server.listen();



 

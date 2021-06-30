 
 //Manera de crear arhivos en Node.js 
const { crearArchivo } = require('./Hepers/multiplicar');
const { argv } = require('./Hepers/YargsConfig');

console.clear();

/*Ejemplo de argv -> usando yarg */

console.log(process.argv); 
console.log(argv); 
console.log("Nuestra base:yarg ->" , argv.base); 
console.log("Nuestra listar:yarg ->" , argv.listar); 
console.log("Nuestra hasta:yarg ->" , argv.hasta); 
console.log("Nuestra operacion:yarg ->" , argv.operacion); 


//let base = 6; 
let base =  argv.base; 
let listar =  argv.listar; 
let hasta =  argv.hasta; 
let operacion =  argv.operacion; 

/*
Es la forma de validar que puedes recibir por consola 
console.log(process.argv); //Forma de capturar por teclado valores ejemplo-> node app --base=5 --limite=110
const [, , arg3 = "base=5"] = process.argv; 
const [ , base ] = arg3.split('=');

*/

crearArchivo( base, listar, hasta, operacion )
    .then(nombreArchivo =>console.log(nombreArchivo.rainbow, '->Creada └°.° '.yellow) )
    .catch(err=>console.log('Error', err));

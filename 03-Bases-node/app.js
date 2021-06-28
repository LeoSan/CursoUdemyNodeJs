 
 //Manera de crear arhivos en Node.js 
const { crearArchivo } = require('./Hepers/multiplicar');
const argv = require('yargs').argv;

console.clear();

/*Ejemplo de argv -> usando yarg */

console.log(process.argv); 
console.log(argv); 
console.log("Nuestra base:yarg ->" , argv.base); 


let base = 6; 

/*
Es la forma de validar que puedes recibir por consola 
console.log(process.argv); //Forma de capturar por teclado valores ejemplo-> node app --base=5 --limite=110
const [, , arg3 = "base=5"] = process.argv; 
const [ , base ] = arg3.split('=');

*/

crearArchivo(base)
    .then(nombreArchivo =>console.log(nombreArchivo, 'Creado') )
    .catch(err=>console.log('Error', err));

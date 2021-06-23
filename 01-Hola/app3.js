//#Autor: Leonard Cuenca 
//#Primeras Practicas. 

// usando el metodo pilas y colas va ejecutando 
//Son instrucciones no bloqueantes son Syncronos
//Establece una pila de ejecucción 
//Cae en un stack de procedimientos a ejecutar 

console.log('Inicio de programa -0');

setTimeout(() => {
    console.log("Primer Timeout -3 ");
}, 3000);

setTimeout(() => {
    console.log("Segundo Timeout -1 ");
}, 0);


setTimeout(() => {
    console.log("Tercero Timeout - 2 ");
}, 0);

console.log('Fin del programa ');




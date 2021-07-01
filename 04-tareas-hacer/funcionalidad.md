# Explico como instalar y datos utiles 

- Paso 1: npm init -y 
- Paso 2: npm i colors 
- Paso 3: Podemos crear una función tipo java -> Maqueta inicial 
```javascript

//Importo librerias 
require('colors');

console.clear();

const main= async()=>{

    console.log("hola mundo".green);


}

main();

```

Paso 4: Creamos nuestros helpers en este caso creamos mensaje.js 
este nos mostrara el menu para mostrar las opciones usamos una promesa -> resolver -> await -> todo esto para indicarle al computador que genera un evento y espera hasta que devuelva algo para poder interactuar con la consola ya que la consola es secuencual y con promise podemos indicarle que espere 
```javascript

const mostrarMenu = ()=>{

     //Creamos una promesa para que se pueda ejecutar 
    return new Promise(resolver => {
        console.clear();
        console.log("=========================================".red);
        console.log("##  <--|°.°|--> Seleccione una  opción ##".yellow);
        console.log("========================================\n".red);
    
        console.log(` ${'1.'.green } Crear tarea`);
        console.log(` ${'2.'.green } Listar tareas`);
        console.log(` ${'3.'.green } Listar tareas completadas`);

        console.log(` ${'0.'.green } salir \n`);
    
        /*Manera de escribir y recibir por pantalla */
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
        /*Manera mostrar en pantalla */
        readLine.question('Seleccione una opción:', (opt)=>{
            //console.log({ opt });
            readLine.close();
            resolver(opt);
        })
    })
}
```

Paso 5:  Importamos nuestro helpers a nuesto app.js y lo ciclamos 

```javascript

//Metodo principal
const main= async()=>{

   // console.log("hola mundo".green);
   
    let opt = ''; 
    do{
        opt =  await mostrarMenu(); //Esperate hasta que devuelva algo 
        console.log( {opt } );
        if (opt !== '0' ) await pausa();
    }while( opt !=='0' );

}

main();
```
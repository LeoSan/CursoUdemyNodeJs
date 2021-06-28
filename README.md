# CursoUdemyNodeJs
Práctica de Udemy Sección como reforzamiento Node.Js y mejoramiento en JavaScript, como parte de mi entrenamiento constante y diario para seguir mejorando lógica y aditamentos sobre JS -> Node 

<p align="center"><a href="https://github.com/LeoSan/CursoUdemyNodeJs" 
                     target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="400"></a></p>

### Node desde cero a experto -> 

- Fundamentos
- Base de datos Node
- Desarrollo Primera App en Node Js
- Desarrollo App Clima
- Seción WebServer - HTTP - EXPRESS - HBS 
- REST Server - Configuracions Iniciales
- Alcance del RESTServer -> Colección de un Modelo
- Autenticación - JWT 

### Comandos Usados -> Forma de Memorizar y siempre tenerlos a la mano. 

- `npm install -g nodemon`
- `npm init` -> nos genera el package_json

> Pero que es el package.json -> Es el punto inicial de cualquier proyecto de node.js, nos indica que comando podemos ejeuctar para iniciar nuestra aplicación 

- `npm install colors` -> Nos permite instalar colores en consola 
- `npm install nodemon --save-dev` 
> Es la manera de indicarle que es una dependencia pero solo como desarrollo y para desintalar dependencias podemos ejecutar ` npm uninstall nodemon` , para actualizar `npm update` y para instalar versiones `npm install colors -@1.0.0` 
- `npm i yargs` -> Este paquete nos permite administrar de manera eficiente la lectura por consola [Enlace Yargs](http://yargs.js.org/)
```javascripts
const argv = require('yargs').argv;

console.clear();

/*Ejemplo de argv -> usando yarg */
console.log(process.argv); 
console.log(argv); 
console.log("Nuestra base:yarg ->" , argv.base); 
"En el comando por consola-> node app --base=5 "
```

### Seción de Reflexión, Detalles para ir mejorando. 
- Pendiente

### Links Guia 

- [Mi Bitacora - Drive ](https://docs.google.com/document/d/1KKjhdE4BX2Ooo8BxXNn3nWTgsLwnpuGkqZlzLJT8Zuk/edit#heading=h.o9v8so11ee13)
- [Curso - Udemy ](https://www.udemy.com/course/node-de-cero-a-experto/)
- [Estudios - Platzi](https://platzi.com/p/LEONARDCUENCA/)
- [Estudios - Udemy](https://www.udemy.com/user/leonard-cuenca-roa/)



https://pandao.github.io/editor.md/en.html



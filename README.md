# CursoUdemyNodeJs 🖥️ Básico Node.js 🖥️ 
Bienvenido a las guía para desarrolladores, de manera continua explicare los puntos mas resaltates y de las prácticas de Udemy, usare este documento como reforzamiento Node.Js y mejoramiento en JavaScript, como parte de mi entrenamiento constante y diario para seguir mejorando lógica y aditamentos sobre esta buena y divertida tecnología

<p align="center"><a href="https://github.com/LeoSan/CursoUdemyNodeJs" 
                     target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="400"></a></p>

### Temario -> Node desde cero a experto 

- Fundamentos
- Base de datos Node
- Desarrollo Primera App en Node Js
- Desarrollo App Clima
- Seción WebServer - HTTP - EXPRESS - HBS 
- REST Server - Configuracions Iniciales
- Alcance del RESTServer -> Colección de un Modelo
- Autenticación - JWT 

### Comandos -> Forma de Memorizar y siempre tenerlos a la mano. 

- `npm init -y` -> nos genera el package_json
> Pero que es el package.json -> Es el punto inicial de cualquier proyecto de node.js, nos indica que comando podemos ejeuctar para iniciar nuestra aplicación 
- `npm install colors` -> Nos permite instalar colores en consola 
- `npm install nodemon --save-dev` 
> Con este comando hay que tener cuidado, ya que hay que configurar el package.json de la siguiente manera ->  nodemon -e js ./app.js -> donde app.js es su archivo main es decir el iniciador generalmente lo nombran como index.js o app.js Ejemplo. 
```
  "scripts": {
    "dev": "nodemon -e js ./app.js node app.js"
  },
```

> Es la manera de indicarle que es una dependencia pero solo como desarrollo y para desintalar dependencias podemos ejecutar ` npm uninstall nodemon` , para actualizar `npm update` y para instalar versiones `npm install colors -@1.0.0` 
> 
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

>Para el uso de peticiones request usando API externas podemos usar las tres mas usadas 
- [Request - Ya obsoleta](https://www.npmjs.com/package/request) 
- [fetch - Usp de Callback - Usada en navegadores reemplazo del ajax](https://www.npmjs.com/package/fetch)
- `npm i axios`  => [Axios- Altamente configurable y segura](https://www.npmjs.com/package/axios) -> Este es el que mas se usa 

- `npm i dotenv` -> Dotenv  nos permite crear variables de entorno  => [Crear Variables de entorno](https://www.npmjs.com/package/dotenv)  -> 
- `npm install hbs` -> Esto permite lograr dinamismo en tus paginas estaticas es como la parte de angular {Valor}-> [pillarjs](https://github.com/pillarjs/hbs) 
- `npm i cors` -> Permite evitar el original cross server es un midlewares y como lo sabes (Todo aquello que use app.use es un midle)  -> https://www.npmjs.com/package/cors

### Como generar un realease 
- Paso 1:Luego de generar un código estable podemos ejecutar el comando `git tag -a-Nombredetutag-  -m"Comentario de tu tags"`
- Paso 2: Luego de generar tu tag hay que subirlo a tu git con este comando `git push --tags`
- Paso 3: Ubicamos la interfaz de  github y damos clic `Realeases` 
- ![Releases](https://github.com/LeoSan/CursoUdemyNodeJs/blob/main/07-restserver/public/release01.png)
- Paso 4: Debemos dar clic en el tag y luego clic en editar (Edit tag) y luego clic en publics releases, claro previamente llenar los campos descriptivos 

### Tips para Heroku
 >PD 1: Cuando tengas tu desarrollo listo podemos exportar en heroku, yo lo hago por la interfaz de git para monstarlo en heroku, pero antes debes hacer ajustes en tu package.json 
 >en la sección de script hay que poner `start:"node app"` donde app es el nombre de tu archivo principal. 

![Tips Heroku](https://github.com/LeoSan/CursoUdemyNodeJs/blob/main/07-restserver/public/TipsHeroku.png)

### Pasos Para configurar 
- Paso 1: Debemos crear una cuenta ya la tienes 
- Paso 2: Debemos crear un usuario para la base de datos segir la siguiente imagen 
- Paso 3: Debemos generar script para conexión que pondremos en `.env`


mongodb+srv://AppCafe:HwbZQr2Q0YjVWLaS@cluster0.nhlca.mongodb.net/AppCafe
### Seción de Reflexión, Detalles para ir mejorando. 
- Pendiente

### Links Guia 

- [Mi Bitacora - Drive ](https://docs.google.com/document/d/1KKjhdE4BX2Ooo8BxXNn3nWTgsLwnpuGkqZlzLJT8Zuk/edit#heading=h.o9v8so11ee13)
- [Curso - Udemy ](https://www.udemy.com/course/node-de-cero-a-experto/)
- [Estudios - Platzi](https://platzi.com/p/LEONARDCUENCA/)
- [Estudios - Udemy](https://www.udemy.com/user/leonard-cuenca-roa/)
- [Documetación - Base](https://pandao.github.io/editor.md/en.html)






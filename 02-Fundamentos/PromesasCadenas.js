//Callback-hell->  Es la anidación de callbask 
const empleados = [
    {
        id:1,
        nombre:'Leo'
    },
    {
        id:2,
        nombre:'Kenny'
    },
    {
        id:3,
        nombre:'Jose'
    },   
    {
        id:4,
        nombre:'Jose Dos'
    },

]; 


const salarios = [
    {
        id:1,
        salario:'2000'
    },
    {
        id:2,
        salario:'3000'
    },
    {
        id:3,
        salario:'0'
    },

]; 

//Recuerda mandar un argumento para que una función pueda reponder el callback  (id, callbak)
//Y dentro del cuerpo de l metodo debemos usar el callback


const getEmpleado = (id)=>{
    const empleado = empleados.find( (e) =>{
        return e.id === id
    } );

    //Resolver ->  es llamar un callbak cuando todo sucede correctamente 
    //Reject ->  es un metodo que llamaremos cuando algo sale mal 
    const promesa = new Promise( (resolve, reject)=>{
        //Cuerpo de la promesa

        if (empleado){ 
            resolve(empleado);
        }else{
            reject(`No existe empleado con id ${id}`);
        }

    } );

    return promesa; 
}



const getSalario = (id)=>{
    const salario = salarios.find( (e) =>{
        return e.id === id
    } );

    //Resolver ->  es llamar un callbak cuando todo sucede correctamente 
    //Reject ->  es un metodo que llamaremos cuando algo sale mal 
    const promesa = new Promise( (resolve, reject)=>{
        //Cuerpo de la promesa

        if (salario){ 
            resolve(salario);
        }else{
            reject(`No existe salario con id ${id}`);
        }

    } );

    return promesa; 
}

let id = 4; 
getEmpleado(id)
    .then(empleado => console.log( empleado )) //Ejecuta el lado bueno 
    .catch(err=> console.log( err ) );//Ejecuta el lado reject 


getSalario(id)
    .then(salario => console.log( salario )) //Ejecuta el lado bueno 
    .catch(err=> console.log( err ) ); //Ejecuta el lado reject 


/////////////////////////////////////////////////////////////////////////////////////////////////////////$Recycle.Bin
//Promesa En Cadenas
let nombre;


getEmpleado(id)
    .then(empleado =>{
        nombre = empleado.nombre;
        return getSalario(id);//No podemos olvidar el return ya que si no se ajecuta la segunda promesa 
    })
    .then(salario =>{
        console.log(`El empleado:`, nombre, `Tiene un salario de:`, salario.salario);
    }).catch(err=> console.log( err ) ); //Cuando son cadenas podemos conservar un solo catch





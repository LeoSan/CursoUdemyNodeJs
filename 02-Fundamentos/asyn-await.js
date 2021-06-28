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

const id= 4; 

//Async Await-> Oki Js, esperame aqui hasta que tengas respuesta de la promesa, y cuando lo tengas lo asignas donde yo desee 
//Async -> transforma tu función en una promesa solo hace eso 

const getinfoUsuarioHolaMundo = async()=>{
    return "hola  mundo";
}

getinfoUsuarioHolaMundo().then(msg =>{
    console.log(msg)
})

//////////////////////////////////////////////////////////////////////////////////////////
const getinfoUsuario = async(id)=>{
    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado:${empleado.nombre} Tiene un salario de: ${salario.salario}`;

    } catch (error) {
        throw error;//Esto dispara al catch en caso que se programe 
    }
}


getinfoUsuario(id).then(msg =>{
    console.log(msg)
}).catch(err => console.log(err))
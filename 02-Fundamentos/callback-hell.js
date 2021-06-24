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
const getEmpleado = (id, callbak)=>{
    const empleado = empleados.find( (e) =>{
        return e.id === id
    } )

    if (empleado){
        callbak(null, empleado); 
    }else{
        callbak(`Empleado con id: ${id} no existe`);
    }
    
}

getEmpleado(1, (err, empleado)=>{
    if(err){
        return console.log( "Error", err);    
    }
    console.log(empleado);
});
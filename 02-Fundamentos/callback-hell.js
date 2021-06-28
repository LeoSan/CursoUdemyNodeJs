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

const getSalario = (id, callbak)=>{
    const salario = salarios.find( (e) =>{
        return e.id === id
    } )

    if (salario){
        callbak(null, salario); 
    }else{
        callbak(`No existe Salario para el ${id} `);
    }
    
}
//Cllback Normal
getEmpleado(1, (err, empleado)=>{
    if(err){
        return console.log( "Error", err);    
    }
    console.log(empleado);
});




//Cllback Normal
getSalario(1, (err, salario)=>{
    if(err){
        return console.log( "Error", err);    
    }
    console.log(salario);
});


//CallBack hell 

const getEmpleadoHell = (id, callbak)=>{
    const empleado = empleados.find( (e) =>{
        return e.id === id
    } )

    if (empleado){
        callbak(null, empleado); 
    }else{
        callbak(`Empleado con id: ${id} no existe`);
    }
    
}

let id = 4; 

getEmpleadoHell(id, (err, empleado)=>{
    if(err){
        return console.log( "Error", err);    
    }
    
    getSalario(id, (err, salario)=>{
        if(err){
            return console.log( "Error", err);    
        }
        console.log(`El empleado:`, empleado.nombre, `Tiene un salario de:`, salario.salario);
    });

});

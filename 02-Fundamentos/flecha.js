//Antes 


function sumar(a, b){

    return a+b; 
}

console.log( sumar(5,10) );

//Ahora 
//se puede manejar otra tipo let, var, pero const es mejor ya que no se debe cambiar la función

const sumaNew = (a, b)=>{

    return a + b; 

}

console.log( sumaNew(20,10) );
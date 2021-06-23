//#Autor: Leonard Cuenca 
//Primeras Practicas. 

//Explicación Var -> Como lo indica es una variable de ambito global -> YA  NO SE DEBE USAR VAR 
var nombreVar = "Leonard"; 

if (true ){
    var nombreVar ="Magneto";
}

console.log(nombreVar);

//Explicación let -> Como lo indica es una variable de ambito local 
let nombreLet = "Leonard";  // Scope 1 

if (true ){
    //let nombreLet ="Magneto"; // Scope 2-> Como lo indica visual studio 
    
    // coloca la letra de manera clara porque esta re declarando
    // una variable pero js no lo hace y se queda con el primer scope

    //Scope 3  -> debe hacerce asi no declarar de nuevo si no asignar para que tome el valor magneto  
     nombreLet ="Magneto"; 

}

console.log(nombreLet);

//Explicación const -> Como lo indica es una variable de ambito constante 
const nombreConst = "Leonard Constante";  // Scope 1 

if (true ){
    //Scope 2  -> nos genera error en tiempo de ejcucción porque las constantes 
    // no se deberian cambiar. PERO -> No tiene las propiedes setter que si tiene el let,  por ende son mas ligeras y 
    // Y EL PROGRAMA CORRE MAS EFICIENTE por eso muchos programadores la usan para declarar como en react useState o incluso variables 
    // o funciones arrow 
     nombreConst ="Magneto"; 

}

console.log(nombreConst);
const Objeto = {
    nombre:'Leonard',
    apellido:'Cuenca',
    poder:'Normal',
    edad:'33',
    
    getNombre (){
        return `${this.nombre} ${this.apellido} `

    }
}
//Antes 
let nom = Objeto.nombre;
let ape = Objeto.apellido; 


//Ahora 
//Metodos Destructuracion o distrouchion en ingles !!!
const { nombre, apellido, fuera=0} = Objeto; 

console.log( `Impresion 1: Tu Nombre es : ${nombre} y apellido es:  ${apellido} ${fuera}` );


//Destructuración por parametros 

function imprimir({ nombre, apellido, edad}){
    
    return( `Impresion 2: Tu Nombre es : ${nombre} y apellido es:  ${apellido} tiene una edad de:${edad}` );

}

console.log(imprimir(Objeto) );


//Destrictura arreglos
const heroes = ['Batman', 'superman', 'Deadpool'];

const [h1, h2, h3] = heroes; 
 const [ , , h4] = heroes;  // En caso que no necesitemos otros valores 

console.log(h1, h2, h3);
console.log( h4);

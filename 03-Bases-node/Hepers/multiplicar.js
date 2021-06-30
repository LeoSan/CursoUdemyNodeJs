var colors = require('colors');
const  fs = require('fs');

const crearArchivo = async(base = 2, listar=false, hasta=10, operacion = '*')=>{
        try {
            let nomArchivo;
            if (operacion == '*'){
                const resultado = await getMultiplicar(base,listar, hasta);
                 nomArchivo = `Tabla_Multiplizacion_${base}.txt`;
                fs.writeFileSync(nomArchivo, resultado);
            }else{
                const resultado = await getDividir(base,listar, hasta);
                 nomArchivo = `Tabla_Division_${base}.txt`;
                fs.writeFileSync('salida/'+nomArchivo, resultado);
            }
            return nomArchivo;
        } catch (error) {
            throw error;//Esto dispara al catch en caso que se programe una promesa con catch 
        }
}

const getMultiplicar = (base,listar, hasta)=>{
    let salida = ''
    let consola = ''; 

    for(let i= 0; i<=hasta; i++ ){
        salida +=`${base} x ${i} = ${base*i}  \n`;

        if ( i%2 == 0 ){
            consola +=`${base} x ${i} = ${base*i}  \n`.rainbow;
        }else{
            consola +=`${base} x ${i} = ${base*i}  \n`.yellow;
        }
    }

    muestraIndice(base, listar, consola);

    return salida;
}

const getDividir = (base, listar, hasta)=>{
    let salida = ''
    let consola = '';  

    for(let i= 0; i<=10; i++ ){
        salida +=` ${i} / ${base} = ${i/base}  \n`;

        if ( i%2 == 0 ){
            consola +=`${i} / ${base} = ${i/base}  \n`.rainbow;
        }else{
            consola +=`${i} / ${base} = ${i/base}  \n`.yellow;
        }        
    }

    muestraIndice(base, listar, consola);

    return salida;
}

const muestraIndice=(base, listar, consola)=>{
    if (listar === true){
        let string = ''; 

        string +="\n##############################\n".rainbow;
        string +=`\n######TABLA DEL #${base} #####\n`.green;
        string +="\n##############################\n".rainbow;

        string += consola;
        console.log( string );
        return string;
    }

}

/*
module.exports = {
   crearArchivo:crearArchivo
}*/
module.exports = {
    crearArchivo
}



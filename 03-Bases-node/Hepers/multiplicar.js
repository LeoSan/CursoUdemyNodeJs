const  fs = require('fs');

const crearArchivo = async(base)=>{
        try {
            const resultado = await getMultiplicar(base);
            const nomArchivo = `tabla_${base}.txt`;
            fs.writeFileSync(nomArchivo, resultado);
            return nomArchivo;
        } catch (error) {
            throw error;//Esto dispara al catch en caso que se programe una promesa con catch 
        }
}

const getMultiplicar = (base)=>{
    let salida =''; 

    for(let i= 0; i<=10; i++ ){
        salida +=`${base} x ${i} = ${base*i}  \n`;
    }

    return salida;
}

const getDividir = (base)=>{
    let salida =''; 

    for(let i= 0; i<=10; i++ ){
        salida +=`${base} / ${i} = ${base/i}  \n`;
    }

    return salida;
}

/*
module.exports = {
   crearArchivo:crearArchivo
}*/
module.exports = {
    crearArchivo
}



const fs = require('fs');
const archivo = './DB/data.json';

const guardarDB = ( data )=>{
    
    let historial = leerDB(); 
    let arreglo = []; 
    arreglo.push(historial); 

    if ( validar(data,  arreglo ) ) {
      arreglo.push(data); 
      fs.writeFileSync(archivo, JSON.stringify( arreglo ) );
    }

}

const leerDB = (  )=>{
  if ( !fs.existsSync (archivo)  ){
     return null; 
  }  

  //Leo la data
  const info = fs.readFileSync( archivo, { encoding:'utf-8' } );
  const data = JSON.parse(info);

  return data;
}

const validar = ( dataSeleccionada, arreglo )=>{
  const lugar = dataSeleccionada.nombre; 

  if ( arreglo.find( l => l.nombre === lugar ) ){
      return false; 
  }else{
    return true; 
  }
}

module.exports = {
    guardarDB,
    leerDB
}
//Importo libreria 
//Importo uuid para generar archivos unicos
const path = require('path');
const {v4:uuidv4 } = require('uuid');


/**
 * Permite subir archivos ya con validaciones incluidas Debes enciar cierto parametros 
 * req.files, 
 * Por defecto ya valida ciertas extensiones pero desde el controlador puedes setear esos valores
 * Ya puede crear diretorios gracias al  createParentPath:true, si no le envias nada todo lo genera en el uploads  
 * **/

const valSubirArchivo = ( files, extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'] ,  directorio = '' ) => {

    return new Promise((resolve, reject) => {

        //Iniciamos proceso de   
        //console.log('req.files >>>', req.files); // eslint-disable-line

        //Aplico destruction para extraer la info 
        const { archivo } = files;

        //Extraigo extension 
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];

        if (!extensionesValidas.includes(extension)) {
            return reject(`La extension no es valida, - Extensiones permitidas: ${extensionesValidas}`); 
        }

        //Nombre temporal del archivo de
        const nombTemp = uuidv4() + '.' + extension;

        //Lugar donde se almacenaran los archivos
        const uploadPath = path.join(__dirname, '../uploads/', directorio, nombTemp);

        archivo.mv(uploadPath, (err) => {
            if (err) {
                console.log("err", err);
                return  reject(`Ocurrio un error , Erro - ${err}`); 
            }
            resolve(`El archivo se subio de manera correcta , Nombre: ${archivo.name}`)
        });
    });


}

module.exports = {
    valSubirArchivo
}
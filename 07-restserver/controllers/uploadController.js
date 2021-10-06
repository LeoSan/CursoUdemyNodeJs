//Requiero librerias de Nodejs 
const path = require('path');
const { response } = require('express');
const bcryptjs = require('bcryptjs');

//Importo uuid para generar archivos unicos
const {v4:uuidv4 } = require('uuid');


//Requiero Model 
const Usuario = require('../models/usuario');

//Controlador - uploader 
const uploader = async (req, res = response) => {

    //Valido si cumple con lo basico de archivos 
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(403).json({ msg: "No hay Archivo", success: false });
    }


    //Valido si viene el campo tipo file del formulario llamado archivo 
    if (!req.files.archivo) {
        return res.status(403).json({ msg: "No hay Archivo", success: false });
    }   
    
    //Iniciamos proceso de   
     //console.log('req.files >>>', req.files); // eslint-disable-line
  
    //Aplico destruction para extraer la info 
    const { archivo } = req.files;

    //Extraigo extension 
    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[nombreCortado.length -1];
    const extensionVal = ['png', 'jpg', 'gif', 'jpeg']

    if (extensionVal.includes(extension)){
        return res.status(400).json({ msg: `La extension no es valida`, success: false });
    }
  
    //Nombre temporal del archivo de
    const nombTemp = uuidv4() + '.' + extension; 

    //Lugar donde se almacenaran los archivos
    const  uploadPath = path.join( __dirname,  '../uploads/', nombTemp);
  
    archivo.mv(uploadPath, (err)=> {
        if (err) {
            console.log("err", err);
          return res.status(500).json({ msg: "No hay Archivo", success: false, error: err});
        }
    
        res.status(500).json({ msg: "Archivo se subio Exitosamente", success: true, archivo});
      });

}   


module.exports = {
    uploader
}

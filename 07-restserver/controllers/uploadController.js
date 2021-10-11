//Requiero librerias de Nodejs 
const { response } = require('express');

const { valSubirArchivo } = require('../helpers/subir-archivos');




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

    //Como revuelve una promesa: Recuerda que puedes usar su propio 
    //catch siempre y cuando uses then enviando una función ()=> 
    //De esta manera 
    //valSubirArchivo()= Permite subir archivos solo debes enviar los parametros por defecto ono 
    const result = await valSubirArchivo(req.files, undefined, 'images' ).then( (result)=>{
        res.status(200).json({msg: result, success:true}); 
    }).catch((err)=>{
        res.status(401).json({msg: err, success:false}); 
    }); 

    

}   


module.exports = {
    uploader
}

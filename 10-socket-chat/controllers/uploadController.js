//Requiero librerias de Nodejs 
const { response } = require('express');


//Importo helper que me ayudará a tener la logica de subir archivos
const { valSubirArchivo, eliminaArchivo } = require('../helpers/subir-archivos');

//Importo modelo 
const Usuario = require('../models/usuario');

//importaciones tipo  file 
const path = require('path'); 
const fs = require('fs'); 



//Controlador - uploader 
const uploader = async (req, res = response) => {

    //Valido si cumple con lo basico de archivos  > Esta validación se migro a un middleware
/*    if (!req.files ) {
        return res.status(403).json({ msg: "No hay Archivo tipo file", success: false });
    }
*/

    //Valido si viene el campo tipo file del formulario llamado archivo 
  /*  if (!req.files.archivo) {
        return res.status(403).json({ msg: "Por favor seleccione un arhivo", success: false });
    }
*/

    //Permite eliminar archivo si existe
    const {idUser} = req.body;
    const valElimina = eliminaArchivo(idUser);
    console.log("valElimina", valElimina);

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

const getImagen = async (req, res = response) => {

    //Forma de mandar query -> Es decir multiples parametros opcionales 
    const { idUser } = req.body

    //Consulta al usuario 

    const usu = await Usuario.findById(idUser);
    
    if (!usu){
        res.status(401).json({msg:"No Existe usuario", success:false});
    }

    await Usuario.findByIdAndUpdate(idUser, {img:"6a0bd78c-3f6f-43aa-a466-0f39da60bb02.png" } );
    
    //Valido si tiene imagen la
    if(!usu.img){
        res.status(401).json({msg:"Este usuario no tiene Imagen", success:false});

    }else{
        const pathImagen = path.join(__dirname, "../uploads", "images", "6a0bd78c-3f6f-43aa-a466-0f39da60bb02.png");
        if(fs.existsSync(pathImagen)){
            res.sendFile(pathImagen); //Forma de mostrar imagen            
        }else{
            res.status(401).json({msg:"Este usuario no tiene Imagen", success:false});
        }
    }
}



module.exports = {
    uploader,
    getImagen
}

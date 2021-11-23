//Importo Librerias 
const { response, request } = require('express'); 
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const validarJWT = async(req = request,res = response, next) => {

    const token = req.header('x-token'); // Aqui como lo defimos  en el end-pointer 

    //console.log('token', token);  //Valido si esta llegando el token 

    if (!token){
        return res.status(401).json({msg:"Token no valido", success:false}) 
    }
   
    try {
        
        //llamo al token jwt valido con la clave secreta -> Valido mi Token 
        const payload = jwt.verify(token, process.env.SECRET_KEY);

        //Extraer lo que viene el token 
        // console.log(payload); 
        const { uid } =  payload; 

        //Genero un nuevo atributo dentro del objeto request 
        req.uid = uid; //Ojo-> Super importante lo que creamos en los middle podemos recibirlos en los controladores 

        const usuario = await Usuario.findById(uid);
        //console.log("usuario", usuario);
        
        //Valido si el usuario existe 
        if (!usuario ){
            return res.status(401).json({msg:"Token No valido - - Usuario No Existe", success:false}) 
        }

        //Verificar si el usuario esta eliminado de manera logica 
        if (usuario.estado === false){
            return res.status(401).json({msg:"Token No valido - - Usuario esta eliminado", success:false}) 
        }

        req.usuAutenticado = usuario; //Esto Permite meter el resultado en REQ
        
        next();//Esto permite pasar a la siguiente metodo y de cierta manera pasa el Req

    } catch (error) {
        return res.status(401).json({msg:"Token no valido", success:false}) 
    }

    
}


module.exports = {
    validarJWT
}
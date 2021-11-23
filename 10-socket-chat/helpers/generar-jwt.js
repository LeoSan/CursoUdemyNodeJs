//Importo libreria 
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const generarJWT = ( uid = '' ) => {

    return new Promise((resolve, reject) => {

        const payload = {uid}

        jwt.sign(payload, process.env.SECRET_KEY, 
            {expiresIn:'1h'}, 
            (err, token)=>{
               if(err){
                   console.log(err)
                   reject('No se pudo generar el token');
               }else{
                   resolve(token);
               }
            } );

    }); 
}

const comprobarJWT = async(token  = '')=>{
    try {
        if (token.length <= 10){
            return null; 

        }

        const { uid } = jwt.verify(token, process.env.SECRET_KEY );

        const usuario = await Usuario.findById( uid );

        if(usuario){
            if (usuario.estado ){
                return usuario;
            }
            return null; 
        }else{
            return null;
        }


        
    } catch (error) {

        return null;
        
    }
}



module.exports = {
    generarJWT,
    comprobarJWT
}

//importo librerias 
const {response} = require('express');

const {validationResult}  = require('express-validator');


const validaCampos = (req, res, next )=>{

    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        console.log(errors.errors[0].msg);
        return res.status(400).json({msg:"Hubo un error de parametros!", success:false, listErrors:errors}); // bad request  
    }
    next();

}


const esAdminRole = (req, res = response, next )=>{

    if (!req.usuAutenticado){
        return res.status(500).json({msg:"Se desea verificar el rol", success:false}) 
    }

    const {rol, nombre} = req.usuAutenticado;

    if (rol !== 'ADMIN_ROLE'){
        return res.status(500).json({msg:`No cumples con el rol  ${nombre}.`, success:false}) 
    }

    next();

}
const tieneRole = ( ...roles  )=>{
    // (...) operador rest == resto une los argumentos -> Lo transforma en un arreglo 
    return (req, res = response, next)=>{

        if (!req.usuAutenticado){
            return res.status(500).json({msg:"Se desea verificar el rol", success:false}) 
        }   
        
        if( !roles.includes(req.usuAutenticado.rol)){
            return res.status(500).json({msg:"El servicio requiere un rol permitido", success:false}) 
        }
        next();
    }

}

module.exports ={
    validaCampos,
    esAdminRole,
    tieneRole
}
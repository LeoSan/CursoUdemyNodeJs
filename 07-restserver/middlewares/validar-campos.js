
//importo librerias 
const {validationResult}  = require('express-validator');


const validaCampos = (req, res, next )=>{

    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        console.log(errors.errors[0].msg);
        return res.status(400).json({msg:"Hubo un error de parametros!", success:false, listErrors:errors}); // bad request  
    }
    next();

}

module.exports ={
    validaCampos
}
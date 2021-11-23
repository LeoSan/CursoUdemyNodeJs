
//Importo Modelo 
const Role   = require('../models/role');
const Usuario = require('../models/usuario');

const isRolVal = async(rol = '')=>{
    const existeRol = await Role.findOne({rol}); 
    if (!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD `)
    }
}

const isEmailVal = async(correo = '')=>{
    //verificar si el correo existe 
    const existeEmail = await Usuario.findOne({ correo }); 
    if (existeEmail){
        throw new Error(`El correo ${correo} ya eaxite!`)
    }

}

const isExisteUserId = async(id = '')=>{
    //verificar si el correo existe 
    const existeEmail = await Usuario.findById(id); 
    if (!existeEmail){
        throw new Error(`El usuario no existe!`)
    }

}

module.exports = {
    isRolVal
    , isEmailVal
    , isExisteUserId
}
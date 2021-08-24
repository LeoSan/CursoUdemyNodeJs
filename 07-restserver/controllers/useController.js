const { response } = require('express');
const bcryptjs  = require('bcryptjs');
 

const Usuario = require('../models/usuario');

//importo middleware personalizado 
const { validaCampos } = require('../middlewares/validar-campos');

//Controlador - Crea Usuario 
const createUser = async(req, res = response  )=>{

    //Declaración de Var
    const { nombre, correo, password, rol } = req.body 
 
    //Instancio objeto Modelo Usuario -> lo preparo con las variables del post 
    const usuario = new Usuario({nombre, correo, password, rol});

    //Genero una nueva clave tipo  has 
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt);

    try {

        //Guardado del usuario 
        usuario.save(); 

        const datos = {
            msg:"Usuario Creado",
            usuario,
            success:true
        }
       return res.status(200).json(datos);
                
    } catch (error) {
        return res.status(403).json({msg:"", success:false, "error":error});
    }

}


const getUser = async(req, res = response  )=>{

    //Forma de mandar query -> Es decir multiples parametros opcionales 
    const { limite = 3, desde = 0 } = req.query 

    const usuarios = await Usuario.find()
            .skip(  Number(desde) )    
            .limit( Number(limite) ) ;

    const datos = {
        msg:"Ejemplo GET - Controlador",
        usuarios,
        success:true,
        limite,
        desde
    
    }

    res.status(200).json(datos);

}


const postUser = (req, res = response  )=>{

    const {nombre, edad} = req.body;

    const datos = {
        msg:"Ejemplo Post - Controlador",
        nombre,
        edad,
        success:true
    
    }

    res.status(403).json(datos);

}

const putUser = async(req, res = response  )=>{


    //Forma de enviar parametros por get 
    const  { id } = req.params; 
    const  { _id, password, google, correo, ...resto  } = req.body; // Nota Es la menra de extraer solo los datos que necesitamos ...resto es lo que usaremos lo demas le decimos que no vamos a usar 

    // Todo valida BD 
    if (password){
        //Genero una nueva clave tipo  has 
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync( password, salt);
    }
    const usuario  = await Usuario.findByIdAndUpdate(id, resto);

    //

    const datos = {
        msg:"Ejemplo Put - Controlador",
        name:"Leonard",
        lastname:"cuenca",
        id:id,
        success:true
    
    }

    res.status(403).json(datos);

}

const deleteUser = (req, res = response  )=>{

    const datos = {
        msg:"Ejemplo Delete - Controlador",
        name:"Leonard",
        lastname:"cuenca",
        success:true
    
    }

    res.status(403).json(datos);

}



module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    createUser

}

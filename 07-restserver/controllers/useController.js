const { response } = require('express');


const getUser = (req, res = response  )=>{

    const datos = {
        msg:"Ejemplo GET - Controlador",
        name:"Leonard",
        lastname:"cuenca",
        success:true
    
    }

    res.status(403).json(datos);

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

const putUser = (req, res = response  )=>{

    const datos = {
        msg:"Ejemplo Put - Controlador",
        name:"Leonard",
        lastname:"cuenca",
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
    deleteUser

}

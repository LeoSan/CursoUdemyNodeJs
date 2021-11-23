//importo librerias 
const { response } = require('express');
const bcryptjs = require('bcryptjs');

//Importo modelo 
const Usuario = require('../models/usuario');


//Importo moiddleware
const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {
    const { correo, password } = req.body;


    try {

        //verificar si el correo existe
        const usuario  = await Usuario.findOne( {correo} );
        if (!usuario)
            return res.status(400).json({ msg:"Usuario no existe" })

        //Verificar si el usuario esta ctivo 

        if (usuario.estado === false)
            return res.status(400).json({ msg:"Usuario no esta activo" })

        //Verificar la contraseña
        const valiPass = bcryptjs.compareSync(password, usuario.password);
        
        if (!valiPass)
            return res.status(400).json({ msg:"Password no son correctos" })

        //Generar el jwt 
        const token = await generarJWT(usuario.id);


        return res.status(200).json({
            token,
            usuario
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Habla con tu administrador de confianza"
        })
    }

}

//No olvidar Leonard: Esta es la forma ordinaria de validar un re si hubo otro metodo que ya solicito un metodo todo esta en el NEXT 
const renovarToken = async(req, res = response)=>{

    const { usuAutenticado } = req;

        //Generar el jwt 
        const token = await generarJWT(usuAutenticado.id);


    res.json({
        usuAutenticado,
        token
    });

}

module.exports = {
    login,
    renovarToken
};
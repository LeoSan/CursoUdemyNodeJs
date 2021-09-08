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

        res.json({
            msg:'login',
            token,
            usuario
        });
    

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Habla con tu administrador de confianza"
        })
    }

}

module.exports = {
    login
};
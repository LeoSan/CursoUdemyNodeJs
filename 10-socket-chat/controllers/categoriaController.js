const { response } = require('express');
const bcryptjs = require('bcryptjs');


const Categoria = require('../models/categoria');

//importo middleware personalizado 
const { validaCampos } = require('../middlewares/validar-campos');

//Controlador - Crea catgoria - publico 
const createCategoria = async (req, res = response) => {

   res.status(200).json({msg:"Todo ok"})

}


const getCategoria = async (req, res = response) => {

    res.status(200).json({msg:"Todo ok"})

}

const getCategoriaId = async (req, res = response) => {

    const { id } = req.params; 

    res.status(200).json(
        {
            msg:"Todo ok",
            id
    })

}
const editCategoria = async (req, res = response) => {

    const { id } = req.params; 

    res.status(200).json(
        {
            msg:"Todo ok",
            id
    })

}
const deleteCategoria = async (req, res = response) => {

    const { id } = req.params; 

    res.status(200).json(
        {
            msg:"Todo ok",
            id
    })

}


module.exports = {
    createCategoria, 
    getCategoria,
    getCategoriaId,
    editCategoria,
    deleteCategoria

}

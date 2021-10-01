//Iporto librerias 
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validaCampos, esAdminRole,tieneRole } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

//Importo mi Modelo a validar 
const Role = require('../models/role');

//Importo helpers 
const { isRolVal, isEmailVal, isExisteUserId } = require('../helpers/db-validators');


//Importo metodos del controlador 
const { getCategoria, getCategoriaId, createCategoria, editCategoria, deleteCategoria } = require('../controllers/categoriaController');

//Listados de rutas llamando a su controlador 

router.get('/get-categoria', getCategoria );

router.get('/get-categoria/:id', getCategoriaId );

router.post('/create-categoria', createCategoria );

router.put('/edit-categoria/:id', editCategoria );

router.delete('/delete-categoria/:id', deleteCategoria );

module.exports = router;
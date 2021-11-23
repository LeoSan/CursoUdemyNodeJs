//Iporto librerias 
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ validarJWT } = require('../middlewares');

//Importo metodos del controlador 
const {  login, renovarToken } = require('../controllers/authController');

const { validaCampos } = require('../middlewares/validar-campos');

//Listados de rutas llamando a su controlador 
router.post('/login', [
    check('correo',  'El correo es obligatorio').isEmail(),
    check('password', 'Password es obligatorio').not().isEmpty(),
    validaCampos
], login );   


//No olvidar Leonard: Esta es la forma ordinaria de validar un re si hubo otro metodo que ya solicito un metodo todo esta en el NEXT authController.js linea 54
router.post( '/' , validarJWT, renovarToken); 

module.exports = router; 
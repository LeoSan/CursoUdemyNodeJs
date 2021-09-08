//Iporto librerias 
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

//Importo metodos del controlador 
const {  login } = require('../controllers/authController');

const { validaCampos } = require('../middlewares/validar-campos');

//Listados de rutas llamando a su controlador 
router.post('/login', [
    check('correo',  'El correo es obligatorio').isEmail(),
    check('password', 'Password es obligatorio').not().isEmpty(),
    validaCampos
], login );   

module.exports = router; 
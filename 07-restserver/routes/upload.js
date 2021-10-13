//Iporto librerias 
const { Router } = require('express');
const router = Router();
//importo controlador
const { uploader, getImagen } = require('../controllers/uploadController');


//Importo middleware para mis validaciones de
const { validaCampoArchivo } = require('../middlewares'); 


//Listados de rutas llamando a su controlador 
router.post('/carga', [validaCampoArchivo] , uploader);

//Mostrar la Imagen 
router.post('/mostrar',getImagen);


module.exports = router;
//Iporto librerias 
const { Router } = require('express');
const router = Router();

//importo controlador
const { uploader } = require('../controllers/uploadController')


//Listados de rutas llamando a su controlador 
router.post('/carga', uploader);


module.exports = router;
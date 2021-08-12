//Iporto librerias 
const { Router } = require('express');
const router = Router();


//Importo metodos del controlador 
const {  getUser,
    postUser,
    putUser,
    deleteUser } = require('../controllers/useController');

//Listados de rutas llamando a su controlador 
router.get('/consulta', getUser );        

router.post('/peticion',  postUser  );    

router.put('/edit', putUser );        

router.delete('/delete', deleteUser);

module.exports = router; 
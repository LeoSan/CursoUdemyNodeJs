//Iporto librerias 
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validaCampos } = require('../middlewares/validar-campos');

//Importo mi Modelo a validar 
const Role = require('../models/role');

//Importo helpers 
const { isRolVal, isEmailVal, isExisteUserId } = require('../helpers/db-validators');


//Importo metodos del controlador 
const {  getUser,
    postUser,
    putUser,
    deleteUser,
    createUser } = require('../controllers/useController');

//Listados de rutas llamando a su controlador 
router.get('/consulta', getUser );        

router.post('/peticion',  postUser  );    

router.post('/create', [
    check('nombre',    'El nombre es  obligatorio').not().isEmpty()
    ,check('password',  'El password es  obligatorio').not().isEmpty()
    ,check('password',  'El password minimo es de 6 caracteres').isLength({min:6})
    ,check('correo',    'El correo no es valido').isEmail()
    ,check('correo').custom(isEmailVal) 
    //check('rol',       'El rol no es valido').isIn(['ADMIN_ROLE', 'USER_ROLE']), // Manera manual 
    /*check('rol').custom( async(rol = '')  =>{
        const existeRol = await Role.findOne({rol}); 
        if (!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la BD `)
        }
    }),*/ // Manera automativa BD 
    // check('rol').custom( (rol)=>isRolVal(rol)) //Manera mejorada valida BD 
    , check('rol').custom(isRolVal)//Manera mejorada  y resumida valida BD , esto es porque el mismo calback tiene el mismo parametro de referencia  
    , validaCampos
]
,  createUser  );    

//Forma de enviar parametros por get 
router.put('/edit/:id', [
      check('id', 'No es un Id valido').isMongoId()
    , check('id').custom(isExisteUserId)
    , check('rol').custom(isRolVal)//Manera mejorada  y resumida valida BD , esto es porque el mismo calback tiene el mismo parametro de referencia  
    , validaCampos
], putUser );        

router.delete('/delete', deleteUser);

module.exports = router; 
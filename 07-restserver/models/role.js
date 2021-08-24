//Importamos  nuestra libreria mongo
const { Schema, model } = require('mongoose');
 
//Importamos funcionalidad de mongo llamada Schema para genear las estructura de la  tabla en la  base de datos
// Creamos nuestra estructura que tedra nuestra tabla en la base de datos.
const RolesSchema = new Schema({
	rol:{
	   type: String,
	   required:[true, 'El rol es Obligatorio'],
	   enum:['ADMIN_ROLE','USER_ROLE'],
	},	
	estado:{
	   type: Boolean,
	   default:true,
	},
});
//Esta  sentencia nos  permite eportar nuestro modelo  como vemos se pasa como parametros (NombreModelo, EstructuraModelo ) -> definidos previamente.
module.exports = model('Role', RolesSchema);
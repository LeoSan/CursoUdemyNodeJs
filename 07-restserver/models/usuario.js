//Importamos  nuestra libreria mongo
const mongoose = require('mongoose');
 
//Importamos funcionalidad de mongo llamada Schema para genear las estructura de la  tabla en la  base de datos
const Schema = mongoose.Schema
 
// Creamos nuestra estructura que tedra nuestra tabla en la base de datos.
const usuariosSchema = new Schema({
	nombre: {
	   type:String,
	   required:[true, 'El  nombre es Obligatorio'],
	   unique:true,
	   lowercase:true,
	   trim:true,
	},
	correo:{
	   type: String,
	   required:[true, 'El nombre es Obligatorio'],
	   unique:true,  
	   lowercase:true,
	   trim:true,
	},	
	password:{
	   type: String,
	   required:[true, 'El password es Obligatorio'],
	   trim:true,
	},	
	img:{
	   type: String,
	   default:null,
	   lowercase:true,
	   trim:true,
	},
	rol:{
	   type: String,
	   required:[true, 'El rol es Obligatorio'],
	   enum:['ADMIN_ROLE','USER_ROLE'],
	},	
	estado:{
	   type: Boolean,
	   default:true,
	},
	google:{
	   type: Boolean,
	   default:false,
	},   
});

//Meotdo para sobreescribir 
usuariosSchema.methods.toJSON = function(){ //Tiene que ser una funcion normal para poder usar el this lo que no ()=> 
  const {__v, _id, password, ...user } = this.toObject();
  user.uid = _id
  return user;
}

//Esta  sentencia nos  permite eportar nuestro modelo  como vemos se pasa como parametros (NombreModelo, EstructuraModelo ) -> definidos previamente.
module.exports = mongoose.model('Usuario', usuariosSchema);
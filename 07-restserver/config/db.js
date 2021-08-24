const mongoose = require('mongoose');

const dbConetion = async ()=>{

    try {
       
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });

          console.log("BD Conectada!!");

    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar");
    }


}

module.exports = { dbConetion }
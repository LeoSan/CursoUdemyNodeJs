//Importo librerias 

const axios = require('axios');

class Busquedas {

    historial = ['']; 

    constructor(){
        //TODO: LEER db SI EXISTE 

    }

    //Genero un getteer 
    get paramsMapBox(){
        return {
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es',
        }
    }

    async ciudad( lugar = '' ){

        //Petición http 
        //console.log( 'Ciudad:',lugar );
        const intance = axios.create({
            baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.paramsMapBox
        });

        const resp = await intance.get();
        console.log(resp.data);

        return [];//Retorna las ciudades
    }



}

module.exports = Busquedas; 
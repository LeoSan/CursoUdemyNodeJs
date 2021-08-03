//Importo librerias 

const axios = require('axios');

class Busquedas {

    historial = ['']; 
    lat = 0;
    lng = 0;

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
    
    get paramsClima(){
        return {
            'appid':process.env.CLIMA_KEY,
            'lat':this.lat, // Si quieres usar la forma nueva debes quitar estos parametros 
            'lon':this.lng, //Si quieres usar la forma nueva debes quitar estos parametros 
            'units':'metric',
            'lang':'es'
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
        return  resp.data.features.map( filas => ({ 
            id:filas.id,
            nombre:filas.place_name,
            lng:filas.center[0],
            lat:filas.center[1]
         })); 


    }// Fin del metodo ciudad

    async clima (objLugar){

        //Setter valores del objeto para poderlos usar como parametros 
        this.lat = objLugar.lat;
        this.lng = objLugar.lng;

        const intance = axios.create({
            baseURL : ` https://api.openweathermap.org/data/2.5/weather`,
            params: this.paramsClima
            //params: { ...this.paramsClima, this.lat, this.lng} 
        });

        try {

            const resp = await intance.get();
            //console.log(resp.data);

            //Distroccion 
            const { weather } = resp.data;
            return  { 
                desc:weather[0].description,
                min:resp.data.main.temp_min,
                max:resp.data.main.temp_max,
                temp:resp.data.main.temp
             };
    
            
        } catch (error) {
            console.log(error);
        }
    }



}

module.exports = Busquedas; 
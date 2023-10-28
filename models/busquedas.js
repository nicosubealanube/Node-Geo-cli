const axios = require('axios');

class Busquedas {

        historial = ['Montevideo', 'Punta del Este', 'Piriapolis'];

        constructor() {
            //todo lee la db si existe
        }

        get paramsMapbox() {
            return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
            }
        }

        async ciudad ( lugar = ''){

            try {
                //peticion http 
                const intance = axios.create({
                    baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: this.paramsMapbox
                });
                const resp = await intance.get();
                console.log(resp.data);
                
                return [];
            } catch (error) {
                return [];
            }
            
        }
}

module.exports = Busquedas;

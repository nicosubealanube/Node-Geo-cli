const axios = require('axios');

class Busquedas {

        historial = ['Montevideo', 'Punta del Este', 'Piriapolis'];

        constructor() {
            //todo lee la db si existe
        }

        async ciudad ( lugar = ''){

            try {
                //peticion http 
                //console.log('ciudad', lugar);
                const resp = await axios.get('https://reqres.in/api/users?page=2');
                console.log(resp.data.per_page);
                
                return [];
            } catch (error) {
                return [];
            }
            
        }
}

module.exports = Busquedas;

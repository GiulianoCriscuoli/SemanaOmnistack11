
const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

    async index(request, response){

        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
       
    },


    async create(request, response){

        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // cria um id criptografado de 4 bytes hexadecimal
        // é um pacote do node o crypto, usado para criptografia
    
        await connection('ongs').insert({ // será inserido esses valores no cadastro
            
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        
        });

        return response.json({id});   // o json retorna as informações em objeto
        // retorna id para o usuario, pois é a entrada dele para o sistema
    }

};
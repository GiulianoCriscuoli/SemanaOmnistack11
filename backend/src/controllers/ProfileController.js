const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

        const ong_id = request.headers.authorization; //para pegar a variavel do header no insomnia

        const incidents = await connection('incidents').where('ong_id',ong_id).select('*'); //seleciona o perfil de uma ong especifica

        return  response.json(incidents); // vem as informações do banco

    }




}

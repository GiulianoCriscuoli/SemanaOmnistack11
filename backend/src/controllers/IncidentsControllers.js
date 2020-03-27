const connection = require('../database/connection'); // colocado onde é usado o BD

module.exports = {


    async index(request, response) {

        const {page = 1} = request.query; //na query é usado no insmonia para pega rinformação com "?page=id"

        const [count] = await connection('incidents').count(); //conta todos os incidents

        const incidents = await connection('incidents').join('ongs','ongs.id','=','incidents.ong_id')
        .limit(5).offset((page-1)*5).select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(incidents);

    },
    
    async create(request, response) {

        const {title, description, value} = request.body; //const params = request.query; // pegar a variavel que está na requisição http

        //console.log(params);
        const ong_id = request.headers.authorization; // o id fica no request.headers, informações d eautenticação

        const [id] = await connection('incidents').insert({

            title,
            description,
            value,
            ong_id

        });

        return response.json({id});

    },

    async delete(request, response) {

        const {id} = request.params; // para pegarmos o id do parâmetro de rotas. 
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where('id',id).select('ong_id').first();

        if(incidents.ong_id !== ong_id) {

            return response.status(401).json({error:"Operation not permitted"}); // 401 codigo de erro
        } else {

            await connection('incidents').where('id',id).delete(); //deleta se o id for igual id

            return response.status(204).send(); // 204 codigo de retorno aceito, mas vazio
        }



}

};
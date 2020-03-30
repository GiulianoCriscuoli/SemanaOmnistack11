const express = require('express');
//sao os arquivos com as funções do banco de dados
const {Segments, celebrate, Joi} = require('celebrate');
const ongController = require('./controllers/OngController');
const incidentsControllers = require('./controllers/IncidentsControllers'); 
const profileControllers = require('./controllers/ProfileController');
const sessionControllers = require('./controllers/SessionController');

const routes = express.Router(); //desaclopou a função Router() do express e armazenou no const routes

//rotas da tabela ongs
routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({

    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}), ongController.create);

//rotas da tabela incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({

            id: Joi.number(),
    })


}),incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', celebrate({
        [Segments.PARAMS]: Joi.object().keys({

            id: Joi.number().required(),
        })

}), incidentsControllers.delete);

// rota da tabela profile
routes.get('/profile', profileControllers.index);

//rota da sessao de login
routes.post('/session', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }).unknown(),
}),sessionControllers.create);

module.exports = routes; //module.exports serve para exportar variáveis de um arquivo para outro
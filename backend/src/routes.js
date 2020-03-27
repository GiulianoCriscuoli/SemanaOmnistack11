const express = require('express');
//sao os arquivos com as funções do banco de dados
const ongController = require('./controllers/OngController');
const incidentsControllers = require('./controllers/IncidentsControllers'); 
const profileControllers = require('./controllers/ProfileController');
const sessionControllers = require('./controllers/SessionController');

const routes = express.Router(); //desaclopou a função Router() do express e armazenou no const routes

//rotas da tabela ongs
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//rotas da tabela incidents
routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete);

// rota da tabela profile
routes.get('/profile', profileControllers.index);

//rota da sessao de login
routes.post('/session', sessionControllers.create);

module.exports = routes; //module.exports serve para exportar variáveis de um arquivo para outro
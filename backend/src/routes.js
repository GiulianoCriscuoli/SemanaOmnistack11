const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsControllers = require('./controllers/IncidentsControllers');
const profileControllers = require('./controllers/ProfileController');
const sessionControllers = require('./controllers/SessionController');

const routes = express.Router(); //desaclopou a função Router() do express e armazenou no const routes


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete);

routes.get('/profile', profileControllers.index);


routes.post('/session', sessionControllers.create);

module.exports = routes; //module.exports serve para exportar variáveis de um arquivo para outro
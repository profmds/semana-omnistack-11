const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


/**
 * ROTAS / RECURSOS 
 */
/**
 * MÉTODOS HTTP
 * 
 * GET: Buscar uma info no backend
 * POST: Criar/Enviar uma info para o backend
 * PUT: Alterar uma info no backend
 * DELETE: Apagar uma info no backend
 */

 /**
  * TIPOS DE PARÂMETROS
  * 
  * QUERY PARAMS: Parâmetros nomeados enviados na Rota após "?" (Filtros, Paginação, etc)
  * ROUTE PARAMS: Parâmetros utilizados para identificar recursos
  * REQUEST BODY: Corpo da Requisição, utilizado para criar ou alterar recursos
  */
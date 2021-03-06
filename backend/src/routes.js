const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/ongs', ccelebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

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
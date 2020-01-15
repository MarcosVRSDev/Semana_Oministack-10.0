//Métodos  HHTTP mais usados: GET, POST, PUT, DELETE

//Tipos de parãmetros:

//Query Params:  request.query (Filtros, odernação, paginação...)
//Route Params: request.params (Identificar um recurso na alterção ou remoção)
//Body: request.body (São dados para criação ou alteração de um registro)

const{ Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.post('/devs', DevController.store);

module.exports = routes;
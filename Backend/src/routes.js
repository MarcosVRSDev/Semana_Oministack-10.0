//Métodos  HHTTP mais usados: GET, POST, PUT, DELETE

//Tipos de parãmetros:

//Query Params:  request.query (Filtros, odernação, paginação...)
//Route Params: request.params (Identificar um recurso na alterção ou remoção)
//Body: request.body (São dados para criação ou alteração de um registro)

const{ Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
//routes.put('/devs', DevController.update);

routes.get('/search', SearchController.index);

module.exports = routes;
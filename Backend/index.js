const express = require('express');

const app = express();

//Mais usados: get, post, put, delete

app.get('/', (request, response)=> {
    return response.json({message: 'Hello Omnistack'});
})

app.listen(3333);
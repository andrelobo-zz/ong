const express = require('express');
const app = express();

app.use(express());

app.post('/users', (request,response) => {

    const params = request.query;

    console.log(params);

    return response.json({
    evento:'Semana Omnistack' ,
    aluno: 'Diego Fernandes'
    });

});

app.listen(3333);

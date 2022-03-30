const express = require('express');

const app = express();

const errorHandler = require('./common/middlewares/error-handler.middleware');
const controller = require('./cities/cities.controller');

app.use('/cities', controller);

app.listen(3000,()=>{
    console.log('using port 3000');
});
app.use(errorHandler);
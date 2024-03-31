const express = require('express');
const { registrationQuery, selectQuery } = require('./queries');


const Router = express.Router()

Router.post('/i', registrationQuery);
Router.get('/getdata',selectQuery)

module.exports = Router;

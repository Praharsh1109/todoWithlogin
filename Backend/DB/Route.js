const express = require('express');
const { registrationQuery, selectQuery, login } = require('./queries');

const router = express.Router();

router.post('/insert', registrationQuery);
router.get('/getdata', selectQuery);
router.post('/login',login)

module.exports = router;

const express = require('express');
const { registrationQuery, selectQuery } = require('./queries');

const router = express.Router();

router.post('/i', registrationQuery);
router.get('/getdata', selectQuery);

module.exports = router;

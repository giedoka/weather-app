const { Router } = require('express');
const { getWeather } = require('./weather.controllers');

const router = Router();

router.get('/weather', getWeather);

module.exports = router;
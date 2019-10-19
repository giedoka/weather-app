const { openWeatherApiKey } = require('../../../config/config');
const request = require('request');

const getWeather = (req, res) => {
  const city = encodeURI(req.query.city);
  request.get(`https://api.openweathermap.org/data/2.5/weather?appId=${openWeatherApiKey}&q=${city}&units=metric`, (err, response, body) => {
    if (err) throw err;
    res.status(200).json({ city: JSON.parse(body) });
  });
};

module.exports = { getWeather };
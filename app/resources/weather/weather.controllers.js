const { openWeatherApiKey } = require('../../../config/config');
const request = require('request');

const getWeather = (req, res) => {
  const city = encodeURI(req.query.city);
  request.get(`https://api.openweathermap.org/data/2.5/weather?appId=${openWeatherApiKey}&q=${city}&units=metric`, (err, response, body) => {
    if (err) throw err;
    body = JSON.parse(body);
    const statusCode = body.cod;
    console.log(statusCode);
    if (statusCode === 200) {
      res.status(200).json({ city: body });
    } else {
      res.status(parseInt(statusCode)).json({
        error: {
          code: parseInt(statusCode),
          message: body.message
        }
      })
    }
  });
};

module.exports = { getWeather };
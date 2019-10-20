const request = require('request');
const { port, app } = require('./config/config');
const weatherRouter = require('./app/resources/weather/weather.router');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api', weatherRouter);

app.listen(port, 'cf.weatherapp.lc', () => {
  console.log(`App is listening on port ${port}`);
});
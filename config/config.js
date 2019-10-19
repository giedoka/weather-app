const path = require('path');
const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const app = express();
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../web/images')));
app.use(json());
app.use(urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, '../src/views/'));
app.set('view engine', 'hbs');

module.exports = {
  openWeatherApiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
  port: process.env.PORT,
  app
};
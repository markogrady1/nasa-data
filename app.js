const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/home');
const apodRouter = require('./routes/apod');
const marsRoverRoute = require('./routes/mars-rover');
const earthRoute = require('./routes/earth');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get(['/healthcheck', '/api/healthcheck'], (req, res) => {
  return res.status(200).json(
    { status: 'OK', now: new Date(), NODE_ENV: process.env.NODE_ENV }
  );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', homeRouter);
app.use('/apod', apodRouter);
app.use('/rovers', marsRoverRoute);
app.use('/earth', earthRoute);

module.exports = app;

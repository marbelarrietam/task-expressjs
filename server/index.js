const express = require('express');
const requestId = require('express-request-id')();
const parser = require('body-parser');


const api = require('./api/v1');

const app = express();

app.use(requestId);

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'ERROR: Route not found',
  });
});

app.use((err, req, res, next) => {
    const {
      statusCode = 500,
      message,
    } = err;
  
    res.status(statusCode);
    res.json({
      message,
    });
  });
module.exports = app;
const express = require('express');
const requestId = require('express-request-id')();
const cors = require('cors');
const bodyParser = require('body-parser');

const logger = require('./config/logger');
const api = require('./api/v1');

const database = require('./database');

// Connect to database
database.connect();

// Init app
const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  }),
);

// Setup middleware
app.use(requestId);
app.use(logger.requests);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Setup router and routes
app.use('/api', api);
app.use('/api/v1', api);

// No route found handler
app.use((req, res, next) => {
  next({
    error: true,
    message: 'Route not found',
    statusCode: 404,
    type: 'warn',
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message = 500, type = 'error' } = err;
  let { statusCode = 500 } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  if (err.message.startsWith('ValidationError')) {
    statusCode = 422;
  }

  if (typeof logger[type] === 'function') {
    logger[type](log);
  }

  res.status(statusCode);
  res.json({
    error: true,
    statusCode,
    message,
  });
});

module.exports = app;

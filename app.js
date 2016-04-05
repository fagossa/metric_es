#!/usr/bin/env node

/**
 * Module dependencies.
 */
var express      = require('express');
var bodyParser   = require('body-parser')
var metricRoutes = require('./routes/metricRoutes');
var healthCheck  = require('./routes/healthCheck');
var logger       = require('morgan');

var app          = express();
app.use(logger('dev'));

// define body parsers
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

healthCheck.routes(app);
metricRoutes.routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  app.locals.pretty = true;
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

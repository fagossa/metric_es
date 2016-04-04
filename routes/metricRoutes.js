'use strict';
var fs = require('./../utils/fs');
var validator = require('node-validator');

// Validations
var checkCompostMachine = validator.isObject()
  .withRequired('hydraulicOilLevel', validator.isNumber({min: 0, max: 10000}))
  .withRequired('hydraulicOilPresure', validator.isNumber({min: 0, max: 10000}))
  .withRequired('distance', validator.isNumber({min: 0, max: 1000000}))
  .withRequired('hydraulicOilTemperature', validator.isNumber({min: 0, max: 10000}))
  .withRequired('boothPresure', validator.isNumber({min: 0, max: 10000}))
;

var checkCummisEngineData = validator.isObject()
  .withRequired('hydraulicOilPreasure', validator.isNumber({min: 0, max: 10000}))
  .withRequired('batteryVoltage', validator.isNumber({min: 0, max: 10000}))
  .withRequired('oilLevel', validator.isNumber({min: 0, max: 1000000}))
  .withRequired('temperature', validator.isNumber({min: 0, max: 10000}))
  .withRequired('rpmDieselEngine', validator.isNumber({min: 0, max: 10000}))
;

var check = validator.isObject()
  .withRequired('componentId', validator.isString())
  .withRequired('timestamp', validator.isString()) //TODO: maybe isIsoDate ?
  .withOptional('compostMachineData', checkCompostMachine)
  .withOptional('compostMachineData', checkCummisEngineData)
;

// routes for metric
var Metric = {
    routes: function (app) {
        app.post('/metric', function (req, res) {
            validator.run(check, req.body, function(errorCount, errors) {
              if (!errorCount) {
                res.send("");
              } else {
                res.status(400).send(errors);
              }
            });
        });
    }
}
;

module.exports = Metric;

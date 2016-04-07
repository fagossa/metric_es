'use strict';
var fs = require('./../utils/fs');
var validator = require('node-validator');
var mongodb = require('../db');

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

var checkPosition = validator.isObject()
  .withRequired('latitude', validator.isNumber({min: -1000000,  max: 1000000}))
  .withRequired('longitude', validator.isNumber({min: -1000000, max: 1000000}))
;

var checkGeneralData = validator.isObject()
  .withRequired('hydraulicOilViscosity', validator.isNumber({min: 0, max: 10000}))
  .withRequired('hydraulicOilTurbidity', validator.isNumber({min: 0, max: 10000}))
  .withRequired('mechanicalStressLeftTrack', validator.isNumber({min: 0, max: 1000000}))
  .withRequired('mechanicalStressRightTrack', validator.isNumber({min: 0, max: 10000}))
  .withRequired('cumulativeWorkingTime', validator.isNumber({min: 0, max: 10000}))
  .withRequired('workingSystem', validator.isBoolean())
  .withOptional('position', checkPosition)
;

var check = validator.isObject()
  .withRequired('componentId', validator.isString())
  .withRequired('timestamp', validator.isString()) //TODO: maybe isIsoDate ?
  .withOptional('compostMachineData', checkCompostMachine)
  .withOptional('cummisEngineData', checkCummisEngineData)
  .withOptional('generalData', checkGeneralData)
;

// routes for metric
var Metric = {
    routes: function (app) {
        app.post('/metric', function (req, res) {
            validator.run(check, req.body, function(errorCount, errors) {
              res.setHeader('Content-Type', 'application/json');
              if (!errorCount) {
                var value = req.body;
                mongodb.sendVal(value, res);
              } else {
                res.status(400).send(errors);
              }
            });
        });
    }
}
;

module.exports = Metric;

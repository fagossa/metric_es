'use strict';
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var Metrics = require('../models/metric');
var should = chai.should();

chai.use(chaiHttp);

describe('A metric api with health checks', function() {

  it('should get an "OK" answer from /health GET', function(done) {
  chai.request(server)
    .get('/health')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });

});

describe('A metric api', function() {

  beforeEach(function(done){
    done();
  });

  afterEach(function(done){
    //Metrics.collection.drop();
    done();
  });

  it('should get a "OK" from minimum metric data posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210"
      }
    )
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

});

describe('A metric api receiving compost machine Data', function() {

  it('should get an "OK" from valid compost machine data posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "compostMachineData" : {
          "hydraulicOilLevel": 0.0,
          "hydraulicOilPresure": 0.0,
          "distance": 0.0,
          "hydraulicOilTemperature": 0.0,
          "boothPresure": 0.0
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

  it('should get a "Bad request" from invalid compost machine posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "compostMachineData" : {
          "hydraulicOilLevel": "0.0", //invalid data
          "hydraulicOilPresure": 0.0,
          "distance": 0.0,
          "hydraulicOilTemperature": "0.0", //invalid data
          "boothPresure": false //invalid data
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body.should.have.length.lengthOf(3);
      done();
    });
  });

});

describe('A metric api receiving cummis Engine Data', function() {

  it('should get an "OK" from valid cummis engine data posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "cummisEngineData" : {
          "hydraulicOilPreasure": 0.0,
          "batteryVoltage": 0.0,
          "oilLevel": 0.0,
          "temperature": 0.0,
          "rpmDieselEngine": 0.0
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

  it('should get a "Bad request" from invalid cummis engine posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "cummisEngineData" : {
          "hydraulicOilPreasure": "0.0",
          "batteryVoltage": 0.0,
          "oilLevel": 0.0,
          "temperature": "0.0",
          "rpmDieselEngine": 0.0
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body.should.have.length.lengthOf(2);
      done();
    });
  });

});

describe('A metric api receiving general Data', function() {

  it('should get an "OK" from valid general data posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "generalData" : {
          "hydraulicOilViscosity": 0.0,
          "hydraulicOilTurbidity": 0.0,
          "mechanicalStressLeftTrack": 0.0,
          "mechanicalStressRightTrack": 0.0,
          "cumulativeWorkingTime": 0.0,
          "workingSystem": true,
          "position": {
              "latitude": 0.0,
              "longitude": 0.0
          }
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

  it('should get a "Bad request" from invalid general data posted at /metric', function(done) {
  chai.request(server)
    .post('/metric')
    .send(
      {
        "timestamp": "2016-02-23T13:54:39.34",
        "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
        "generalData" : {
          "hydraulicOilViscosity": "0.0",
          "hydraulicOilTurbidity": 0.0,
          "mechanicalStressLeftTrack": 0.0,
          "mechanicalStressRightTrack": "0.0",
          "cumulativeWorkingTime": "0.0",
          "workingSystem": "true",
          "position": {
              "latitude": 0.0,
              "longitude": "0.0"
          }
        }
      }
    )
    .end(function(err, res){
      res.should.have.status(400);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body.should.have.length.lengthOf(5);
      done();
    });
  });

});

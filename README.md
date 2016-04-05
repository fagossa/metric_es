
Metrics
======

Prototype used to insert data on ES using a nodeJs api

## How to execute the test?

    npm run test


## How to start the server?

    npm run start

## What is the data model proposed?

The proposed domain model is as follows:


    {
      "timestamp": "2016-02-23T13:54:39.34",
      "componentId": "2017cad3-6b68-48dd-9f93-ebd3486a9210",
      "compostMachineData" : {
        "hydraulicOilLevel": 0.0,
        "hydraulicOilPresure": 0.0,
        "distance": 0.0,
        "hydraulicOilTemperature": 0.0,
        "boothPresure": 0.0
      },
      "cummisEngineData" : {
        "hydraulicOilPreasure": 0.0,
        "batteryVoltage": 0.0,
        "oilLevel": 0.0,
        "temperature": 0.0,
        "rpmDieselEngine": 0.0
      },
      "generalData" : {
        "hydraulicOilViscosity": 0.0,
        "hydraulicOilTurbidity": 0.0,
        "mechanicalStressLeftTrack": 0.0,
        "mechanicalStressRightTrack": 0.0,
        "cumulativeWorkingTime": 0.0,
        "workingSystem": "String",
        "position": {
            "latitude": 0.0,
             "longitude": 0.0
        }
      }
    }

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var metricSchema = Schema({
      timestamp: Date,
      componentId: String,
      compostMachineData : {
        hydraulicOilLevel: Number,
        hydraulicOilPresure: Number,
        distance: Number,
        hydraulicOilTemperature: Number,
        boothPresure: Number
      },
      cummisEngineData: {
        hydraulicOilPreasure: Number,
        batteryVoltage: Number,
        oilLevel: Number,
        temperature: Number,
        rpmDieselEngine: Number
      },
      generalData : {
        hydraulicOilViscosity: Number,
        hydraulicOilTurbidity: Number,
        mechanicalStressLeftTrack: Number,
        mechanicalStressRightTrack: Number,
        cumulativeWorkingTime: Number,
        workingSystem: Boolean,
        position: {
            latitude: Number,
            longitude: Number
        }
      }
});

var Metric = mongoose.model('Metrics', metricSchema);

module.exports = Metric;

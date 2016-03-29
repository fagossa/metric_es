'use strict';
var fs = require('./../utils/fs');
var validator = require('node-validator');

var HealthCheck = {
    routes: function (app) {
        app.get('/health', function (req, res) {
            res.send("its working");
        });
    }
}
;


module.exports = HealthCheck;

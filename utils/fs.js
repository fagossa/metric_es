'use strict';
var bluebird = require('bluebird');
var fs = require('fs');

var fsUtils = {
    readFile: function (path) {
        var defered = bluebird.defer();

        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                defered.reject(err);
                return;
            }
            defered.resolve(data);
        });
        return defered.promise;
    }
};


module.exports = fsUtils;
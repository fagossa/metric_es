'use strict';
var fs = require('./../utils/fs');

var ElasticSearch = {
    routes: function (app) {
        app.put('/tata', function (req, res) {

            res.send("its working");
        });
    }
}
;


module.exports = ElasticSearch;

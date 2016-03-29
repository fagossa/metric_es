'use strict';
var fs = require('./../utils/fs');

var ElasticSearch = {
    routes: function (app) {
        app.get('/health', function (req, res) {
            res.send("its working");
        });
    }
}
;


module.exports = ElasticSearch;

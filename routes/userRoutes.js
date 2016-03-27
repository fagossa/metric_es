'use strict';
var fs = require('./../utils/fs');

var User = {
    routes: function (app) {
        app.get('/toto', function (req, res) {
            // TODO: flatten data
            var tata = req.query.tata;
            if (!tata) {
                res.sendStatus(404);
                return;
            }

            fs.readFile(__dirname + '/../package.json').then(function (data) {
                res.send(data);
            }, function(err) {
                res.status(500).send(err);
            });

        });
    }
}
;


module.exports = User;

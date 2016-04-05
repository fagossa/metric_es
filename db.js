var mongoose = require('mongoose');

var config = require('./_config');

var schema = mongoose.Schema({value: String});
var Values = mongoose.model('values', schema);

module.exports = {
    connectDB : function(env) {
      mongoose.connect(config.mongoURI[env], function(err, res) {
        if(err) {
          console.log('Error connecting to the database. ' + err);
        } else {
          console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
        }
      });
    },

    getVal : function(res) {
        Values.find(function(err, result) {
            if (err) {
                console.log(err);
                res.send('database error');
                return
            }
            var values = {};
            for (var i in result) {
                var val = result[i];
                values[val["_id"]] = val["value"]
            }
            res.render('index', {title: 'NodeJS MongoDB demo', values: values});
        });
    },

    sendVal : function(val, res) {
        var request = new Values({value: val});
        request.save(function (err, result) {
            if (err) {
                console.log(err);
                res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.status(201).send(JSON.stringify({status: "ok", value: result["value"], id: result["_id"]}));
        });
    },

    delVal : function(id) {
        Values.remove({_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
};

var mongoose = require('mongoose');
var config = require('./_config');

module.exports = {
    connectDB : function(env) {
      mongoose.connect(config.mongoURI[env], function(err, res) {
        if(err) {
          console.log('Error connecting to the database. ' + err);
        } else {
          console.log('Connected to Database: ' + config.mongoURI[env]);
        }
      });
    },

    getVal : function(entity, res) {
        entity.find(function(err, result) {
            if (err) {
                console.log(err);
                res.send('database error');
                return;
            }
            // TODO: implement!!!
            var values = {};
            for (var i in result) {
                var val = result[i];
                values[val["_id"]] = val["value"]
            }
            res.render('index', {title: 'NodeJS MongoDB demo', values: values});
        });
    },

    sendVal : function(entity, res) {
        entity.save(function (err, result) {
            if (err) {
                console.log(err);
                res
                  .status(400)
                  .send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return;
            }
            res
              .status(200)
              .send(JSON.stringify({status: "ok", id: result["_id"]}));
        });
    },

    delVal : function(entity, id) {
        entity.remove({_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
};

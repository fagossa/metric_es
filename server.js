'use strict';

var express = require('express');
var app = express();
var userRoute = require('./routes/userRoutes');
var elasticSearchRoutes = require('./routes/elasticSearchRoutes');
userRoute.routes(app);
elasticSearchRoutes.routes(app);

app.listen(3000);

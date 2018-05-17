/*
 * QPMS prject
 */

var express = require('express');
//port number 3000
var port = process.env.PORT || 3000;


var app = express();
require("./mobileservice")(app);
require("./webservice")(app);


app.listen(port);
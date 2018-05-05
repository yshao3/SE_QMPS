/*
 * QPMS prject
 */

var express = require('express');
var port = process.env.PORT || 3000;


var app = express();
require("./mobileservice")(app);
require("./webservice")(app);


app.listen(port);
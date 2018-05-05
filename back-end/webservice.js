/*
 * QPMS prject
 */
var database = require("./database");
var config = require('./config');
module.exports = function(app){
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)

    // res.setHeader("Content-Type", "application/json");
    // if (req.headers['username'] == config.users["username"] && req.headers['password'] == config.users["password"]){
    //     next();
    // }else{
    //     res.status(403).json({
    //             message:"Not a valid user!"
    //           });
    // }

    // Pass to next layer of middleware
    next();
    })
    app.get("/latco", getLatcoByDate);
    app.get("/teat", getTeatByDate);
    app.get("/udder", getUdderByDate);
    app.get("/unit", getUnitByDate);
    app.get("/strip", getStripByDate);
    app.get("/post", getPostByDate);
    app.get("/",login);
    // //login
    function login(req,res){
    
        var username = req.headers['username'];
        var password = req.headers['password'];
        database.login(username,password,function(err, r){
        if (err){
            res.json(err);
        }

        res.json(r);
        });
    }
    
    //get from different tables
    function getLatcoByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_lacto(username, password, date1,date2,farm, function(err, latco){
        if (err){
            res.json(err);
        }

        res.json(latco);
    });
    }


    function getTeatByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    // var username = req.query.username;
    // var password = req.query.password;

    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_teat(username, password, date1,date2,farm, function(err, teat){
        if (err){
            res.json(err);
        }

        res.json(teat);
    });
    }
    function getUdderByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_udder(username, password,date1,date2,farm, function(err, udder){
        if (err){
            res.json(err);
        }

        res.json(udder);
    });
    }
    function getUnitByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_unit(username, password,date1,date2,farm, function(err, unit){
        if (err){
            res.json(err);
        }
        res.json(unit);
    });
    }

    function getStripByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_strip(username, password,date1,date2,farm, function(err, strip){
        if (err){
            res.json(err);
        }
        console.log(strip);
        res.json(strip);
    });
    }
    function getPostByDate(req,res){
    var username = req.headers['username'];
    var password = req.headers['password'];
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    var farm = req.query.farm;
    database.get_post(username, password,date1,date2,farm, function(err, post){
        if (err){
            res.json(err);
        }
        console.log(post);
        res.json(post);
    });
    }


}




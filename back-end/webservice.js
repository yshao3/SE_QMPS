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
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,username,password');
    next();
    })
    app.get("/lacto", getLactoByDate);
    app.get("/teat", getTeatByDate);
    app.get("/udder", getUdderByDate);
    app.get("/unit", getUnitByDate);
    app.get("/strip", getStripByDate);
    app.get("/post", getPostByDate);
    app.get("/",login);
    /*Get APIs starts from here*/
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/
    function login(req,res){
        var username = req.headers['username'];
        var password = req.headers['password'];
        console.log(username);
        console.log(password);
        database.login(username,password,function(err, r){
        if (err){
            res.json(err);
        }

        res.json(r);
        });
    }
    
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/lacto?date1=[fromdate]&date2=[todate]&farm=[farm_name]
    function getLactoByDate(req,res){
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

    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/teat?date1=[fromdate]&date2=[todate]&farm=[farm_name]
    function getTeatByDate(req,res){
        var username = req.headers['username'];
        var password = req.headers['password'];

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
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/udder?date1=[fromdate]&date2=[todate]&farm=[farm_name]
    function getUdderByDate(req,res){
        var username = req.headers['username'];
        var password = req.headers['password'];
        var date1 = req.query.date1;
        var date2 = req.query.date2;
        var farm = req.query.farm;
        console.log(farm);
        database.get_udder(username, password,date1,date2,farm, function(err, udder){
            if (err){
                res.json(err);
            }

            res.json(udder);
        });
    }
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/unit?date1=[fromdate]&date2=[todate]&farm=[farm_name]
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
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/strip?date1=[fromdate]&date2=[todate]&farm=[farm_name]
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
    //Method: Get, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/post?date1=[fromdate]&date2=[todate]&farm=[farm_name]
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
    /*Get APIs ends from here*/

}




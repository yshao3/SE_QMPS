/*
 * QPMS prject
 */
var bodyParser = require('body-parser');
require('events').EventEmitter.prototype._maxListeners = 0;
var database = require("./database");
var config = require('./config');



module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,username,password');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
    })
    /*Post APIs starts from here*/
    app.post("/latco", createLacto);
    app.post("/unit", createUnit);
    app.post("/teat", createTeat);
    app.post("/udder", createUdder);
    app.post("/post", createPost);
    app.post("/strip", createStrip);
    
   //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/unit, body:[json]
   function createUnit(req, res){
        var data = parseUnit(req.body);
        if (data.length  == 0) res.json("no valid record");
        else{
            try{
                
                var username = req.headers['username'];
                var password = req.headers['password'];
                
                database.post_unit(username, password, data, function(err, r){
                    if (err) {
                        res.json(err);
                    }else{
                        res.json(r);
                    }
                });
            }catch(err){
                res.json("wrong json style");
            }
        }
    }
    //parse unit json file 
    function parseUnit(json){

        var res = [];
        var tmp = [];
        for (i in json){
            if(json[i]["date"] == undefined || json[i]["farm_id"] == undefined|| json[i]["staff_id"] == undefined||json[i]["good"] == undefined||json[i]["bad"] == undefined){
                continue;
            }
            tmp = [json[i]["date"], json[i]["farm_id"], json[i]["staff_id"], json[i]["good"], json[i]["bad"]];
            res.push(tmp);
        }
        return res;
    }
    //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/teat, body:[json]
    function createTeat(req, res){
        var data = parseTeat(req.body);
        
        if (data.length  == 0) res.json("no valid record");
        else{
            try{

                var username = req.headers['username'];
                var password = req.headers['password'];
                
                database.post_teat(username, password,data, function(err, r){

                    if (err) {
                        res.json(err);
                    }
                    else{res.json(r);}
                });
            }catch (err){
                res.json("wrong json style");
            }
        }
    }
    //parse teat json file 
    function parseTeat(json){
        var res = [];
        var tmp = [];
        for (i in json) {
            if(json[i]["date"] == undefined || json[i]["farm_id"] == undefined|| json[i]["staff_id"] == undefined||json[i]["before_after"] == undefined||json[i]["milker_id"] == undefined||json[i]["clean"] == undefined||json[i]["dip_present"] == undefined||json[i]["small_dirt"]==undefined||json[i]["large_dirt"]==undefined){
                continue;
            }
            var isBefore = json[i]["before_after"] == "b" ? true:false;
            tmp = [json[i]["staff_id"],json[i]["milker_id"], json[i]["date"], json[i]["farm_id"], isBefore,json[i]["clean"],json[i]["dip_present"],json[i]["small_dirt"], json[i]["large_dirt"]];
            res.push(tmp);
        }
        return res;
    }
    //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/latco, body:[json]
    function createLacto(req, res){
        var data = parseLacto(req.body);
        if (data.length  == 0) res.json("no valid record");
        else{
            try{
                var username = req.headers['username'];
                var password = req.headers['password'];
                
                
                database.post_lacto(username, password,data, function(err, r){
                    if (err) {
                        res.json(err);
                    }
                    else{res.json(r);}
                });
            }catch (err){
                res.json("wrong json style");
            }
        }
    }
    //parse lacto json file 
    function parseLacto(json){
        var res = [];
        var tmp = [];
        for (i in json){
            if(json[i]["farm_id"] == undefined|| json[i]["date"]==undefined|| json[i]["parlor_type"] == undefined||json[i]["size"]==undefined ||ljson[i]["size"]==undefined || json[i]["no_operators"] == undefined||json[i]["pre_milking"]==undefined|| json[i]["procedures"]==undefined||json[i]["prep"] == undefined||json[i]["herd_size"]==undefined|| json[i]["milking_frequency"]==undefined||json[i]["milking_routine"]==undefined||json[i]["cow_name"]==undefined|| json[i]["dip_contact_time"]== undefined||json[i]["lag_contact_stimulate"]==undefined||json[i]["unit_on_time"]==undefined||json[i]["total_milk"]==undefined||json[i]["remark"]==undefined){
                continue;
            }
            tmp = [json[i]["farm_id"], json[i]["date"], json[i]["parlor_type"],parsedata(json[i]["size"])==null?0:parsedata(json[i]["size"]),parsedata(json[i]["no_operators"]),json[i]["pre_milking"], json[i]["procedures"],json[i]["prep"], parsedata(json[i]["herd_size"]), json[i]["milking_frequency"],json[i]["milking_routine"], json[i]["cow_name"], json[i]["dip_contact_time"],json[i]["lag_contact_stimulate"],json[i]["unit_on_time"],parsedata(json[i]["total_milk"]),json[i]["remark"]];
            res.push(tmp);
        }
        return res;

    }
    //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/udder, body:[json]
    function createUdder(req, res){
        var data = parseUdder(req.body);

        if (data.length  == 0) {res.json("no record");}
        else{
            try{
                var username = req.headers['username'];
                var password = req.headers['password'];

            
                
                database.post_udder(username, password,data, function(err, r){
                    if (err) {
                        res.json(err);

                    }
                    else{res.json(r);}
                });
            }catch (err){
                    res.json("wrong json style");
            }
        }
    }
    //parse udder json file 
    function parseUdder(json){
        var res = [];
        var tmp = [];
        for (i in json){
            if(json[i]["farm_id"] == undefined|| json[i]["date"]==undefined||json[i]["group_id"]==undefined||json[i]["clean"]==undefined|| json[i]["slightly_dirt"]==undefined ||json[i]["moderately_dirt"]==undefined|| json[i]["caked_on_dirt"]==undefined){
                continue;
            }
            tmp = [json[i]["group_id"], json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],json[i]["clean"], json[i]["slightly_dirt"],json[i]["moderately_dirt"], json[i]["caked_on_dirt"]];
            res.push(tmp);
        }
        return res;
    }
    //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/post, body:[json]
    function createPost(req, res){
        var data = parsePost(req.body);
        if (data.length  == 0) res.json("no valid record");
        else{
            try{
                var username = req.headers['username'];
                var password = req.headers['password'];
                database.post_post(username, password,data, function(err, r){
                    if (err) {
                        res.json(err);
                    }
                    else{res.json(r);}
                });
            }catch (err){
                res.json("wrong json style!");
            }
        }
    }
    //parse post json file 
    function parsePost(json){
        var res = [];
        var tmp = [];
        for (i in json){
            if(json[i]["staff_id"]==undefined|| json[i]["farm_id"]==undefined|| json[i]["group_id"]==undefined||json[i]["date"]==undefined||json[i]["LH_skin_condition"]==undefined|| json[i]["LH_color"]==undefined||json[i]["LH_swelling"]==undefined|| json[i]["LH_hardness"]==undefined|| json[i]["LH_end_score"]==undefined|| json[i]["LF_skin_condition"]==undefined|| json[i]["LF_color"]==undefined||json[i]["LF_swelling"]==undefined|| json[i]["LF_hardness"]==undefined|| json[i]["LF_end_score"]==undefined||json[i]["RH_skin_condition"]==undefined|| json[i]["RH_color"]==undefined||json[i]["RH_swelling"]==undefined|| json[i]["RH_hardness"]==undefined ||json[i]["RH_end_score"]==undefined||json[i]["RF_skin_condition"]==undefined|| json[i]["RF_color"]==undefined||json[i]["RF_swelling"]==undefined|| json[i]["RF_hardness"]==undefined|| json[i]["RF_end_score"]==undefined){
                continue;
            }
            tmp = [json[i]["staff_id"], json[i]["farm_id"], json[i]["group_id"],json[i]["date"],json[i]["LH_skin_condition"], json[i]["LH_color"],json[i]["LH_swelling"], json[i]["LH_hardness"], json[i]["LH_end_score"], json[i]["LF_skin_condition"], json[i]["LF_color"],json[i]["LF_swelling"], json[i]["LF_hardness"], json[i]["LF_end_score"],
            json[i]["RH_skin_condition"], json[i]["RH_color"],json[i]["RH_swelling"], json[i]["RH_hardness"], json[i]["RH_end_score"],json[i]["RF_skin_condition"], json[i]["RF_color"],json[i]["RF_swelling"], json[i]["RF_hardness"], json[i]["RF_end_score"]];
            res.push(tmp);
        }
        return res;

    }
    //Method: Post, Header:{username: ?, password: ?}, url: http://xxxx.xxxx/strip, body:[json]
    function createStrip(req, res){
        var data = parseStrip(req.body);
        if (data.length  == 0) res.json("no valid record");
        else{
            try{
                var username = req.headers['username'];
                var password = req.headers['password'];
                database.post_strip(username, password,data, function(err, r){
                   if (err) {
                        res.json(err);
                        console.log("error");
                    }
                    else{res.json(r);}
                });
            }catch (err){
                res.json("wrong json style!");
            }
        }
    }
    //parse strip json file 
    function parseStrip(json){
        var res = [];
        var tmp = [];
        for (i in json){
            if(json[i]["farm_id"] == undefined|| json[i]["date"]==undefined||json[i]["staff_id"]==undefined||json[i]["ML"]==undefined|| json[i]["Stall_no"]==undefined ||json[i]["isBalanced"]==undefined){
                continue;
            }
            tmp = [json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],parsedata(json[i]["ML"]),parsedata(json[i]["Stall_no"]), json[i]["isBalanced"] == "balanced" ? true: false];
            res.push(tmp);
        }
        return res;
    }
    //if not number
    function parsedata(str){
        var parsed = parseInt(str);
        if (isNaN(parsed)) return 0;
        else return parsed;
    }
    /*Post APIs ends from here*/
}




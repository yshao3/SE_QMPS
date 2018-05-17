/*
 * QPMS prject
 */

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var database = require("./database");
var config = require('./config');
 

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    
    // Pass to next layer of middleware
    // if (req.headers['username'] == config.users["username"] && req.headers['password'] == config.users["password"]){
    //     next();
    // }else{
    //     res.status(403).json({
    //             message:"Not a valid user!"
    //           });
    // }
    next();
    })
    app.post("/latco", createLatco);
    app.post("/unit", createUnit);
    app.post("/teat", createTeat);
    app.post("/udder", createUdder);
    app.post("/post", createPost);
    app.post("/strip", createStrip);
    
    //url(/unit?date1=[date1]&date2=[date2])
   function createUnit(req, res){
        var data = parseUnit(req.body);
        var username = req.headers['username'];
        var password = req.headers['password'];
        console.log(data);
        if (data.length  == 0) res.json("no record");
        else{database.post_unit(username, password, data, function(err, r){

            if (err) {
                res.json(err);
            }else{res.json(r);}
        });}
    }
    //
    function parseUnit(json){

        var res = [];
        var tmp = [];
        for (i in json){
            tmp = [json[i]["date"], json[i]["farm_id"], json[i]["staff_id"], json[i]["good"], json[i]["bad"]];
            res.push(tmp);
        }
        return res;
    }
    //
    function createTeat(req, res){
        var data = parseTeat(req.body);
        var username = req.headers['username'];
        var password = req.headers['password'];
        console.log(data);
        if (data.length  == 0) res.json("no record");
        else{database.post_teat(username, password,data, function(err, r){

            if (err) {
                res.json(err);
            }
            else{res.json(r);}
        });}
    }
    //
    function parseTeat(json){
        console.log(json);

        var res = [];
        var tmp = [];
        for (i in json) {
            var isBefore = json[i]["before_after"] == "b" ? true:false;
            tmp = [json[i]["staff_id"],json[i]["milker_id"], json[i]["date"], json[i]["farm_id"], isBefore,json[i]["clean"],json[i]["dip_present"],json[i]["small_dirt"], json[i]["large_dirt"]];
            res.push(tmp);
        }
        return res;
    }
    //
    function createLatco(req, res){
        var username = req.headers['username'];
        var password = req.headers['password'];
        var data = parseLatco(req.body);
        console.log(data);
        if (data.length  == 0) res.json("no record");
        else{database.post_lacto(username, password,data, function(err, r){
            if (err) {
                res.json(err);
            }
            else{res.json(r);}
        });}
    }
    //farm, date, parlor_type,size,no_operators,pre_milking,procedures," +
    //"prep,herd_size,milking_frequency,milking_routine,cow_name, dip_contact_time," +
    //"lag_contact_stimulate,unit_on_time,total_milk,remark)

    /*(farm_id TEXT, date TEXT, parlor_type TEXT, pre_milking TEXT, herd_size TEXT, size TEXT, procedures TEXT, milking_frequency TEXT, no_operators TEXT, prep TEXT, milking_routine TEXT, cow_name TEXT, total_milk TEXT, remark TEXT, dip_contact_time, lag_contact_stimulate, unit_on_time)*/
    function parseLatco(json){
        var res = [];
        var tmp = [];
        for (i in json){
            tmp = [json[i]["farm_id"], json[i]["date"], json[i]["parlor_type"],parseInt(json[i]["size"]),json[i]["no_operators"],json[i]["pre_milking"], json[i]["procedures"],json[i]["prep"], parseInt(json[i]["herd_size"]), json[i]["milking_frequency"],json[i]["milking_routine"], json[i]["cow_name"], json[i]["dip_contact_time"],json[i]["lag_contact_stimulate"],json[i]["unit_on_time"],parseInt(json[i]["total_milk"]),json[i]["remark"]];
            res.push(tmp);
        }
        return res;

    }
    function createUdder(req, res){
    // group_id, staff_id,date,farm_id,free,slightly,moderate,heavy
        var username = req.headers['username'];
        var password = req.headers['password'];
        var data = parseUdder(req.body);
        console.log("udder");
        console.log(data);
        if (data.length  == 0) res.json("no record");
        else{database.post_udder(username, password,data, function(err, r){
            if (err) {
                res.json(err);

            }
            else{res.json(r);}
        });}
    }
    //
    function parseUdder(json){
        var res = [];
        var tmp = [];
        for (i in json){
            tmp = [json[i]["group_id"], json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],json[i]["clean"], json[i]["slightly_dirt"],json[i]["moderately_dirt"], json[i]["caked_on_dirt"]];
            res.push(tmp);
        }
        return res;
    }
    /*staff_id, farm_id, group_id, date, LH_skin_condition," +
     "LH_color, LH_swelling, LH_hardness, LH_end_score, LF_skin_condition, LF_color, LF_swelling," +
    "LF_hardness, LF_end_score, RH_skin_condition, RH_color, RH_swelling, RH_hardness," + 
     "RH_end_score, RF_skin_condition, RF_color, RF_swelling, RF_hardness, RF_end_score */
    function createPost(req, res){
        var username = req.headers['username'];
        var password = req.headers['password'];
        var data = parsePost(req.body);
        if (data.length  == 0) res.json("no record");
        else{database.post_post(username, password,data, function(err, r){
            if (err) {
                res.json(err);
            }
            else{res.json(r);}
        });}
    }
    //
    function parsePost(json){
        var res = [];
        var tmp = [];
        for (i in json){
            tmp = [json[i]["staff_id"], json[i]["farm_id"], json[i]["group_id"],json[i]["date"],json[i]["LH_skin_condition"], json[i]["LH_color"],json[i]["LH_swelling"], json[i]["LH_hardness"], json[i]["LH_end_score"], json[i]["LF_skin_condition"], json[i]["LF_color"],json[i]["LF_swelling"], json[i]["LF_hardness"], json[i]["LF_end_score"],
            json[i]["RH_skin_condition"], json[i]["RH_color"],json[i]["RH_swelling"], json[i]["RH_hardness"], json[i]["RH_end_score"],json[i]["RF_skin_condition"], json[i]["RF_color"],json[i]["RF_swelling"], json[i]["RF_hardness"], json[i]["RF_end_score"]];
            res.push(tmp);
        }
        return res;

    }
    function createStrip(req, res){
        var username = req.headers['username'];
        var password = req.headers['password'];
    
        var data = parseStrip(req.body);
        if (data.length  == 0) res.json("no record");
        else{database.post_strip(username, password,data, function(err, r){
           if (err) {
                res.json(err);
                console.log("error");
            }
            else{res.json(r);}
        });}
    }
    //staff_id,date,farm_id ,ML ,Stall_no,isBalanced
    function parseStrip(json){
        var res = [];
        var tmp = [];
        for (i in json){
            tmp = [json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],parseInt(json[i]["ML"]),parseInt(json[i]["Stall_no"]), json[i]["isBalanced"] == "balanced" ? true: false];
            res.push(tmp);
        }
        return res;
    }

}




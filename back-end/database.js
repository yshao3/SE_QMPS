/*
 * QPMS prject
 */
var app = require('express');
var mysql = require('mysql');
var config = require('./config');
var con = mysql.createConnection(config.customConfig);
// console.log(config.customConfig)





var database = function () {};

// login function for both
database.prototype.login = function(username,password, callback){
    let sql = "select username from user where username = ? and password = ?;";
    var result = false;
    con.query(sql, [username, password],function(err, res){
        if (err) callback(err, null);
        
        if (res.length){
            result  = true;
        }
        callback(null, result);
    });

}
// get functions for web


database.prototype.get_teat = function(username, password, date1,date2,farm,callback){

    let sql = "select username from user where username = ? and password = ?;";
    
    let sql1 = "select * " +
                "from cleanliness_fact where date >= Date(?) and date <= Date(?) and farm = (?);";
    var result = [];
    var valid = false;
    con.query(sql+sql1, [username, password,date1, date2,farm],function(err, res){
        if (err) return callback(err,null);
        
        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){

                result.push(res[i]);
            }}
        }
        callback(null, [valid, result]);
    })
    

}
// database.prototype.get_teat = function(date1,date2,farm,callback){
 
//     let sql = "select * " +
//                 "from cleanliness_fact where date >= Date(?) and date <= Date(?) and farm = (?);";
//     var result = [];
//     con.query(sql, [date1, date2,farm],function(err, res){
//         if (err) return callback(err,null);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){

//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }

database.prototype.get_udder = function(username, password,date1,date2,farm,callback){

    let sql = "select username from user where username = ? and password = ?;";
   
    let sql1 = "select * " +
                "from udder_hygiene_fact where date >= Date(?) and date <= Date(?) and farm = (?);";
    var result = [];
    var valid = false;
    con.query(sql+sql1, [username, password,date1, date2,farm],function(err, res){
        if (err) return callback(err,null);
        
        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){

                result.push(res[i]);
            }}
        }
        callback(null, [valid, result]);
    })
    

}

database.prototype.get_unit = function(username, password,date1,date2,farm,callback){
    let sql = "select username from user where username = ? and password = ?;";
    
    let sql1 = "select * " +
                "from unit_fact where date >= Date(?) and date <= Date(?) and farm =(?)";
    var result = [];
    var valid = false;
    con.query(sql+sql1, [username, password,date1, date2,farm],function(err, res){
        if (err) return callback(err,null);
        
        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){

                result.push(res[i]);
            }}
        }
        callback(null, [valid, result]);
    })

}


database.prototype.get_strip = function(username, password,date1,date2,farm,callback){
    let sql = "select username from user where username = ? and password = ?;";
    
    let sql1 = "select * " +
                "from strip_fact where date >= Date(?) and date <= Date(?) and farm = (?);";
    var result = [];
    var valid = false;
    con.query(sql+sql1, [username, password,date1, date2,farm],function(err, res){
        if (err) return callback(err,null);
        
        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){

                result.push(res[i]);
            }}
        }
        callback(null, [valid, result]);
    })

}

database.prototype.get_post = function(username, password,date1,date2,farm,callback){
    let sql = "select username from user where username = ? and password = ?;";
   
    let sql1 = "select * " +
                "from postmilking_fact where date >= Date(?) and date <= Date(?) and farm = (?);";
    console.log(date1+date2);
    var result = [];
    var valid =false;
    con.query(sql, [date1, date2,farm],function(err, res){
        if (err) return callback(err, null);

        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){
                var tmp = {"staff":res[i]["staff"], "farm" :res[i]["farm"], "group_id":res[i]["group_id"], "date":res[i]["date"], "skin_condition":{"LF":res[i]["LF_skin_condition"],"RH":res[i]["RH_skin_condition"],"RF":res[i]["RF_skin_condition"],"LH":res[i]["LH_skin_condition"]},
                "color":{"LF":res[i]["LF_color"],"RH":res[i]["RH_color"],"RF":res[i]["RF_color"],"LH":res[i]["LH_color"]},
                "swelling":{"LF":res[i]["LF_swelling"],"RH":res[i]["RH_swelling"],"RF":res[i]["RF_swelling"],"LH":res[i]["LH_swelling"]},
            "end_score":{"LF":res[i]["LF_end_score"],"RH":res[i]["RH_end_score"],"RF":res[i]["RF_end_score"],"LH":res[i]["LH_end_score"]},"hardness":{"LF":res[i]["LF_hardness"],"RH":res[i]["RH_hardness"],"RF":res[i]["RF_hardness"],"LH":res[i]["LH_hardness"]}};
                result.push(tmp);
            }
        }}
        callback(null, [valid, result]);
    });

}

database.prototype.get_lacto = function(username, password,date1,date2,farm,callback){
    let sql = "select username from user where username = ? and password = ?;";

   
        let sql1 = "Select * " +
                "from lactocoder_fact " +
                "where date >= Date(?) and date <= Date(?) and farm = (?);";
    
        var result = [];
        var valid = false;
        con.query(sql+sql1, [username, password,date1, date2,farm],function(err, res){
        if (err) return callback(err,null);
        
        if (res[0].length){
            valid = true;
            if (res[1].length){
            for (var i = 0; i < res.length; i++){

                result.push(res[i]);
            }}
        }
        callback(null, [valid, result]);
    })

}
// post functions for mobile
database.prototype.post_teat = function(username, password,json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into cleanliness_fact (staff, milker, " +
                    "date, farm, isBefore, clean, dip_present, small_dirt, large_dirt)" +
                    "values ?";


    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}


database.prototype.post_udder = function(username, password,json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into udder_hygiene_fact(group_id, staff,date,farm,clean,slightly_dirt,moderate_dirt,cake_on_dirt)" +
                    "values ?";

    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}

database.prototype.post_unit = function(username, password,json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into unit_fact(date, farm, staff, good, bad) values ?;";

    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}


database.prototype.post_strip = function(username, password,json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into strip_fact (staff,date,farm ,ML ,Stall_no,isBalanced) values ?;";

    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}

database.prototype.post_post = function(username, password,json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into postmilking_fact(staff, farm, group_id, date, LH_skin_condition," +
     "LH_color, LH_swelling, LH_hardness, LH_end_score, LF_skin_condition, LF_color, LF_swelling," +
    "LF_hardness, LF_end_score, RH_skin_condition, RH_color, RH_swelling, RH_hardness," +
     "RH_end_score, RF_skin_condition, RF_color, RF_swelling, RF_hardness, RF_end_score) values ?;";

    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}

database.prototype.post_lacto = function(username, password, json, callback){
    let sql1 = "select username from user where username = ? and password = ?;";
    let sql = "insert into lactocoder_fact (farm, date, parlor_type,size,no_operators,pre_milking,procedures," +
                    "prep,herd_size,milking_frequency,milking_routine,cow_name, dip_contact_time," +
                    "lag_contact_stimulate,unit_on_time,total_milk,remark) " +
                    "values ?";

    con.query(sql1,[username, password], function(err, res){
        if (err) return callback(err);
        var result = false;
        if (res.length){
            result = true;
            con.query(sql,[json], function(err, res){
            if (err) return callback(err);
            });
            console.log(result);
        }
        console.log(result);
        callback(null, result);
    });
}

module.exports = new database();

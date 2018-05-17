/*
 * QPMS prject
 */
var mysql = require('mysql');
var config = require('./config');
var con = mysql.createConnection(config.customConfig);
// console.log(config.customConfig)
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Drop database if exists QMPS database, and create a new database
    con.query("Drop database if exists QMPS; Create database QMPS; Use QMPS;", function (err, result) {
        if (err) throw err;
        console.log("Database droped");
    });
    //Create usertable
    query = "create table user (username varchar(32),password varchar(32));";
    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("User table created");
    });
    //Create cleanliness_fact
    query = "create table cleanliness_fact ("+
                    "staff varchar(32)," +
                    "milker varchar(32),"+
                    "date varchar(32)," +
                    "farm varchar(32)," +
                    "isBefore boolean," +
                    "clean integer," +
                    "dip_present integer," +
                    "small_dirt integer," +
                    "large_dirt integer" +
                    ");";
    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("User table created");
    });
    //Create lactocoder_fact
    query = "create table lactocoder_fact (" +
                "farm varchar(32)," +
                "parlor_type varchar(32)," +
                "size integer," +
                "no_operators varchar(32)," +
                "pre_milking varchar(32)," +
                "procedures varchar(32)," +
                "prep varchar(32)," +
                "herd_size integer," +
                "milking_frequency varchar(32)," +
                "milking_routine varchar(32)," +
                "cow_name varchar(32)," +
                "date varchar(32)," +
                "dip_contact_time time," +
                "lag_contact_stimulate time," +
                "unit_on_time time," +
                "total_milk integer," +
                "remark long varchar" +
                ");";
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log("lactocoder_fact created");
    });
    //Create postmilking_fact
    query = "create table postmilking_fact ("+
                "staff varchar(32)," +
                "farm varchar(32)," +
                "group_id varchar(32)," +
                "date varchar(32)," +
                "LH_skin_condition varchar(32)," +
                "LH_color varchar(32)," +
                "LH_swelling varchar(32)," +
                "LH_hardness varchar(32)," +
                "LH_end_score varchar(32)," +
                "LF_skin_condition varchar(32)," +
                "LF_color varchar(32)," +
                "LF_swelling varchar(32)," +
                "LF_hardness varchar(32)," +
                "LF_end_score varchar(32)," +
                "RH_skin_condition varchar(32)," +
                "RH_color varchar(32)," +
                "RH_swelling varchar(32)," +
                "RH_hardness varchar(32)," +
                "RH_end_score varchar(32)," +
                "RF_skin_condition varchar(32)," +
                "RF_color varchar(32)," +
                "RF_swelling varchar(32)," +
                "RF_hardness varchar(32)," +
                "RF_end_score varchar(32)" +
                ");";
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log("postmilking_fact created");
    });
    //Create strip_fact
    query = "create table strip_fact ("+
                "staff varchar(32)," +
                "date varchar(32)," +
                "farm varchar(32)," +
                "ML integer," +
                "Stall_no integer," +
                "isBalanced boolean" +
                ")";
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log("User table created");
    });
    //Create unit_alignment_fact
    query = "create table unit_fact (" +
                "date varchar(32)," +
                "farm varchar(32)," +
                "staff varchar(32),"+
                "good integer," +
                "bad integer" +
                ");" ;
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log("unit_fact created");
    });
    //Create udder_hygiene_fact
    query = "create table udder_hygiene_fact ("+
                "group_id varchar(32)," +
                "staff varchar(32)," +
                "date varchar(32)," +
                "farm varchar(32)," +
                "clean integer," +
                "slightly_dirt integer," +
                "moderate_dirt integer," +
                "cake_on_dirt integer" +
                ");";
    con.query(query, function (err, result) {
    if (err) throw err;
    console.log("udder_hygiene_fact created");
    });
});





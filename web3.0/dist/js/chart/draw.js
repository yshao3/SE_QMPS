$(document).ready(function() {
  $('#teatDraw').click(teatFunction);
    $('#unitDraw').click(unitFunction);
    $('#udderDraw').click(udderFunction);
    $('#stripDraw').click(stripFunction);
      $('#postDraw').click(postFunction);
      $('#lactoDraw').click(lactoFunction);
});


//sample dataset can be used to test for further development
//sample dataset has consistent data type and structure of return data from backend API 


//unit_set
// var unit_data = [
// {
// date: '2017-11-31',
// Observer: 'Jone',
// Farm: 'Glezon',
// good: 132,
// bad: 21
// },
// {
// date: '2017-12-04',
// Observer: 'Alex',
// Farm: 'Glezon',
// good: 99,
// bad: 31
// },
// {
// date: '2017-12-16',
// Observer: 'Gina',
// Farm: 'Glezon',
// good: 70,
// bad: 35
// },
// {
//  date: '2017-12-22',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-01-15',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-02-02',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-05',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-02-06',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-07',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-02-08',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-09',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-02-10',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-13',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-02-15',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-16',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-02-19',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-02-25',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-03-01',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-03-05',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-03-06',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-03-15',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-03-16',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-03-17',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-04-10',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-04-21',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-04-22',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-04-23',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-04-24',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-04-25',
//  Observer: 'Irine',
//  Farm: 'Glezon',
//  good: 65,
//  bad: 10
// },
// {
//  date: '2018-04-26',
//  Observer: 'Jone',
//  Farm: 'Glezon',
//  good: 132,
//  bad: 21
// },
// {
//  date: '2018-04-30',
//  Observer: 'Alex',
//  Farm: 'Glezon',
//  good: 99,
//  bad: 31
// },
// {
//  date: '2018-04-30',
//  Observer: 'Gina',
//  Farm: 'Glezon',
//  good: 70,
//  bad: 35
// },
// {
//  date: '2018-05-03',
//  Observer: 'Zeiger',
//  Farm: 'Glezon',
//  good: 90,
//  bad: 36
// }];

// //udder_set
// udder_data = [
// {
//  Milker: "Pen1",date: '2018-03-15', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen1",date: '2018-03-15', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen2",date: '2018-03-15', clean: 11, slightly_dirt: 10,moderate_dirt: 11,cake_on_dirt: 6},
// {
//  Milker: "Pen3",date: '2018-03-15', clean: 10, slightly_dirt: 24,moderate_dirt: 4,cake_on_dirt: 2 },
// {
//  Milker: "Pen4",date: '2018-03-15', clean: 15, slightly_dirt: 18,moderate_dirt: 5,cake_on_dirt: 5},
// {
//  Milker: "Pen5",date: '2018-03-15', clean: 23, slightly_dirt: 7,moderate_dirt: 8,cake_on_dirt: 3},
// {
//  Milker: "Pen1",date: '2018-03-16', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen1",date: '2018-03-16', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen2",date: '2018-03-16', clean: 11, slightly_dirt: 10,moderate_dirt: 11,cake_on_dirt: 6},
// {
//  Milker: "Pen3",date: '2018-03-16', clean: 10, slightly_dirt: 24,moderate_dirt: 4,cake_on_dirt: 2 },
// {
//  Milker: "Pen4",date: '2018-03-16', clean: 15, slightly_dirt: 18,moderate_dirt: 5,cake_on_dirt: 5},
// {
//  Milker: "Pen5",date: '2018-03-16', clean: 23, slightly_dirt: 7,moderate_dirt: 8,cake_on_dirt: 3},
// {
//  Milker: "Pen1",date: '2018-03-17', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen2",date: '2018-03-17', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen3",date: '2018-03-17', clean: 11, slightly_dirt: 10,moderate_dirt: 11,cake_on_dirt: 6},
// {
//  Milker: "Pen4",date: '2018-03-17', clean: 10, slightly_dirt: 24,moderate_dirt: 4,cake_on_dirt: 2 },
// {
//  Milker: "Pen5",date: '2018-03-17', clean: 15, slightly_dirt: 18,moderate_dirt: 5,cake_on_dirt: 5},
// {
//  Milker: "Pen5",date: '2018-03-18', clean: 23, slightly_dirt: 7,moderate_dirt: 8,cake_on_dirt: 3},
// {
//  Milker: "Pen1",date: '2018-03-18', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen2",date: '2018-03-18', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen3",date: '2018-03-18', clean: 11, slightly_dirt: 10,moderate_dirt: 11,cake_on_dirt: 6},
// {
//  Milker: "Pen4",date: '2018-03-18', clean: 15, slightly_dirt: 18,moderate_dirt: 5,cake_on_dirt: 5},
// {
//  Milker: "Pen5",date: '2018-03-19', clean: 23, slightly_dirt: 7,moderate_dirt: 8,cake_on_dirt: 3},
// {
// Milker: "Pen6",date: '2018-03-19', clean: 19, slightly_dirt: 12,moderate_dirt: 1,cake_on_dirt: 5},
// {
//  Milker: "Pen1",date: '2018-03-22', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen2",date: '2018-03-22', clean: 15, slightly_dirt: 10,moderate_dirt: 3,cake_on_dirt: 10},
// {
//  Milker: "Pen3",date: '2018-03-26', clean: 11, slightly_dirt: 10,moderate_dirt: 11,cake_on_dirt: 6},
// {
//  Milker: "Pen4",date: '2018-03-30', clean: 15, slightly_dirt: 18,moderate_dirt: 5,cake_on_dirt: 5},
// {
//  Milker: "Pen5",date: '2018-04-05', clean: 23, slightly_dirt: 7,moderate_dirt: 8,cake_on_dirt: 3},
// {
//  Milker: "Pen2",date: '2018-04-19',clean: 19,slightly_dirt: 12,moderate_dirt: 1,cake_on_dirt: 5}
// ];
// //strip_data
var strip_data = [
       { date: '2018-01-10', Stall_number: 1, ML: 132, balance: "isbalanced", Majority: 0},
       { date: '2018-01-10', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-01-10', Stall_number: 3, ML: 300, balance: "isbalanced", Majority: 0},
       { date: '2018-01-13', Stall_number: 4, ML: 400, balance: "balanced",  Majority: 0},
       { date: '2018-01-13', Stall_number: 5, ML: 700, balance: "balanced", Majority: 0},
       { date: '2018-01-13', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-01-13', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-01-28', Stall_number: 3, ML: 100, balance: "balanced", Majority: 0},
       { date: '2018-01-28', Stall_number: 4, ML: 200, balance: "balanced",  Majority: 0},
       { date: '2018-01-28', Stall_number: 5, ML: 400, balance: "balanced", Majority: 0},
       { date: '2018-02-07', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-02-07', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-02-07', Stall_number: 3, ML: 220, balance: "isbalanced", Majority: 0},
       { date: '2018-02-07', Stall_number: 4, ML: 330, balance: "balanced",  Majority: 0},
       { date: '2018-02-07', Stall_number: 5, ML: 600, balance: "balanced", Majority: 0},
       { date: '2018-02-20', Stall_number: 1, ML: 102, balance: "balanced", Majority: 0},
       { date: '2018-02-20', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-02-20', Stall_number: 3, ML: 240, balance: "isbalanced", Majority: 0},
       { date: '2018-02-20', Stall_number: 4, ML: 190, balance: "balanced",  Majority: 0},
       { date: '2018-02-20', Stall_number: 5, ML: 500, balance: "balanced", Majority: 0},
       { date: '2018-02-25', Stall_number: 1, ML: 432, balance: "isbalanced", Majority: 0},
       { date: '2018-02-25', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 3, ML: 100, balance: "isbalanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 4, ML: 180, balance: "isbalanced",  Majority: 0},
       { date: '2018-03-03', Stall_number: 5, ML: 700, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 1, ML: 152, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 3, ML: 100, balance: "isbalanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 4, ML: 400, balance: "balanced",  Majority: 0},
       { date: '2018-03-03', Stall_number: 5, ML: 700, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-03-03', Stall_number: 3, ML: 220, balance: "isbalanced", Majority: 0},
       { date: '2018-03-06', Stall_number: 5, ML: 500, balance: "balanced", Majority: 0},
       { date: '2018-03-06', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-03-06', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-03-06', Stall_number: 3, ML: 100, balance: "isbalanced", Majority: 0},
       { date: '2018-03-07', Stall_number: 4, ML: 200, balance: "isbalanced",  Majority: 0},
       { date: '2018-03-07', Stall_number: 5, ML: 700, balance: "balanced", Majority: 0},
       { date: '2018-03-07', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-03-07', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-03-07', Stall_number: 3, ML: 300, balance: "isbalanced", Majority: 0},
       { date: '2018-04-01', Stall_number: 4, ML: 400, balance: "isbalanced",  Majority: 0},
       { date: '2018-04-01', Stall_number: 5, ML: 240, balance: "balanced", Majority: 0},
       { date: '2018-04-01', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-04-01', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-04-10', Stall_number: 3, ML: 100, balance: "isbalanced", Majority: 0},
       { date: '2018-04-10', Stall_number: 4, ML: 400, balance: "balanced",  Majority: 0},
       { date: '2018-04-10', Stall_number: 5, ML: 700, balance: "balanced", Majority: 0},
       { date: '2018-04-15', Stall_number: 1, ML: 132, balance: "balanced", Majority: 0},
       { date: '2018-04-15', Stall_number: 2, ML: 234, balance: "balanced", Majority: 0},
       { date: '2018-04-15', Stall_number: 3, ML: 200, balance: "isbalanced", Majority: 0},
       { date: '2018-04-15', Stall_number: 4, ML: 210, balance: "isbalanced",  Majority: 0},
       { date: '2018-04-15', Stall_number: 5, ML: 700, balance: "isbalanced", Majority: 0}];
// //post_data
// var post_data = [
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-15-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//              LH: "F",
//              LF: "W",
//              RH: "F",
//              RF: "W"
//          },
//          end_score: {
//              LH: "N",
//              LF: "S",
//              RH: "SR",
//              RF: "R"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//              LH: "D",
//              LF: "OL",
//              RH: "H",
//              RF: "D"
//          },
//          color: {
//              LH: "R",
//              LF: "DS",
//              RH: "B",
//              RF: "R"
//          },
//          swelling: {
//              LH: "VM",
//              LF: "SW",
//              RH: "VM",
//              RF: "SW"
//          },
//          hardness: {
//              LH: "F",
//              LF: "W",
//              RH: "F",
//              RF: "W"
//          },
//          end_score: {
//              LH: "N",
//              LF: "S",
//              RH: "SR",
//              RF: "R"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "F",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "SR",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "F",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },{
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-17-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-21-2018',
//          skin_condition: {
//              LH: "D",
//              LF: "OL",
//              RH: "H",
//              RF: "D"
//          },
//          color: {
//              LH: "R",
//              LF: "DS",
//              RH: "B",
//              RF: "R"
//          },
//          swelling: {
//              LH: "VM",
//              LF: "SW",
//              RH: "VM",
//              RF: "SW"
//          },
//          hardness: {
//              LH: "F",
//              LF: "W",
//              RH: "F",
//              RF: "W"
//          },
//          end_score: {
//              LH: "N",
//              LF: "S",
//              RH: "SR",
//              RF: "R"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-25-2018',
//          skin_condition: {
//              LH: "D",
//              LF: "OL",
//              RH: "H",
//              RF: "D"
//          },
//          color: {
//              LH: "R",
//              LF: "DS",
//              RH: "B",
//              RF: "R"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-28-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//              LH: "N",
//              LF: "S",
//              RH: "SR",
//              RF: "R"
//          }
//      },
//      {
//          group_id: 1,
//          Line: 1,
//          Farm_Name: "Zeus",
//          date: '03-30-2018',
//          skin_condition: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          color: {
//              LH: "R",
//              LF: "DS",
//              RH: "B",
//              RF: "R"
//          },
//          swelling: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          hardness: {
//            LH: "N",
//            LF: "N",
//            RH: "N",
//            RF: "N"
//          },
//          end_score: {
//              LH: "N",
//              LF: "N",
//              RH: "N",
//              RF: "N"
//          }
//      }];
// //lacto_data
// var lacto_data = [
//     {
//         Farm: "Zeus",
//         date: '03-15-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0456,
//         Stall: 1,
//         dip_contact_time: 29,
//         lag_contact_stimulate : 93,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-15-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0110,
//         Stall: 1,
//         dip_contact_time: 60,
//         lag_contact_stimulate : 54,
//         unit_on_time : 28,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-16-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 1026,
//         Stall: 1,
//         dip_contact_time: 76,
//         lag_contact_stimulate : 84,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-16-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0960,
//         Stall: 1,
//         dip_contact_time: 49,
//         lag_contact_stimulate : 34,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-16-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0126,
//         Stall: 1,
//         dip_contact_time: 35,
//         lag_contact_stimulate : 34,
//         unit_on_time : 33,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-17-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 1230,
//         Stall: 2,
//         dip_contact_time: 59,
//         lag_contact_stimulate : 85,
//         unit_on_time : 37,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-17-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 8821,
//         Stall: 2,
//         dip_contact_time: 43,
//         lag_contact_stimulate : 23,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-18-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 2024,
//         Stall: 2,
//         dip_contact_time: 40,
//         lag_contact_stimulate : 89,
//         unit_on_time : 45,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-18-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0091,
//         Stall: 2,
//         dip_contact_time: 35,
//         lag_contact_stimulate : 83,
//         unit_on_time : 47,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-18-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0330,
//         Stall: 2,
//         dip_contact_time: 39,
//         lag_contact_stimulate : 44,
//         unit_on_time : 65,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-19-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0035,
//         Stall: 3,
//         dip_contact_time: 30,
//         lag_contact_stimulate : 77,
//         unit_on_time : 41,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },{
//         Farm: "Zeus",
//         date: '03-19-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0256,
//         Stall: 3,
//         dip_contact_time: 64,
//         lag_contact_stimulate : 43,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-19-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 1204,
//         Stall: 3,
//         dip_contact_time: 32,
//         lag_contact_stimulate : 55,
//         unit_on_time : 28,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-20-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 5610,
//         Stall: 3,
//         dip_contact_time: 69,
//         lag_contact_stimulate : 44,
//         unit_on_time : 38,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-20-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 0604,
//         Stall: 4,
//         dip_contact_time: 59,
//         lag_contact_stimulate : 34,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-20-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 3456,
//         Stall: 4,
//         dip_contact_time: 59,
//         lag_contact_stimulate : 34,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-21-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 1256,
//         Stall: 4,
//         dip_contact_time: 20,
//         lag_contact_stimulate : 46,
//         unit_on_time : 68,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-21-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 156,
//         Stall: 4,
//         dip_contact_time: 49,
//         lag_contact_stimulate : 14,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-21-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 996,
//         Stall: 5,
//         dip_contact_time: 23,
//         lag_contact_stimulate : 34,
//         unit_on_time : 78,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-22-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Cow: 1216,
//         Stall: 5,
//         dip_contact_time: 54,
//         lag_contact_stimulate : 54,
//         unit_on_time : 56,
//         Total_Milk: 200,
//         Remark: "N/A"
//     },
//     {
//         Farm: "Zeus",
//         date: '03-22-2018',
//         Parlor_Type: "Mega",
//         Pre_milking: "True",
//         Herd_Size: 10,
//         Size: 5,
//         Procedures: "Normal",
//         Milking_Frequency: "2X",
//         No_Operations: 20,
//         Prep: "False",
//         Stall : 5,
//         Cow: 459,
//         Stall: 5,
//         dip_contact_time: 45,
//         lag_contact_stimulate : 44,
//         unit_on_time : 98,
//         Total_Milk: 200,
//         Remark: "N/A"
//     }
// ];

//help var to trim decimal nubmer to integer
var formacoloromma = d3.format(",");

//draw data vis chart for search result on udder hygiene form
function udderFunction() {
  if (typeof udder_data == 'undefined') {
    //the variable is defined
    //check if udder hyginen result is null or defined, throw error to user if search is not finished  
    alert("Empty dataset. Please search data!");
  }else{
//use d3 nest method to prepare and summarize search result 
  var datanest = d3.nest()
  		.key(function (d){ return d.date;})
  		.rollup(function(v){ return {
  				total: d3.sum(v, function(d) {return d.clean + d.slightly_dirt + d.moderate_dirt + d.cake_on_dirt;}),
  				percent_3_4: formacoloromma( (d3.sum(v, function (d){ return d.moderate_dirt + d.cake_on_dirt;}) / d3.sum(v, function(d) {return d.clean + d.slightly_dirt + d.moderate_dirt + d.cake_on_dirt;}))*100)
  			
  		};})
  		.entries(udder_data);
  var udderset = [];
  		for(var i = 0; i < datanest.length; i ++){
  		
  		   var token = {};
  		   token.date = datanest[i].key;
  		   token.visits = Math.round(datanest[i].value.percent_3_4);
  		   udderset.push(token);
  		  
  		 }
  		 var datanest2 = d3.nest()
  		 		.key(function (d){ return d.Milker;})
  		 		.rollup(function(v){ return {
  		 				total: d3.sum(v, function(d) {return d.clean + d.slightly_dirt + d.moderate_dirt + d.cake_on_dirt;}),
  		 				percent_3_4: formacoloromma( (d3.sum(v, function (d){ return d.moderate_dirt + d.cake_on_dirt;}) / d3.sum(v, function(d) {return d.clean + d.slightly_dirt + d.moderate_dirt + d.cake_on_dirt;}))*100)
  		 				
  		 		};})
  		 		.entries(udder_data);
  		 var udderset2 = [];
  		 		for(var i = 0; i < datanest2.length; i ++){
  		 			 var token = {};
  		 			 token.country = datanest2[i].key;
  		 			 token.visits = Math.round(datanest2[i].value.percent_3_4);
  		 			 udderset2.push(token);
  		 		 }
  var chart = AmCharts.makeChart("uddercanvas1", {
      "type": "serial",
      "theme": "light",
      "marginRight": 80,
      "autoMarginOffset": 20,
      "marginTop": 7,
      "dataProvider": udderset,
      "valueAxes": [{
          "axisAlpha": 0.2,
          "dashLength": 1,
          "position": "left",
  				"labelFunction": function(value) {
  		      return value + "%";
  		    }
      }],
      "mouseWheelZoomEnabled": true,
      "graphs": [{
          "id": "g1",
          "balloonText": "[[value]]",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bullecolorolor": "#FFFFFF",
          "hideBulleskin_conditionount": 50,
          "title": "3&4 Percent",
          "valueField": "visits",
          "useLineColorForBulletBorder": true,
          "balloon":{
              "drop":true
          },
  				  "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"

      }],
      "chartScrollbar": {
          "autoGridCount": true,
          "graph": "g1",
          "scrollbarHeight": 40
      },
      "chartCursor": {
         "limitToGraph":"g1"
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "axisColor": "#DADADA",
          "dashLength": 1,
          "minorGridEnabled": true
      },
      "export": {
          "enabled": true
      }
  });
 //enable zoom function based on the range of data
  chart.addListener("rendered", zoomChart);
  zoomChart();

  // this method is called when chart is first inited as we listen for "rendered" event
  function zoomChart() {
      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart.zoomToIndexes(udderset.length - 40, udderset.length - 1);
  }


  		var dataset = [];
  		var parseTime = d3.timeParse("%Y-%m-%d");

  	  var d = parseTime('2018-03-14');

  		var chart = AmCharts.makeChart( "uddercanvas2", {
  		  "type": "serial",
  		  "theme": "light",
  		  "dataProvider": udderset2,
  		  "valueAxes": [ {
  		    "gridColor": "#FFFFFF",
  		    "gridAlpha": 0.2,
  		    "dashLength": 0,
  				"labelFunction": function(value) {
  		      return value + "%";
  		    }
  		  } ],
  		  "gridAboveGraphs": true,
  		  "startDuration": 1,
  		  "graphs": [ {
  		    "balloonText": "[[title]]: <b>[[value]]</b>",
  		    "fillAlphas": 0.8,
          //change bar color
          "fillColors": "#4176C1",
  		    "lineAlpha": 0.2,
  		    "type": "column",
          "title": "3&4 Percent",
  		    "valueField": "visits",
          //construct balloontext
  				"balloonText": "[[title]]<br />[[category]]<br /><b style='font-size: 130%'>[[value]]%</b>"
  		  } ],
  		  "charcolorursor": {
  		    "categoryBalloonEnabled": false,
  		    "cursorAlpha": 0,
  		    "zoomable": false
  		  },
  		  "categoryField": "country",
  		  "categoryAxis": {
  		    "gridPosition": "start",
  		    "gridAlpha": 0,
  		    "tickPosition": "start",
  		    "tickLength": 20
  		  },
  		  "export": {
  		    "enabled": true
  		  }

  		} );
}}

//draw data vis chart for search result on strip yields
function stripFunction() {
  if (typeof strip_data == 'undefined') {
    //the variable is defined
    //check if udder hyginen result is null or defined, throw error to user if search is not finished  
    alert("Empty dataset. Please search data!");
  }else{

  var label_data = ["<150 ml", "150 ml-250 ml", ">250 ml"];
  var formacoloromma = d3.format(",");
  //use d3 nest method to prepare and summarize search result 
  var datanest = d3.nest().key(function(d) { return d.date; })
  .rollup(function(v){ return {
  		total: d3.sum(v, function(d) {return d.ML;}),
  		average: d3.mean(v, function(d) {return d.ML;}),
  		smaller_150: d3.sum(v, function (d){ return (d.ML < 150);}) / d3.sum(v, function(d) {return (d.ML >= 0);}),
  		between: d3.sum(v, function (d){ return (d.ML >= 150 & d.ML <= 250);}) / d3.sum(v, function(d) {return (d.ML >= 0);}),
  		larger_250: d3.sum(v, function (d){ return (d.ML > 250);}) / d3.sum(v, function(d) {return (d.ML >= 0);}),
  	
  };})
  .entries(strip_data);
  var stripset = [];
  for(var i = 0; i < datanest.length; i ++){
     var token = {};
     token.date = datanest[i].key;
     token.visits = Math.round((datanest[i].value.smaller_150)* 100);
  	 token.hits = Math.round((datanest[i].value.between)* 100);
     token.views = Math.round((datanest[i].value.larger_250)*100);
     stripset.push(token);
   }


  var chart = AmCharts.makeChart("stripcanvas", {
      "type": "serial",
      "theme": "light",
      "legend": {
          "useGraphSettings": true
      },
      "dataProvider": stripset,
      "synchronizeGrid":true,
      "valueAxes": [{
          "id":"v1",
          "axisColor": "#444",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left",
  				"labelFunction": function(value) {
  		      return value + "%";
  		    }
  		  }, {
          "id":"v2",
          "axisColor": "#FCD202",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "right",
  				"labelFunction": function(value) {
  		      return value + "%";
  		    }
      }, {
          "id":"v3",
          "axisColor": "#B0DE09",
          "axisThickness": 2,
          "gridAlpha": 0,
          "offset": 50,
          "axisAlpha": 1,
          "position": "left",
  				"labelFunction": function(value) {
  		      return value + "%";
  		    }
      }],
      "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#FF6600",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulleskin_conditionount": 30,
          "title": "<150 ml",
          "valueField": "visits",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//format data label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }, {
          "valueAxis": "v1",
          "lineColor": "#FCD202",
          "bullet": "square",
          "bulletBorderThickness": 1,
          "hideBulletscount": 30,
          "title": "150 ml-250 ml",
          "valueField": "hits",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//format data label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }, {
          "valueAxis": "v1",
          "lineColor": "#B0DE09",
          "bullet": "triangleUp",
          "bulletBorderThickness": 1,
          "hideBulletscount": 30,
          "title": ">250 ml",
          "valueField": "views",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//format data label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }],
      "chartScrollbar": {},
      "charcolorursor": {
          "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "axisColor": "#DADADA",
          "minorGridEnabled": true
      },
      "export": {
      	"enabled": true,
          "position": "bottom-right"
       }
  });

  chart.addListener("dataUpdated", zoomChart);
  zoomChart();

 // this method is called when chart is first inited as we listen for "rendered" event
 function zoomChart() {
  // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
  }

}}

//draw data vis chart for search result on post milking form
function postFunction() {
  if (typeof post_data == 'undefined') {
    //the variable is defined
    //check if post milking result is null or defined, throw error to user if search is not finished  
    alert("Empty dataset. Please search data!");
  }else{
//use d3 nest method to prepare and summarize search result 
      var datanest = d3.nest()
                .key(function (d){ return d.date;})
                .rollup(function(v){ return {
                  Total_Scored: d3.sum(v, function(d) {return d.group_id;}),
                  Total_Skin_Condition_Abnormal: d3.sum(v, function(d){return d.skin_condition.LH != 'N' || d.skin_condition.LF != 'N' || d.skin_condition.RH != 'N' || d.skin_condition.RF != 'N'}),
                  Total_Color_Abnormal: d3.sum(v, function(d){return d.color.LH != 'N' || d.color.LF != 'N' || d.color.RH != 'N' || d.color.RF != 'N'}),
                  Total_Swelling_Abnormal: d3.sum(v, function(d){return d.swelling.LH != 'N' || d.swelling.LF != 'N' || d.swelling.RH != 'N' || d.swelling.RF != 'N'}),
                  Total_End_Score_Abnormal: d3.sum(v, function(d){return d.end_score.LH != 'N' || d.end_score.LF != 'N' || d.end_score.RH != 'N' || d.end_score.RF != 'N'}),
                  Total_Hardness_Abnormal: d3.sum(v, function(d){return d.hardness.LH != 'N' || d.hardness.LF != 'N' || d.hardness.RH != 'N' || d.hardness.RF != 'N'}),
                  Total_Open_Leison: d3.sum(v, function(d){return d.skin_condition.LH == 'OL' || d.skin_condition.LF == 'OL' || d.skin_condition.RH == 'OL' || d.skin_condition.RF == 'OL'}),
                  Total_Hemorrhage: d3.sum(v, function(d){return d.skin_condition.LH == 'H' || d.skin_condition.LF == 'H' || d.skin_condition.RH == 'H' || d.skin_condition.RF == 'H'}),
                  Percent_Skin_Condition_Abnormal: d3.sum(v, function(d){return (d.skin_condition.LH != 'N' || d.skin_condition.LF != 'N' || d.skin_condition.RH != 'N' || d.skin_condition.RF != 'N') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_Color_Abnormal: d3.sum(v, function(d){return (d.color.LH != 'N' || d.color.LF != 'N' || d.color.RH != 'N' || d.color.RF != 'N') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_Swelling_Abnormal: d3.sum(v, function(d){return (d.swelling.LH != 'N' || d.swelling.LF != 'N' || d.swelling.RH != 'N' || d.swelling.RF != 'N') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_End_Score_Abnormal: d3.sum(v, function(d){return (d.end_score.LH != 'N' || d.end_score.LF != 'N' || d.end_score.RH != 'N' || d.end_score.RF != 'N') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_Hardness_Abnormal: d3.sum(v, function(d){return (d.hardness.LH != 'N' || d.hardness.LF != 'N' || d.hardness.RH != 'N' || d.hardness.RF != 'N') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_Open_Leison: d3.sum(v, function(d){return (d.skin_condition.LH == 'OL' || d.skin_condition.LF == 'OL' || d.skin_condition.RH == 'OL' || d.skin_condition.RF == 'OL') / d3.sum(v, function(d) {return d.group_id;}) }),
                  Percent_Hemorrhage: d3.sum(v, function(d){return (d.skin_condition.LH == 'H' || d.skin_condition.LF == 'H' || d.skin_condition.RH == 'H' || d.skin_condition.RF == 'H') / d3.sum(v, function(d) {return d.group_id;})})
                  };})
                .entries(post_data);
               
            var postset = [];
            for(var i = 0; i < datanest.length; i ++){
               var token = {};
               token.date = datanest[i].key;
               token.skin_condition = Math.round((datanest[i].value.Percent_Skin_Condition_Abnormal)* 100);
               token.color = Math.round((datanest[i].value.Percent_Color_Abnormal)* 100);
               token.swelling = Math.round((datanest[i].value.Percent_Swelling_Abnormal)* 100);
               token.hate = Math.round((datanest[i].value.Percent_Hardness_Abnormal)* 100);
               token.tes = Math.round((datanest[i].value.Percent_End_Score_Abnormal)* 100);
               token.ol = Math.round((datanest[i].value.Percent_Open_Leison)* 100);

               token.h = Math.round((datanest[i].value.Percent_Hemorrhage)* 100);

               postset.push(token);
              
             }
//array to provide color palette for elements in data vis chart
var cc = ["#555E7B", "#B7D968", "#B576AD", "#E04644", "#FDE47F", "#7CCCE5", "#6237B2", "#30A300"];
                var chart = AmCharts.makeChart("postcanvas", {
                    "type": "serial",
                    "theme": "light",
                    "legend": {
                        "equalWidths": true,
                        "useGraphSettings": true,

                        "valueWidth": 100
                    },
                    "dataProvider": postset,
                    "synchronizeGrid":true,
                    "valueAxes": [{
                        "id":"v1",
                        "axisColor": "#444",
                        "axisThickness": 2,
                        "axisAlpha": 1,
                        "position": "left",
                        "labelFunction": function(value) {
                          return value + "%";
                        }
                      },
                  ],
                    "graphs": [{
                      //draw parameter of teat skin_condition
                        "valueAxis": "v1",
                        "lineColor": cc[0],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Teat Skin Condition",
                        "valueField": "skin_condition",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }, {
                      //draw parameter of teat color
                        "valueAxis": "v1",
                        "lineColor": cc[1],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Teat Color",
                        "valueField": "color",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                   //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }, {
                      //swelling parameter
                        "valueAxis": "v1",
                        
                        "lineColor": cc[2],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Swelling Near Teat Base",
                        "valueField": "swelling",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                   //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //hardness at teat end parameter
                        "valueAxis": "v1",
                        "lineColor": cc[3],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Hardness at Teat End",
                        "valueField": "hate",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                   //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //teat end score parameter
                        "valueAxis": "v1",
                        "lineColor": cc[4],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Teat End Score",
                        "valueField": "tes",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                  //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //Open lesions
                        "valueAxis": "v1",
                        "lineColor": cc[5],
                        "bullet": "square",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Open Lesion",
                        "valueField": "ol",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //Hemorrhages
                        "valueAxis": "v1",
                        "lineColor": cc[6],
                        "bullet": "triangleUp",
                        "bulletBorderThickness": 1,
                        "hideBulletscount": 30,
                        "title": "Hemorrhage",
                        "valueField": "h",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                  //format label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }],
                    //set up scrollar to adjust the data display range
                    "chartScrollbar": {},
                    "chartCursor": {
                        "cursorPosition": "mouse"
                    },
                    "categoryField": "date",
                    "categoryAxis": {
                        "parseDates": true,
                        "axisColor": "#DADADA",
                        "minorGridEnabled": true
                    },
                    "export": {
                      "enabled": true,
                        "position": "bottom-right"
                     }
                });

                chart.addListener("dataUpdated", zoomChart);
                zoomChart();


                // this method is called when chart is first inited as we listen for "rendered" event
                function zoomChart() {
                // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
                    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
                }
}}

//draw data vis chart for search result on lacto coder analysis form
function lactoFunction() {
 
  if (typeof lacto_data == 'undefined') {
    // the variable is defined
    alert("Empty dataset. Please search data!");
  }
  else{
    //use d3 nest method to prepare and summarize search result 
    var datanest = d3.nest()
    .key(function (d){ return d.date;})
    .rollup(function(v){ return {
      average_dip: d3.mean(v, function(d) {return d.dip_contact_time;}),
      average_lag: d3.mean(v, function(d) {return d.lag_contact_stimulate;}),
      average_unit: d3.mean(v, function(d) {return d.unit_on_time;}),

      min_dip: d3.min(v, function(d) {return d.dip_contact_time;}),
      min_lag: d3.min(v, function(d) {return d.lag_contact_stimulate;}),
      min_unit: d3.min(v, function(d) {return d.unit_on_time;}),

      max_dip: d3.max(v, function(d) {return d.dip_contact_time;}),
      max_lag: d3.max(v, function(d) {return d.lag_contact_stimulate;}),
      max_unit: d3.max(v, function(d) {return d.unit_on_time;})
  };})
    .entries(lacto_data);


    var lactoset = [];
    for(var i = 0; i < datanest.length; i ++){
   
      var token = {};
      token.date = datanest[i].key;
      token.adip = Math.round(datanest[i].value.average_dip);
      token.alag = Math.round(datanest[i].value.average_lag);
      token.aunit = Math.round(datanest[i].value.average_unit);
      token.ldip = Math.round(datanest[i].value.min_dip);
      token.llag = Math.round(datanest[i].value.min_lag);
      token.lunit = Math.round(datanest[i].value.min_unit);
      token.hdip = Math.round(datanest[i].value.max_dip);
      token.hlag = Math.round(datanest[i].value.max_lag);
      token.hunit = Math.round(datanest[i].value.max_unit);
      lactoset.push(token);
     
    }

  var chart = AmCharts.makeChart( "lactocanvas", {
    "type": "serial",
    "theme": "light",
    "titles": [{
        "text": "LactoCoder Record Summary",
        "size": 15
    }],
    "dataDateFormat": "MM-DD-YYYY",
    //set up 3d angle - 20
    "depth3D": 0,
    "angle": 30,
    "legend": {
      "horizontalGap": 10,
      "useGraphSettings": true,
      "markerSize": 10
    },
    "dataProvider": lactoset,
    "valueAxes": [ {
      "id": "v1",
      "title": "Time duration",
      "position": "left",
      "stackType": "regular",
      //alpha is used to set up width
      //set up draw width of axis
      "axisAlpha": 1,
      "gridAlpha": 0,
      "labelFunction": function(value) {
        return value + "s";
      }
    }, {
    "id": "v2",
    "title": "Date",
    "gridAlpha": 0,

    "position": "bottom",
    "autoGridCount": false
  }],
    "graphs": [ {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 1,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Dip Contact-Min",
      "type": "column",
      "lineColor": "#ffe082",
      "fillColors": "#ffe082",
      "valueField": "ldip"
    }, {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 1,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Lag Time-Min",
      "type": "column",
      //if true, creat new legend on parallel position
      "newStack": true,
      "lineColor": "#c3eeff",
      "fillColors": "#c3eeff",
      "valueField": "llag"
    }, {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 1,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Unit on Time-Min",
      "type": "column",
      "newStack": true,
      "lineColor": "#ffddc1",
      "fillColors": "#ffddc1",
     
      "valueField": "lunit"
    }, {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Dip Contact-Max",
      "type": "column",
      "newStack": true,
      "lineColor": "#caae53",
      "fillColors": "#caae53",
      "valueField": "hdip"
    }, {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Lag Time-Max",
      "type": "column",
      "newStack": true,
      "lineColor": "#5d99c6",
      "fillColors": "#5d99c6",
      "valueField": "hlag"
    }, {
      "balloonText": "[[title]]" + " " + "[[value]]"+"s",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Unit on Time-Max",
      "type": "column",
      "newStack": true,
      "lineColor": "#c97b63",
      "fillColors": "#c97b63",
      "valueField": "hunit"
    },{
    "id": "avgdip",
    "valueAxis": "v1",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bullecolorolor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletscount": 50,
    "lineThickness": 2,
    "lineColor": "#fe9e14",
    "type": "smoothedLine",
    "title": "Dip Contact-Average",
    "useLineColorForBulletBorder": true,
    "valueField": "adip",
    "balloonText": "[[title]]" + " " + "[[value]]"+"s"
  },{
  "id": "avglag",
  "valueAxis": "v1",
  "bullet": "round",
  "bulletBorderAlpha": 1,
  "bullecolorolor": "#FFFFFF",
  "bulletSize": 5,
  "hideBulletscount": 50,
  "lineThickness": 2,
  "lineColor": "#90caf9",
  "type": "smoothedLine",
  "title": "Lag Time-Average",
  "useLineColorForBulletBorder": true,
  "valueField": "alag",
  "balloonText": "[[title]]" + " " + "[[value]]"+"s"
},{
    "id": "avgunit",
    "valueAxis": "v1",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bullecolorolor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletscount": 50,
    "lineThickness": 2,
    "lineColor": "#ffab91",
    "type": "smoothedLine",
    "title": "Unit on Time-Average",
    "useLineColorForBulletBorder": true,
    "valueField": "aunit",
    "balloonText": "[[title]]" + " " + "[[value]]"+"s"
    }],
    "chartScrollbar": {
       "autoGridCount": false,
       "graph": "g1",
       "scrollbarHeight": 40
   },
    "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis": false,
          "offset": 30,
          "scrollbarHeight": 40,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0.5,
          "graphLineAlpha": 0.5,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount": true,
          "color": "#AAAAAA"
        },
     

   "chartCursor": {
    "pan": false,
    "valueLineEnabled": false,
    "valueLineBalloonEnabled": false,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
    "categoryField": "date",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 1,
      "gridAlpha": 0,
      "position": "left",
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": true
    }
  } );

}
}

//draw data vis chart for search result on unit alignment form
function unitFunction() {
//the variable is defined
    //check if udder hyginen result is null or defined, throw error to user if search is not finished  
  if (typeof unit_data == 'undefined') {
   
    alert("Empty dataset. Please search data!");
  }else{

  var formacoloromma = d3.format(",");
  //use d3 nest method to prepare and summarize search result 
  var datanest = d3.nest().key(function(d) { return d.date; })
                          .rollup(function(v) { return {
                              total: d3.sum(v, function(d) { return d.good + d.bad; }),
                              good: formacoloromma(d3.sum(v, function(d) { return d.good; })/d3.sum(v, function(d) { return d.good + d.bad; }) * 100),
                              bad: d3.sum(v, function(d) { return d.bad; })/d3.sum(v, function(d) { return d.good + d.bad; })
                            }; })
                          .entries(unit_data);
 


  var unitset = [];
  for(var i = 0; i < datanest.length; i ++){
 
     var token = {};
     token.date = datanest[i].key;
     token.sales1 = Math.round(datanest[i].value.good);
     token.sales2 = Math.round(datanest[i].value.bad.toFixed(2)*100);
     unitset.push(token);
  
   }


  var chart = AmCharts.makeChart("unitcanvas", {
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
      "id": "v1",
      "title": "Unit Alignment",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return value + "%";
      }
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      //bad unit data display
      "lineColor": "#FA4659",
      "fillColors": "#FA4659",
      "fillAlphas": 1,
      "type": "column",
      "title": "Improper Unit Alignment",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "[[value]]%",
     //format data label
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#7CDFFF",
      "fillColors": "#7CDFFF",
      "fillAlphas": 1,
      "type": "column",
      "title": "Proper Unit Alignment",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": "[[value]]%",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
    }],
    "chartScrollbar": {
      "graph": "g1",
      "oppositeAxis": false,
      "offset": 30,
      "scrollbarHeight": 50,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#AAAAAA"
    },
    "chartCursor": {
      "pan": true,
      //if true, make display cursor alignment
      "valueLineEnabled": false,
      "valueLineBalloonEnabled": false,
      "cursorAlpha": 0,
      "valueLineAlpha": 0.2
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "legend": {
      "useGraphSettings": true,
      "position": "top"
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
     "enabled": true
    },
     "dataProvider": unitset
  });


  }
}

//draw data vis chart for search result on teat cleaniness form
function teatFunction() {

  if (typeof teat_data == 'undefined') {
    //the variable is defined
    //check if teat cleaniness result is null or defined, throw error to user if search is not finished  
    alert("Empty dataset. Please search data!");
  }else{

        var color = Chart.helpers.color;

      //use d3 nest method to prepare and summarize search result 
        var datanest = d3.nest()
          .key(function (d){ return d.Milker;})
          .rollup(function(v){ return {
            total: d3.sum(v, function(d) {return d.clean + d.dip_present + d.small_dirt + d.large_dirt;}),
            percent_3_4: Math.round(d3.sum(v, function (d){ return d.small_dirt + d.large_dirt;}) / d3.sum(v, function(d) {return d.clean + d.dip_present + d.small_dirt + d.large_dirt;}) * 100)
        
          };})
          .entries(teat_data);
        var teatset = [];
          for(var i = 0; i < datanest.length; i ++){
              var token = {};
              token.country = datanest[i].key;
              token.visits = Math.round(datanest[i].value.percent_3_4);
              teatset.push(token);
            }
        var chart = AmCharts.makeChart( "teatcanvas", {
          "type": "serial",
          "theme": "light",
          "dataProvider": teatset,
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0,
            "labelFunction": function(value) {
              return value + "%";
            }
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[title]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "fillColors": "#4176C1",
            "type": "column",
            "title": "3&4 Percent",
            "valueField": "visits",
            "balloonText": "[[title]]<br />[[category]]<br /><b style='font-size: 130%'>[[value]]%</b>"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "country",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }

        } );

    }
  } 

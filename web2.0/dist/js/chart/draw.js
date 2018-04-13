$(document).ready(function() {
  $('#teatDraw').click(teatFunction);
    $('#unitDraw').click(unitFunction);
    $('#udderDraw').click(udderFunction);
    $('#stripDraw').click(stripFunction);
      $('#postDraw').click(postFunction);
      $('#lactoDraw').click(lactoFunction);
});
/*
window.onload = function() {
    var btn1 = document.getElementById("teatDraw")
    btn1.onclick = teatFunction;
  //  var btn2 = document.getElementById("unitDraw")
    //btn2.onclick = unitFunction;
    document.getElementById("unitDraw").onclick=function(){
            alert("Hello WOrld");
        }
    document.getElementById("udderDraw").onclick = udderFunction;
    document.getElementById("stripDraw").onclick = stripFunction;
    document.getElementById("postDraw").onclick = postFunction;
    document.getElementById("lactoDraw").onclick = lactoFunction;

}
*/
function convertToPercent(fraction) {
return (fraction * 100) + '&#37;';
}
function udderFunction() {
  var color = Chart.helpers.color;
    var milker_data = [
        {
            Milker: "Pen1",Date: '03-15-2018',Score1: 15,Score2: 10,Score3: 3,Score4: 10	},
        {
            Milker: "Pen2",Date: '03-15-2018',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
        {
            Milker: "Pen3",Date: '03-15-2018',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
        {
            Milker: "Pen4",Date: '03-15-2018',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
        {
            Milker: "Pen5",Date: '03-15-2018',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
        {
            Milker: "Pen6",Date: '03-15-2018',Score1: 19,Score2: 12,Score3: 1,Score4: 5}
    ];
    var label_data = [];
    var score4set = [];
    var score3set = [];
    var score21set = [];
    //var score1set = [];
    for(var i = 0; i < milker_data.length; i++) {
      var obj = milker_data[i];
      label_data.push(obj.Milker);
      console.log(obj);
      var total = obj.Score1 + obj.Score2 +obj.Score3 +obj.Score4;
      score4set.push(((obj.Score4 + obj.Score3)/total).toFixed(2));
      //score4set.push((obj.Score4/total).toFixed(2));
      score3set.push((obj.Score3/total).toFixed(2));
      score21set.push(((obj.Score2 + obj.Score1)/total).toFixed(2));
      console.log(obj.Socre4/total);
    }
      console.log(label_data);
      console.log(score4set);
        console.log(score3set);
          console.log(score21set);

      var barChartData = {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: label_data,
        datasets: [{
          //show label of dataset1
          label: 'Score 3 & 4 percent',
          backgroundColor: "#4176C1",
          //orange color
          //backgroundColor: "rgb(255, 189, 89)",
          //backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
          borderColor: window.chartColors.white,
          borderWidth: 0,
          //append data of dataset1 a json as a array
          data: score4set
        }
        /*, {
          label: 'Score3 percent',
          backgroundColor: "rgb(216, 105, 192)",
          borderColor: window.chartColors.white,
          borderWidth: 1,
          data: score3set
        }, {
          label: 'Score2 & 1 percent',
          backgroundColor: "rgb(220, 218, 218)",
          borderColor: window.chartColors.white,
          borderWidth: 1,
          data: score21set
        }*/]

      };
    //	console.log(barChartData);

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        title: {
          display: true,
          text: 'Date: YY-MM-DD Score percent by observer'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });

}
function stripFunction() {
  var strip_data = [
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 400, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 400, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 230, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 900, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 200, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 300, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 300, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 300, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0},
      { Date: '03-15-2018', Stall_number: 1, Strip_Yields: 132, Majority: 0},
      { Date: '03-15-2018', Stall_number: 2, Strip_Yields: 234, Majority: 0},
      { Date: '03-15-2018', Stall_number: 3, Strip_Yields: 100, Majority: 0},
      { Date: '03-15-2018', Stall_number: 4, Strip_Yields: 300, Majority: 0},
      { Date: '03-15-2018', Stall_number: 5, Strip_Yields: 700, Majority: 0}];
  var label_data = ["<150 ml", "150 ml-250 ml", ">250 ml"];
  var below = 0; var between = 0; var above = 0;
  for(var i = 0; i < strip_data.length; i++) {
    var obj = strip_data[i];
    if (obj.Strip_Yields < 150){
      below ++;}
    else if(obj.Strip_Yields > 250){
      above ++;}
    else {
      between ++;}
  }
  var categorydata = [];
  var total = below + between + above;
  categorydata.push((below/total).toFixed(2));
  categorydata.push((between/total).toFixed(2));
  categorydata.push((above/total).toFixed(2));

    var barChartData = {
      //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      labels: label_data,
      datasets: [{
        //show label of dataset1
        label: 'Strip Yields',
        backgroundColor: "#4176C1",
        //orange color
        //backgroundColor: "rgb(255, 189, 89)",
        //backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.white,
        borderWidth: 0,
        //append data of dataset1 a json as a array
        data: categorydata
      }]
    }




      var ctx = document.getElementById('canvas').getContext('2d');
    	window.myBar = new Chart(ctx, {
    		type: 'bar',
    		data: barChartData,
    		options: {
    			title: {
    				display: true,
    				text: 'Date: YY-MM-DD Strip Yields Percent'
    			},
    			tooltips: {
    				mode: 'index',
    				intersect: false
    			},
    			responsive: true,
    			scales: {
    				xAxes: [{
    					stacked: true,
    				}],
    				yAxes: [{
    					stacked: true
    				}]
    			}
    		}
    	});

}

function postFunction() {
  var post_data = [
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
              LH: "D",
              LF: "OL",
              RH: "H",
              RF: "D"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
              LH: "VM",
              LF: "SW",
              RH: "VM",
              RF: "SW"
          },
          HaTE: {
              LH: "F",
              LF: "W",
              RH: "F",
              RF: "W"
          },
          TES: {
              LH: "N",
              LF: "S",
              RH: "SR",
              RF: "R"
          }
      }]

}
function lactoFunction() {
  var color = Chart.helpers.color;
	var lacto_data = [
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0456,
          Stall: 1,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 29,
          lt2 : 93,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0110,
          Stall: 1,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 60,
          lt2 : 54,
          lt3 : 28,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 1026,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          lt1: 76,
          lt2 : 84,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0960,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          lt1: 49,
          lt2 : 34,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0126,
          Stall: 1,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 35,
          lt2 : 34,
          lt3 : 33,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 1230,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          lt1: 59,
          lt2 : 85,
          lt3 : 37,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 8821,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          lt1: 43,
          lt2 : 23,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 2024,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 40,
          lt2 : 89,
          lt3 : 45,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0091,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 35,
          lt2 : 83,
          lt3 : 47,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0330,
          Stall: 2,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 39,
          lt2 : 44,
          lt3 : 65,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0035,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 30,
          lt2 : 77,
          lt3 : 41,
					Total_Milk: 200,
					Remark: "N/A"
			},{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0256,
          Stall: 3,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 64,
          lt2 : 43,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 1204,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 32,
          lt2 : 55,
          lt3 : 28,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 5610,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 69,
          lt2 : 44,
          lt3 : 38,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 0604,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 59,
          lt2 : 34,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 3456,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:03:46 AM",
					Attach: "12:05:02 AM",
					Remove: "12:08:17 AM",
          lt1: 59,
          lt2 : 34,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 1256,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:03:50 AM",
					Wipe: "12:04:46 AM",
					Attach: "12:05:02 AM",
					Remove: "12:06:17 AM",
          lt1: 20,
          lt2 : 46,
          lt3 : 68,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 156,
          Stall: 4,
					Dip: "12:02:10 AM",
					Strip: "12:05:50 AM",
					Wipe: "12:06:46 AM",
					Attach: "12:08:02 AM",
					Remove: "12:10:17 AM",
          lt1: 49,
          lt2 : 14,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 996,
          Stall: 5,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 23,
          lt2 : 34,
          lt3 : 78,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
					Cow: 1216,
          Stall: 5,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          lt1: 50,
          lt2 : 54,
          lt3 : 56,
					Total_Milk: 200,
					Remark: "N/A"
			},
			{
					Farm: "Zeus",
					Date: '03-15-2018',
					Parlor_Type: "Mega",
					Pre_milking: "True",
					Herd_Size: 10,
					Size: 5,
					Procedures: "Normal",
					Milking_Frequency: "2",
					No_Operations: 20,
					Prep: "False",
          Stall : 5,
					Cow: 459,
          Stall: 5,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 45,
          lt2 : 44,
          lt3 : 98,
					Total_Milk: 200,
					Remark: "N/A"
			}
	];
//  dip_contact_time time,
//lag_contact_stimulate time,
//unit_on_time integer,

	function caldiff(ary1, ary2){
		var minsdiff=parseInt(ary2[0],10)*60+parseInt(ary2[1],10)*60+parseInt(ary2[2],10)-parseInt(ary1[0],10)*60-parseInt(ary1[1],10)*60-parseInt(ary1[2],10);
		return minsdiff;
	}
  var stallset = [];

  function isExist(st){
    var stallExists = -1;
    for (var i = 0; i < stallset.length;) {
      if (stallset[i].stl == st) {
          stallExists = i;

        }
        i++;
    }
    console.log(stallExists);
    return stallExists;
  }
  for(var i = 0; i < lacto_data.length; i++) {
    var newindex = 0;
    var obj = lacto_data[i];
    console.log(obj.Stall);
    var findindex = isExist(obj.Stall);
    console.log(findindex)
    if(findindex >= 0){
        var token = obj[findindex];

        stallset[findindex].total1 += obj.lt1;
        stallset[findindex].total2 += obj.lt2;
        stallset[findindex].total3 += obj.lt3;
        stallset[findindex].count += 1;
        stallset[findindex].min1 = Math.min(obj.lt1,stallset[findindex].min1);
        stallset[findindex].min2 = Math.min(obj.lt2,stallset[findindex].min2);
        stallset[findindex].min3 = Math.min(obj.lt3,stallset[findindex].min2);
        stallset[findindex].max1 = Math.max(obj.lt1,stallset[findindex].max1);
        stallset[findindex].max2 = Math.max(obj.lt2,stallset[findindex].max2);
        stallset[findindex].max3 = Math.max(obj.lt3,stallset[findindex].max3);


    }
    else{
      var make = {};
      make.stl = obj.Stall;
      make.total1 = obj.lt1;
      make.total2 = obj.lt2;
      make.total3 = obj.lt3;
      make.min1 = obj.lt1;
      make.min2 = obj.lt2;
      make.min3 = obj.lt3;
      make.max1 = obj.lt1;
      make.max2 = obj.lt2;
      make.max3 = obj.lt3;
      make.count = 1;
      stallset.push(make);
      console.log(stallset);
      /*
      stallset[newindex].stl = obj.stall;
      stallset[newindex].total1 = obj.lt1;
      stallset[newindex].total2 = obj.lt2;
      stallset[newindex].total3 = obj.lt3;
      stallset[newindex].min1 = obj.lt1;
      stallset[newindex].min2 = obj.lt2;
      stallset[newindex].min3 = obj.lt3;
      stallset[newindex].max1 = obj.lt1;
      stallset[newindex].max2 = obj.lt2;
      stallset[newindex].max3 = obj.lt3;
      stallset[newindex].count = 1;
      */
      newindex ++;
    }
  }
  console.log(stallset);
    var sort1 = [];
/*
		var label_data = ["Dip contact time - Min","Dip contact time - Avg","Dip contact time - Max",
  "Lag time - Min", "Lag time - Avg","Lag time - Max", "Unit on time - Min",
"Unit on time - Avg","Unit on time - Max"];
*/
var label_data = [];
    //min dataset
		var set11 = [];
    var set12 = [];
    var set13 = [];
    //average
		var set21 = [];
    var set22 = [];
    var set23 = [];
    //max
		var set31 = [];
    var set32 = [];
    var set33 = [];
		//var set4 = [];
		//var score1set = [];

		for(var i = 0; i < stallset.length; i++) {
	    var obj = stallset[i];
      console.log(obj);
      console.log(obj.stl);
      var stallname = "stall" + obj.stl;
			label_data.push(stallname);
      set11.push(obj.min1);
      set12.push(obj.min2);
      set13.push(obj.min3);

      set21.push(obj.total1/obj.count);
      set22.push(obj.total2/obj.count);
      set23.push(obj.total2/obj.count);

      set31.push(obj.max1);
      set32.push(obj.max2);
      set33.push(obj.max3);

      /*
			var tim1=obj.Dip.replace(" AM","");
			var tim2=obj.Strip.replace(" AM","");
			var tim3=obj.Wipe.replace(" AM","");
			var tim4=obj.Attach.replace(" AM","");
			var tim5=obj.Remove.replace(" AM","");
			var ary1=tim1.split(':'),
			ary2=tim2.split(':'),
			ary3=tim3.split(':'),
			ary4=tim4.split(':'),
			ary5=tim5.split(':');
			console.log(ary1);
			console.log(ary2);
			set1.push(caldiff(ary1, ary2));
			set2.push(caldiff(ary2, ary3));
			set3.push(caldiff(ary3, ary4));
			set4.push(caldiff(ary4, ary5));
*/
		}

for(var i = 0; i < lacto_data.length; i++) {
  var obj = lacto_data[i];

}
			console.log(label_data);

      /*
      		var label_data = ["Dip contact time - Min","Dip contact time - Avg","Dip contact time - Max",
        "Lag time - Min", "Lag time - Avg","Lag time - Max", "Unit on time - Min",
      "Unit on time - Avg","Unit on time - Max"];
      */
		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: label_data,
			datasets: [{
				label: 'Dip contact time - Min',
				backgroundColor: "#ffffb3",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set11
			}, {
				label: 'Dip contact time - Avg',
			backgroundColor: "#ffe082",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set21
			}, {
				label: 'Dip contact time - Max',
				backgroundColor: "#caae53",
				borderColor: window.chartColors.yellow,
				borderWidth: 0,
				data: set31
			}, {
				label: 'Lag time - Min',
				backgroundColor: "#c3fdff",
				borderColor: window.chartColors.purple,
				borderWidth: 0,
				data: set12
			}, {
				label: 'Lag time - Avg',
			backgroundColor: "#90caf9",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set22
			}, {
				label: 'Lag time - Max',
				backgroundColor: "#5d99c6",
				borderColor: window.chartColors.yellow,
				borderWidth: 0,
				data: set32
			}, {
				label: 'Unit on time - Min',
				backgroundColor: "#ffddc1",
				borderColor: window.chartColors.purple,
				borderWidth: 0,
				data: set13
			}, {
				label: 'Unit on time - Avg',
			backgroundColor: "#ffab91",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set23
			}, {
				label: 'Unit on time - Max',
				backgroundColor: "#c97b63",
				borderColor: window.chartColors.purple,
				borderWidth: 0,
				data: set33
			}
		]

		};

			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Bar Chart'
					}
				}
			});

}
function unitFunction() {
  var color = Chart.helpers.color;
	var unit_data = [
			{
					Date: '03-15-2018',
					Observer: 'Jone',
					Farm: 'Glezon',
					Good: 132,
					Bad: 21
			},
      {
          Date: '03-15-2018',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '03-16-2018',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
			{
					Date: '03-17-2018',
					Observer: 'Irine',
					Farm: 'Glezon',
					Good: 65,
					Bad: 10
			},
			{
					Date: '03-17-2018',
					Observer: 'Zeiger',
					Farm: 'Glezon',
					Good: 90,
					Bad: 36
			}];
	var label_data = [];
	var goodset = [];
	var badset = [];
	var totalbad = 0;
	var totalgood = 0;
	for(var i = 0; i < unit_data.length - 1; i++) {
    var obj = unit_data[i];
    if(unit_data[i] == unit_data[i+1]) {
      totalgood += obj.Good;
  		totalbad += obj.Bad;
    }
    else {
      totalgood += obj.Good;
      totalbad += obj.Bad;
      label_data.push(obj.Date);
    //  goodset.push(obj.Good);
      goodset.push((totalgood/(totalgood + totalbad)).toFixed(2))
      badset.push((totalbad/(totalgood + totalbad)).toFixed(2))
  	//	badset.push(obj.Bad);
    }
    if (i == unit_data.length - 2 && unit_data[i] == unit_data[i+1]){
      totalgood += obj.Good;
      totalbad += obj.Bad;
      label_data.push(obj.Date);
      goodset.push((totalgood/(totalgood + totalbad)).toFixed(2));
      badset.push((totalbad/(totalgood + totalbad)).toFixed(2));
    }
    else{
      label_data.push(obj.Date);
      goodset.push((totalgood/(totalgood + totalbad)).toFixed(2));
      badset.push((totalbad/(totalgood + totalbad)).toFixed(2));
      var nextobj = unit_data[i+1];
      totalgood = nextobj.Good;
      totalbad = nextobj.Bad;
      label_data.push(obj.Date);
      goodset.push((totalgood/(totalgood + totalbad)).toFixed(2));
      badset.push((totalbad/(totalgood + totalbad)).toFixed(2));
    }

	}


		var barChartData = {
			//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			labels: label_data,
			datasets: [{
				//show label of dataset1
				label: 'Proper Unit Alignment',
         backgroundColor: "#7CDFFF",
      //  backgroundColor: "#C6F1E7",
			//	backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
			//	borderColor: window.chartColors.blue,
				borderWidth: 0,
				//append data of dataset1 a json as a array
				data: goodset
			}, {
				label: 'Improper Unit Alignment',
        //  backgroundColor: "rgb(114,147,203)",
         backgroundColor: "#FA4659",
			//	backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
			//	backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 0,
				data: badset
			}]

		};

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        title: {
          display: true,
          text: 'Date: YY-MM-DD Good/Bad Unit Alignment percent by observer'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
}


function teatFunction() {

  var color = Chart.helpers.color;
  	var teat_data = [
      {
          Milker: "Aphrodite",Date: '03-15-2018',Score1: 15,Score2: 10,Score3: 3,Score4: 10	},
      {
          Milker: "Apollo",Date: '03-15-2018',Score1: 11,Score2: 10,Score3: 8,Score4: 6},
      {
          Milker: "Ares",Date: '03-15-2018',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
      {
          Milker: "Artemis",Date: '03-15-2018',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
      {
          Milker: "Athena",Date: '03-15-2018',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
      {
          Milker: "Zeus",Date: '03-15-2018',Score1: 19,Score2: 12,Score3: 1,Score4: 5}
  	];
  	var label_data = [];
  	var score4set = [];
  	var score3set = [];
  	var score21set = [];
  	//var score1set = [];
  	for(var i = 0; i < teat_data.length; i++) {
      var obj = teat_data[i];
  		label_data.push(obj.Milker);
      console.log(obj);
  		var total = obj.Score1 + obj.Score2 +obj.Score3 +obj.Score4;
      score4set.push(((obj.Score4 + obj.Score3)/total).toFixed(2));
  		//score4set.push((obj.Score4/total).toFixed(2));
  		score3set.push((obj.Score3/total).toFixed(2));
  		score21set.push(((obj.Score2 + obj.Score1)/total).toFixed(2));
  		console.log(obj.Socre4/total);
  	}
  		console.log(label_data);
  		console.log(score4set);
  			console.log(score3set);
  				console.log(score21set);

  		var barChartData = {
  			//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  			labels: label_data,
  			datasets: [{
  				//show label of dataset1
  				label: 'Score4 percent',
          backgroundColor: "#4176C1",
          //backgroundColor: "rgb(255, 189, 89)",
  				//backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
  				borderColor: window.chartColors.white,
  				borderWidth: 0,
  				//append data of dataset1 a json as a array
  				data: score4set
  			}

        /*, {
  				label: 'Score3 percent',
  				backgroundColor: "rgb(216, 105, 192)",
  				borderColor: "rgb(216, 105, 192)",
  				borderWidth: 1,
  				data: score3set
  			}, {
  				label: 'Score2 & 1 percent',
  				backgroundColor: "rgb(220, 218, 218)",
  				borderColor: window.chartColors.white,
  				borderWidth: 1,
  				data: score21set
  			}*/
      ]

  		};
  	//	console.log(barChartData);

  	var ctx = document.getElementById('canvas').getContext('2d');
  	window.myBar = new Chart(ctx, {
  		type: 'bar',
  		data: barChartData,
  		options: {
  			title: {
  				display: true,
  				text: 'Date: YY-MM-DD Score percent by observer'
  			},
  			tooltips: {
  				mode: 'index',
  				intersect: false
  			},
  			responsive: true,
  			scales: {
  				xAxes: [{
  					stacked: true,
  				}],
  				yAxes: [{
  					stacked: true
  				}]
  			}
  		}
  	});

}

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
					Cow: 0110,
          Stall: 1,
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
					Cow: 1026,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
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
					Cow: 0960,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
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
					Cow: 0126,
          Stall: 1,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
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
					Cow: 1230,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
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
					Cow: 8821,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
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
					Cow: 2024,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
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
					Cow: 0091,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
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
					Cow: 0330,
          Stall: 2,
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
					Cow: 0035,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 59,
          lt2 : 34,
          lt3 : 78,
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
					Cow: 1204,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
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
					Cow: 5610,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
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
					Cow: 0604,
          Stall: 3,
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
					Cow: 156,
          Stall: 4,
					Dip: "12:02:10 AM",
					Strip: "12:05:50 AM",
					Wipe: "12:06:46 AM",
					Attach: "12:08:02 AM",
					Remove: "12:10:17 AM",
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
					Cow: 996,
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
					Cow: 1216,
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
          Stall : 5,
					Cow: 459,
          Stall: 5,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          lt1: 59,
          lt2 : 34,
          lt3 : 78,
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
  var ary = [];

  function isExist(ary, subary){

  }
  	for(var i = 0; i < lacto_data.length; i++) {

    }
    var sort1 = [];

		var label_data = ["Min","Max","Average"];
		var set1 = [];
		var set2 = [];
		var set3 = [];
		var set4 = [];
		//var score1set = [];
    /*
		for(var i = 0; i < lacto_data.length; i++) {
	    var obj = lacto_data[i];
			label_data.push(obj.Cow);
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

		}
*/
for(var i = 0; i < lacto_data.length; i++) {
  var obj = lacto_data[i];
  label_data.push(obj.Cow);
}
			console.log(label_data);


		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: label_data,
			datasets: [{
				label: 'Dip - Strip',
				backgroundColor: "#EF255F",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set1
			}, {
				label: 'Strip - Wipe',
			backgroundColor: "#FCCF4D",
				borderColor: window.chartColors.white,
				borderWidth: 0,
				data: set2
			}, {
				label: 'Wipe - Attach',
				backgroundColor: "#49BEB7",
				borderColor: window.chartColors.yellow,
				borderWidth: 0,
				data: set3
			}, {
				label: 'Attach - Remove',
				backgroundColor: "#085F63",
				borderColor: window.chartColors.purple,
				borderWidth: 0,
				data: set4
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

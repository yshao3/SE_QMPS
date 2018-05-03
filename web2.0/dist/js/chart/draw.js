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
    document.getElementById("udderDraw").onclick = udderFunction;
}
*/
var formatComma = d3.format(",");
// function convertToPercent(fraction) {
// return (fraction * 100) + '&#37;';
// }
function udderFunction() {
  var udder_data = [
  		{
  				Milker: "Pen1",Date: '2018-03-15',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
  		{
  				Milker: "Pen1",Date: '2018-03-15',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
  		{
  				Milker: "Pen2",Date: '2018-03-15',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
  		{
  				Milker: "Pen3",Date: '2018-03-15',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
  		{
  				Milker: "Pen4",Date: '2018-03-15',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
  		{
  				Milker: "Pen5",Date: '2018-03-15',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
  		{
  				Milker: "Pen1",Date: '2018-03-16',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
  		{
  				Milker: "Pen1",Date: '2018-03-16',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
  		{
  				Milker: "Pen2",Date: '2018-03-16',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
  		{
  				Milker: "Pen3",Date: '2018-03-16',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
  		{
  				Milker: "Pen4",Date: '2018-03-16',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
  		{
  				Milker: "Pen5",Date: '2018-03-16',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
			{
					Milker: "Pen1",Date: '2018-03-17',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen2",Date: '2018-03-17',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen3",Date: '2018-03-17',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
			{
					Milker: "Pen4",Date: '2018-03-17',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
			{
					Milker: "Pen5",Date: '2018-03-17',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
			{
					Milker: "Pen5",Date: '2018-03-18',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
			{
					Milker: "Pen1",Date: '2018-03-18',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen2",Date: '2018-03-18',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen3",Date: '2018-03-18',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
			{
					Milker: "Pen4",Date: '2018-03-18',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
			{
					Milker: "Pen5",Date: '2018-03-19',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
			{
			    Milker: "Pen6",Date: '2018-03-19',Score1: 19,Score2: 12,Score3: 1,Score4: 5},
			{
					Milker: "Pen1",Date: '2018-03-22',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen2",Date: '2018-03-22',Score1: 15,Score2: 10,Score3: 3,Score4: 10},
			{
					Milker: "Pen3",Date: '2018-03-26',Score1: 11,Score2: 10,Score3: 11,Score4: 6},
			{
					Milker: "Pen4",Date: '2018-03-30',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
			{
					Milker: "Pen5",Date: '2018-04-05',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
			{
					Milker: "Pen2",Date: '2018-04-19',Score1: 19,Score2: 12,Score3: 1,Score4: 5}
  ];
  //var formatComma = d3.format(",");
  var datanest = d3.nest()
  		.key(function (d){ return d.Date;})
  		.rollup(function(v){ return {
  				total: d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
  				percent_3_4: formatComma(
            (d3.sum(v, function (d){ return d.Score3 + d.Score4;}) /
            d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}))*100)

  		};})
  		.entries(udder_data);
  var udderset = [];
  		for(var i = 0; i < datanest.length; i ++){
  		  console.log(i);
  		   var token = {};
  		   token.date = datanest[i].key;
  		   token.visits = Math.round(datanest[i].value.percent_3_4);
  		   udderset.push(token);
  		   console.log(token);
  		 }
   var datanest2 = d3.nest()
   		.key(function (d){ return d.Milker;})
   		.rollup(function(v){ return {
   				total: d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
   				percent_3_4: formatComma( (d3.sum(v, function (d){ return d.Score3 + d.Score4;}) / d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}))*100)
   				//percent_4: d3.sum(v, function (d){ return d.Score4;}) / d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
   		};})
   		.entries(udder_data);
   var udderset2 = [];
   		for(var i = 0; i < datanest2.length; i ++){
   			 var token = {};
   			 token.country = datanest2[i].key;
   			 token.visits = Math.round(datanest2[i].value.percent_3_4);
   			 //token.sales2 = Math.round(datanest[i].value.bad.toFixed(2)*100);
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
          "bulletColor": "#FFFFFF",
          "hideBulletsCount": 50,
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

  		// var parseDate = d3.timeFormat("%Y-%m-%d").parse;
  		// var d = parseDate('2018-03-14');

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
function stripFunction() {
  var strip_data = [
  		{ Date: '2018-01-10', Stall_number: 1, Strip_Yields: 132, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-01-10', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-01-10', Stall_number: 3, Strip_Yields: 300, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-01-13', Stall_number: 4, Strip_Yields: 400, balance: "balanced",  Majority: 0},
  		{ Date: '2018-01-13', Stall_number: 5, Strip_Yields: 700, balance: "balanced", Majority: 0},
  		{ Date: '2018-01-13', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-01-13', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-01-28', Stall_number: 3, Strip_Yields: 100, balance: "balanced", Majority: 0},
  		{ Date: '2018-01-28', Stall_number: 4, Strip_Yields: 200, balance: "balanced",  Majority: 0},
  		{ Date: '2018-01-28', Stall_number: 5, Strip_Yields: 400, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-07', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-07', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-07', Stall_number: 3, Strip_Yields: 220, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-02-07', Stall_number: 4, Strip_Yields: 330, balance: "balanced",  Majority: 0},
  		{ Date: '2018-02-07', Stall_number: 5, Strip_Yields: 600, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-20', Stall_number: 1, Strip_Yields: 102, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-20', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-20', Stall_number: 3, Strip_Yields: 240, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-02-20', Stall_number: 4, Strip_Yields: 190, balance: "balanced",  Majority: 0},
  		{ Date: '2018-02-20', Stall_number: 5, Strip_Yields: 500, balance: "balanced", Majority: 0},
  		{ Date: '2018-02-25', Stall_number: 1, Strip_Yields: 432, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-02-25', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 3, Strip_Yields: 100, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 4, Strip_Yields: 180, balance: "isbalanced",  Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 5, Strip_Yields: 700, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 1, Strip_Yields: 152, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 3, Strip_Yields: 100, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 4, Strip_Yields: 400, balance: "balanced",  Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 5, Strip_Yields: 700, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-03', Stall_number: 3, Strip_Yields: 220, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-03-06', Stall_number: 5, Strip_Yields: 500, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-06', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-06', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-06', Stall_number: 3, Strip_Yields: 100, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-03-07', Stall_number: 4, Strip_Yields: 200, balance: "isbalanced",  Majority: 0},
  		{ Date: '2018-03-07', Stall_number: 5, Strip_Yields: 700, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-07', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-07', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-03-07', Stall_number: 3, Strip_Yields: 300, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-04-01', Stall_number: 4, Strip_Yields: 400, balance: "isbalanced",  Majority: 0},
  		{ Date: '2018-04-01', Stall_number: 5, Strip_Yields: 240, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-01', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-01', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-10', Stall_number: 3, Strip_Yields: 100, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-04-10', Stall_number: 4, Strip_Yields: 400, balance: "balanced",  Majority: 0},
  		{ Date: '2018-04-10', Stall_number: 5, Strip_Yields: 700, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-15', Stall_number: 1, Strip_Yields: 132, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-15', Stall_number: 2, Strip_Yields: 234, balance: "balanced", Majority: 0},
  		{ Date: '2018-04-15', Stall_number: 3, Strip_Yields: 200, balance: "isbalanced", Majority: 0},
  		{ Date: '2018-04-15', Stall_number: 4, Strip_Yields: 210, balance: "isbalanced",  Majority: 0},
  		{ Date: '2018-04-15', Stall_number: 5, Strip_Yields: 700, balance: "isbalanced", Majority: 0}];
  var label_data = ["<150 ml", "150 ml-250 ml", ">250 ml"];
  //var formatComma = d3.format(",");
  var datanest = d3.nest().key(function(d) { return d.Date; })
  .rollup(function(v){ return {
  		total: d3.sum(v, function(d) {return d.Strip_Yields;}),
  		average: d3.mean(v, function(d) {return d.Strip_Yields;}),
  		//smaller_150: d3.sum(v, function (d){ return (d.Strip_Yields < 150);}),
  		smaller_150: d3.sum(v, function (d){ return (d.Strip_Yields < 150);}) / d3.sum(v, function(d) {return (d.Strip_Yields >= 0);}),
  		between: d3.sum(v, function (d){ return (d.Strip_Yields >= 150 & d.Strip_Yields <= 250);}) / d3.sum(v, function(d) {return (d.Strip_Yields >= 0);}),
  		larger_250: d3.sum(v, function (d){ return (d.Strip_Yields > 250);}) / d3.sum(v, function(d) {return (d.Strip_Yields >= 0);}),
  		//percent_4: d3.sum(v, function (d){ return d.Score4;}) / d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
  };})
  .entries(strip_data);
  console.log(datanest);
  var stripset = [];
  for(var i = 0; i < datanest.length; i ++){
    console.log(i);
     var token = {};
     token.date = datanest[i].key;
     token.visits = Math.round((datanest[i].value.smaller_150)* 100);
  	 token.hits = Math.round((datanest[i].value.between)* 100);
     token.views = Math.round((datanest[i].value.larger_250)*100);
     stripset.push(token);
     console.log(token);
   }
   console.log(stripset);


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
          "hideBulletsCount": 30,
          "title": "<150 ml",
          "valueField": "visits",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//浮标label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }, {
          "valueAxis": "v1",
          "lineColor": "#FCD202",
          "bullet": "square",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "150 ml-250 ml",
          "valueField": "hits",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//浮标label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }, {
          "valueAxis": "v1",
          "lineColor": "#B0DE09",
          "bullet": "triangleUp",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": ">250 ml",
          "valueField": "views",
  		"fillAlphas": 0,
  		"legendValueText": "[[value]]%",
  		//浮标label
  		"balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
      }],
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


  // generate some random data, quite different range
  function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);

          var visits = 1600;
          var hits = 2900;
          var views = 8700;


      for (var i = 0; i < 100; i++) {
          // we create date objects here. In your data, you can have date strings
          // and then set format of your dates using chart.dataDateFormat property,
          // however when possible, use date objects, as this will speed up chart rendering.
          var newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);

          visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

          chartData.push({
              date: newDate,
              visits: visits,
              hits: hits,
              views: views
          });
      }
      return chartData;
  }

  function zoomChart(){
      chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
  }

}

function postFunction() {
  var post_data = [
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-15-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
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
          Date: '03-17-2018',
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
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "F",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "SR",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "F",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },{
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-17-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-21-2018',
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
          Date: '03-25-2018',
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
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          }
      },
      {
          Group: 1,
          Line: 1,
          Farm_Name: "Zeus",
          Date: '03-28-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
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
          Date: '03-30-2018',
          TSC: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TC: {
              LH: "R",
              LF: "DS",
              RH: "B",
              RF: "R"
          },
          SNTB: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          HaTE: {
            LH: "N",
            LF: "N",
            RH: "N",
            RF: "N"
          },
          TES: {
              LH: "N",
              LF: "N",
              RH: "N",
              RF: "N"
          }
      }];
      var datanest = d3.nest()
                .key(function (d){ return d.Date;})
                .rollup(function(v){ return {
                    Total_Scored: d3.sum(v, function(d) {return d.Group;}),
                    Total_TSC_Abnormal: d3.sum(v, function(d){return d.TSC.LH != 'N' || d.TSC.LF != 'N' || d.TSC.RH != 'N' || d.TSC.RF != 'N'}),
                    Total_TC_Abnormal: d3.sum(v, function(d){return d.TC.LH != 'N' || d.TC.LF != 'N' || d.TC.RH != 'N' || d.TC.RF != 'N'}),
                    Total_SNTB_Abnormal: d3.sum(v, function(d){return d.SNTB.LH != 'N' || d.SNTB.LF != 'N' || d.SNTB.RH != 'N' || d.SNTB.RF != 'N'}),
                    Total_HaTE_Abnormal: d3.sum(v, function(d){return d.HaTE.LH != 'N' || d.HaTE.LF != 'N' || d.HaTE.RH != 'N' || d.HaTE.RF != 'N'}),
                    Total_TES_Abnormal: d3.sum(v, function(d){return d.TES.LH != 'N' || d.TES.LF != 'N' || d.TES.RH != 'N' || d.TES.RF != 'N'}),
                    Total_Open_Leison: d3.sum(v, function(d){return d.TSC.LH == 'OL' || d.TSC.LF == 'OL' || d.TSC.RH == 'OL' || d.TSC.RF == 'OL'}),
                    Total_Hemorrhage: d3.sum(v, function(d){return d.TSC.LH == 'H' || d.TSC.LF == 'H' || d.TSC.RH == 'H' || d.TSC.RF == 'H'}),
                    Percent_TSC_Abnormal: d3.sum(v, function(d){return (d.TSC.LH != 'N' || d.TSC.LF != 'N' || d.TSC.RH != 'N' || d.TSC.RF != 'N') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_TC_Abnormal: d3.sum(v, function(d){return (d.TC.LH != 'N' || d.TC.LF != 'N' || d.TC.RH != 'N' || d.TC.RF != 'N') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_SNTB_Abnormal: d3.sum(v, function(d){return (d.SNTB.LH != 'N' || d.SNTB.LF != 'N' || d.SNTB.RH != 'N' || d.SNTB.RF != 'N') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_HaTE_Abnormal: d3.sum(v, function(d){return (d.HaTE.LH != 'N' || d.HaTE.LF != 'N' || d.HaTE.RH != 'N' || d.HaTE.RF != 'N') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_TES_Abnormal: d3.sum(v, function(d){return (d.TES.LH != 'N' || d.TES.LF != 'N' || d.TES.RH != 'N' || d.TES.RF != 'N') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_Open_Leison: d3.sum(v, function(d){return (d.TSC.LH == 'OL' || d.TSC.LF == 'OL' || d.TSC.RH == 'OL' || d.TSC.RF == 'OL') / d3.sum(v, function(d) {return d.Group;}) }),
                    Percent_Hemorrhage: d3.sum(v, function(d){return (d.TSC.LH == 'H' || d.TSC.LF == 'H' || d.TSC.RH == 'H' || d.TSC.RF == 'H') / d3.sum(v, function(d) {return d.Group;})})
                    // percent_good: d3.sum(v, function (d){ return d.Good;}) / d3.sum(v, function(d) {return d.Good + d.Bad;}),
                    // percent_bad: d3.sum(v, function (d){ return d.Bad;}) / d3.sum(v, function(d) {return d.Good + d.Bad;}),
                };})
                .entries(post_data);
            var postset = [];
            for(var i = 0; i < datanest.length; i ++){
              console.log(i);
               var token = {};
               token.date = datanest[i].key;
               token.tsc = Math.round((datanest[i].value.Percent_TSC_Abnormal)* 100);
               token.tc = Math.round((datanest[i].value.Percent_TC_Abnormal)* 100);
               token.sntb = Math.round((datanest[i].value.Percent_SNTB_Abnormal)* 100);
               token.hate = Math.round((datanest[i].value.Percent_HaTE_Abnormal)* 100);
               token.tes = Math.round((datanest[i].value.Percent_TES_Abnormal)* 100);
               token.ol = Math.round((datanest[i].value.Percent_Open_Leison)* 100);

               token.h = Math.round((datanest[i].value.Percent_Hemorrhage)* 100);

               postset.push(token);
               console.log(token);
             }
             console.log(postset);
//predefined bullets (our charts support round, square, triangle, bubble, diamond bullet shapes)
//var cc = [#6F6456, #CDDC49, #CB7E94, #E94B30, #FEE659, #A1CFDD, #7F3B9B, #3ea900];
var cc = ["#555E7B", "#B7D968", "#B576AD", "#E04644", "#FDE47F", "#7CCCE5", "#6237B2", "#30A300"];
                var chart = AmCharts.makeChart("postcanvas", {
                    "type": "serial",
                    "theme": "light",
                    "legend": {
                        "useGraphSettings": true
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
                      //变量1 TSC
                        "valueAxis": "v1",
                        //"lineColor": "#FF6600",
                        "lineColor": cc[0],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Teat Skin Condition",
                        "valueField": "tsc",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }, {
                      //TC
                        "valueAxis": "v1",
                        //"lineColor": "#FCD202",
                        "lineColor": cc[1],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Teat Color",
                        "valueField": "tc",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }, {
                      //SNTB3
                        "valueAxis": "v1",
                        //"lineColor": "#B0DE09",
                        "lineColor": cc[2],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Swelling Near Teat Base",
                        "valueField": "sntb",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //HATE4
                        "valueAxis": "v1",
                        //"lineColor": "#6F6456",
                        "lineColor": cc[3],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Hardness at Teat End",
                        "valueField": "hate",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //TES5
                        "valueAxis": "v1",
                        //"lineColor": "#CB7E94",
                        "lineColor": cc[4],
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Teat End Score",
                        "valueField": "tes",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //OL
                        "valueAxis": "v1",
                        //"lineColor": "#A1CFDD",
                        "lineColor": cc[5],
                        "bullet": "square",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Open Lesion",
                        "valueField": "ol",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    },{
                      //H
                        "valueAxis": "v1",
                        //"lineColor": "#3ea900",
                        "lineColor": cc[6],
                        "bullet": "triangleUp",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "Hemorrhage",
                        "valueField": "h",
                    "fillAlphas": 0,
                    "legendValueText": "[[value]]%",
                    //浮标label
                    "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
                    }],
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


                // generate some random data, quite different range
                function generateChartData() {
                    var chartData = [];
                    var firstDate = new Date();
                    firstDate.setDate(firstDate.getDate() - 100);

                        var visits = 1600;
                        var hits = 2900;
                        var views = 8700;


                    for (var i = 0; i < 100; i++) {
                        // we create date objects here. In your data, you can have date strings
                        // and then set format of your dates using chart.dataDateFormat property,
                        // however when possible, use date objects, as this will speed up chart rendering.
                        var newDate = new Date(firstDate);
                        newDate.setDate(newDate.getDate() + i);

                        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                        chartData.push({
                            date: newDate,
                            visits: visits,
                            hits: hits,
                            views: views
                        });
                    }
                    return chartData;
                }

                function zoomChart(){
                    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
                }




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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0456,
          Stall: 1,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 29,
          Lag_Time : 93,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0110,
          Stall: 1,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 60,
          Lag_Time : 54,
          Unit_Time : 28,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 1026,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          Dip_time: 76,
          Lag_Time : 84,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0960,
          Stall: 1,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          Dip_time: 49,
          Lag_Time : 34,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0126,
          Stall: 1,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 35,
          Lag_Time : 34,
          Unit_Time : 33,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 1230,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          Dip_time: 59,
          Lag_Time : 85,
          Unit_Time : 37,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 8821,
          Stall: 2,
					Dip: "12:01:30 AM",
					Strip: "12:03:15 AM",
					Wipe: "12:04:33 AM",
					Attach: "12:06:40 AM",
					Remove: "12:08:15 AM",
          Dip_time: 43,
          Lag_Time : 23,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 2024,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 40,
          Lag_Time : 89,
          Unit_Time : 45,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0091,
          Stall: 2,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 35,
          Lag_Time : 83,
          Unit_Time : 47,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0330,
          Stall: 2,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 39,
          Lag_Time : 44,
          Unit_Time : 65,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0035,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 30,
          Lag_Time : 77,
          Unit_Time : 41,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0256,
          Stall: 3,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 64,
          Lag_Time : 43,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 1204,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 32,
          Lag_Time : 55,
          Unit_Time : 28,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 5610,
          Stall: 3,
					Dip: "12:00:00 AM",
					Strip: "12:00:39 AM",
					Wipe: "12:01:05 AM",
					Attach: "12:01:52 AM",
					Remove: "12:03:00 AM",
          Dip_time: 69,
          Lag_Time : 44,
          Unit_Time : 38,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 0604,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 59,
          Lag_Time : 34,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 3456,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:03:46 AM",
					Attach: "12:05:02 AM",
					Remove: "12:08:17 AM",
          Dip_time: 59,
          Lag_Time : 34,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 1256,
          Stall: 4,
					Dip: "12:00:10 AM",
					Strip: "12:03:50 AM",
					Wipe: "12:04:46 AM",
					Attach: "12:05:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 20,
          Lag_Time : 46,
          Unit_Time : 68,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 156,
          Stall: 4,
					Dip: "12:02:10 AM",
					Strip: "12:05:50 AM",
					Wipe: "12:06:46 AM",
					Attach: "12:08:02 AM",
					Remove: "12:10:17 AM",
          Dip_time: 49,
          Lag_Time : 14,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 996,
          Stall: 5,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 23,
          Lag_Time : 34,
          Unit_Time : 78,
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
					Milking_Frequency: "2X",
					No_Operations: 20,
					Prep: "False",
					Cow: 1216,
          Stall: 5,
					Dip: "12:00:10 AM",
					Strip: "12:01:50 AM",
					Wipe: "12:02:46 AM",
					Attach: "12:04:02 AM",
					Remove: "12:06:17 AM",
          Dip_time: 50,
          Lag_Time : 54,
          Unit_Time : 56,
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
					Milking_Frequency: "2X",
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
          Dip_time: 45,
          Lag_Time : 44,
          Unit_Time : 98,
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

        stallset[findindex].total1 += obj.Dip_time;
        stallset[findindex].total2 += obj.Lag_Time;
        stallset[findindex].total3 += obj.Unit_Time;
        stallset[findindex].count += 1;
        stallset[findindex].min1 = Math.min(obj.Dip_time,stallset[findindex].min1);
        stallset[findindex].min2 = Math.min(obj.Lag_Time,stallset[findindex].min2);
        stallset[findindex].min3 = Math.min(obj.Unit_Time,stallset[findindex].min2);
        stallset[findindex].max1 = Math.max(obj.Dip_time,stallset[findindex].max1);
        stallset[findindex].max2 = Math.max(obj.Lag_Time,stallset[findindex].max2);
        stallset[findindex].max3 = Math.max(obj.Unit_Time,stallset[findindex].max3);


    }
    else{
      var make = {};
      make.stl = obj.Stall;
      make.total1 = obj.Dip_time;
      make.total2 = obj.Lag_Time;
      make.total3 = obj.Unit_Time;
      make.min1 = obj.Dip_time;
      make.min2 = obj.Lag_Time;
      make.min3 = obj.Unit_Time;
      make.max1 = obj.Dip_time;
      make.max2 = obj.Lag_Time;
      make.max3 = obj.Unit_Time;
      make.count = 1;
      stallset.push(make);
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

		}

for(var i = 0; i < lacto_data.length; i++) {
  var obj = lacto_data[i];

}
			console.log(label_data);
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
  var unit_data = [
    {
        Date: '2017-11-31',
        Observer: 'Jone',
        Farm: 'Glezon',
        Good: 132,
        Bad: 21
    },
    {
        Date: '2017-12-04',
        Observer: 'Alex',
        Farm: 'Glezon',
        Good: 99,
        Bad: 31
    },
    {
        Date: '2017-12-16',
        Observer: 'Gina',
        Farm: 'Glezon',
        Good: 70,
        Bad: 35
    },
      {
          Date: '2017-12-22',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-01-15',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-02-02',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-05',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-02-06',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-07',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-02-08',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-09',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-02-10',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-13',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-02-15',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-16',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-02-19',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-02-25',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-03-01',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-03-05',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-03-06',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-03-15',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-03-16',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-03-17',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-04-10',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-04-21',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-04-22',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-04-23',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-04-24',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-04-25',
          Observer: 'Irine',
          Farm: 'Glezon',
          Good: 65,
          Bad: 10
      },
      {
          Date: '2018-04-26',
          Observer: 'Jone',
          Farm: 'Glezon',
          Good: 132,
          Bad: 21
      },
      {
          Date: '2018-04-30',
          Observer: 'Alex',
          Farm: 'Glezon',
          Good: 99,
          Bad: 31
      },
      {
          Date: '2018-04-30',
          Observer: 'Gina',
          Farm: 'Glezon',
          Good: 70,
          Bad: 35
      },
      {
          Date: '2018-05-03',
          Observer: 'Zeiger',
          Farm: 'Glezon',
          Good: 90,
          Bad: 36
      }];
  //var formatComma = d3.format(",");
  var datanest = d3.nest().key(function(d) { return d.Date; })
                          .rollup(function(v) { return {
                              total: d3.sum(v, function(d) { return d.Good + d.Bad; }),
                              good: formatComma(d3.sum(v, function(d) { return d.Good; })/d3.sum(v, function(d) { return d.Good + d.Bad; }) * 100),
                              bad: d3.sum(v, function(d) { return d.Bad; })/d3.sum(v, function(d) { return d.Good + d.Bad; })
                            }; })
                          .entries(unit_data);
  console.log(datanest);


  var unitset = [];
  for(var i = 0; i < datanest.length; i ++){
    console.log(i);
     var token = {};
     token.date = datanest[i].key;
     token.sales1 = Math.round(datanest[i].value.good);
     token.sales2 = Math.round(datanest[i].value.bad.toFixed(2)*100);
     unitset.push(token);
     console.log(token);
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
      // "lineColor": "#e1ede9",
      // "fillColors": "#e1ede9",
      "fillAlphas": 1,
      "type": "column",
      "title": "Improper Unit Alignment",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "[[value]]%",
      //浮标label
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]%</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      // "lineColor": "#62cf73",
      "lineColor": "#7CDFFF",
      "fillColors": "#7CDFFF",
      // "fillColors": "#62cf73",
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
      //是否显示游标线对齐
      "valueLineEnabled": false,
      //左侧坐标轴balloon显示
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


function teatFunction() {

  var color = Chart.helpers.color;
  	var teat_data = [
      {
          Milker: "Aphrodite",Date: '03-15-2018',Score1: 15,Score2: 10,Score3: 3,Score4: 10	},
      {
          Milker: "Chris",Date: '03-15-2018',Score1: 11,Score2: 10,Score3: 8,Score4: 6},
      {
          Milker: "Terry",Date: '03-15-2018',Score1: 10,Score2: 24,Score3: 4,Score4: 2 },
      {
          Milker: "Zack",Date: '03-15-2018',Score1: 15,Score2: 18,Score3: 5,Score4: 5},
      {
          Milker: "Kyle",Date: '03-15-2018',Score1: 23,Score2: 7,Score3: 8,Score4: 3},
      {
          Milker: "Zeus",Date: '03-15-2018',Score1: 19,Score2: 12,Score3: 1,Score4: 5}
  	];

    var datanest = d3.nest()
       .key(function (d){ return d.Milker;})
       .rollup(function(v){ return {
           total: d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
           percent_3_4: formatComma( (d3.sum(v, function (d){ return d.Score3 + d.Score4;}) / d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}))*100)
           //percent_4: d3.sum(v, function (d){ return d.Score4;}) / d3.sum(v, function(d) {return d.Score1 + d.Score2 + d.Score3 + d.Score4;}),
       };})
       .entries(teat_data);
    var teatset = [];
       for(var i = 0; i < datanest.length; i ++){
          var token = {};
          token.country = datanest[i].key;
          token.visits = Math.round(datanest[i].value.percent_3_4);
          //token.sales2 = Math.round(datanest[i].value.bad.toFixed(2)*100);
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


    //
    //
    //
  	// var label_data = [];
  	// var score4set = [];
  	// var score3set = [];
  	// var score21set = [];
  	// //var score1set = [];
  	// for(var i = 0; i < teat_data.length; i++) {
    //   var obj = teat_data[i];
  	// 	label_data.push(obj.Milker);
    //   console.log(obj);
  	// 	var total = obj.Score1 + obj.Score2 +obj.Score3 +obj.Score4;
    //   score4set.push(((obj.Score4 + obj.Score3)/total).toFixed(2));
  	// 	//score4set.push((obj.Score4/total).toFixed(2));
  	// 	score3set.push((obj.Score3/total).toFixed(2));
  	// 	score21set.push(((obj.Score2 + obj.Score1)/total).toFixed(2));
  	// 	console.log(obj.Socre4/total);
  	// }
  	// 	console.log(label_data);
  	// 	console.log(score4set);
  	// 		console.log(score3set);
  	// 			console.log(score21set);
    //
  	// 	var barChartData = {
  	// 		//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  	// 		labels: label_data,
  	// 		datasets: [{
  	// 			//show label of dataset1
  	// 			label: 'Score4 percent',
    //       backgroundColor: "#4176C1",
    //       //backgroundColor: "rgb(255, 189, 89)",
  	// 			//backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
  	// 			borderColor: window.chartColors.white,
  	// 			borderWidth: 0,
  	// 			//append data of dataset1 a json as a array
  	// 			data: score4set
  	// 		}
    //
    //     /*, {
  	// 			label: 'Score3 percent',
  	// 			backgroundColor: "rgb(216, 105, 192)",
  	// 			borderColor: "rgb(216, 105, 192)",
  	// 			borderWidth: 1,
  	// 			data: score3set
  	// 		}, {
  	// 			label: 'Score2 & 1 percent',
  	// 			backgroundColor: "rgb(220, 218, 218)",
  	// 			borderColor: window.chartColors.white,
  	// 			borderWidth: 1,
  	// 			data: score21set
  	// 		}*/
    //   ]
    //
  	// 	};
  	// //	console.log(barChartData);
    //
  	// var ctx = document.getElementById('canvas').getContext('2d');
  	// window.myBar = new Chart(ctx, {
  	// 	type: 'bar',
  	// 	data: barChartData,
  	// 	options: {
  	// 		title: {
  	// 			display: true,
  	// 			text: 'Date: YY-MM-DD Score percent by observer'
  	// 		},
  	// 		tooltips: {
  	// 			mode: 'index',
  	// 			intersect: false
  	// 		},
  	// 		responsive: true,
  	// 		scales: {
  	// 			xAxes: [{
  	// 				stacked: true,
  	// 			}],
  	// 			yAxes: [{
  	// 				stacked: true
  	// 			}]
  	// 		}
  	// 	}
  	// });

}

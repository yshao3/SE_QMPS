$(document).ready(function() {
    $('#button-teatCleaniness').click(function () {
        createExcel_teat();
    });

    $('#button-udderHygiene').click(function () {
        createExcel_udder();
    });

    $('#button-unitAlignment').click(function () {
        createExcel_unit();
    });

    $('#button-stripYields').click(function () {
        createExcel_strip();
    });

    $('#button-postMilking').click(function () {
        createExcel_post()
    });

    $('#button-lactoCoder').click(function () {
        createExcel_lacto() 
    });



    $(".option1").hover(function(){
            $("#p1").attr('src', '1h.png');
        });
    $(".option1").mouseleave(function(){
               $("#p1").attr('src', '1.png');
           });



    $(".option2").hover(function(){
                $("#p2").attr('src', '2h.png');
            });
            $(".option2").mouseleave(function(){
                       $("#p2").attr('src', '2.png');
                   });

    $(".option3").hover(function(){
            $("#p3").attr('src', '3h.png');
        });
        $(".option3").mouseleave(function(){
                   $("#p3").attr('src', '3.png');
               });


    $(".option4").hover(function(){
            $("#p4").attr('src', '4h.png');
                    });
                    $(".option4").mouseleave(function(){
                               $("#p4").attr('src', '4.png');
                           });

    $(".option5").hover(function(){
              $("#p5").attr('src', '5h.png');
          });
          $(".option5").mouseleave(function(){
                     $("#p5").attr('src', '5.png');
                 });
    $(".option6").hover(function(){
          $("#p6").attr('src', '6h.png');
      });
      $(".option6").mouseleave(function(){
                 $("#p6").attr('src', '6.png');
             });





    // teat end  /////////////////////////////////////////////////////////

    function createExcel_teat() {

        var milker_data
    
        var date_3 = document.getElementById("date_3").value;
                // console.log(date_3);

        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/teat?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }
    

        d3.json('../data/search/teat_data.json', function (error,data) {

            milker_data = res[1];
            // console.log(milker_data);
            
            var cell_style = {
                fg_color: 'green',
                bg_color: 'green'
            }

            var milker_number = milker_data.length;
            var data1 = [
                ["Teat Cleanliness After Prep", null, "Use this if evaluated together", null, null, null, null, null, null, "Use this if milkers evaluated seperately"],
                ["Date", null, null, null, null, null, null, null, "Date"],
                [null],
                ["Total Scored", 0, null, null, null, null, null, null, "Total Scored", 0],
                ["Percent 3 and 4", 0, null, null, null, null, null, null,"Percent 3 and 4", 0],
                [null],
                ["Total in each", 0, 0, 0, 0, null, null, null, "Total in each", 0, 0, 0, 0],
                ["Percent", 0, 0, 0, 0, null, null, null, "Percent", 0, 0, 0, 0],
                [null],
                [null],
                [null, "Score 1", "Score 2", "Score 3", "Score 4", null, null, null, null, "Score 1", "Score 2", "Score 3", "Score 4"],
                ["Total", 0, 0, 0, 0, null, null, null, "Milker 1", 0, 0, 0, 0],
                [null, null, null, null, null, null, null, null, "Percent", 0, 0, 0, 0],
                [null]
            ];

            for (i = 0; i < milker_number - 1; i++){
                var milker = "Milker " + (i + 2);
                var new_milker = new Array(null, null, null, null, null, null, null, null, milker, 0, 0, 0, 0);
                data1.push(new_milker);
                var new_percent = new Array(null, null, null, null, null, null, null, null, "Percent", 0, 0, 0, 0);
                data1.push(new_percent);
                var new_blank = new Array(null);
                data1.push(new_blank);
            }

            var parsed_formula_j = "SUM("
            var parsed_formula_k = "SUM("
            var parsed_formula_l = "SUM("
            var parsed_formula_m = "SUM("
            
            for (var a = 0; a < milker_number; a++){
                var b = 12 + a * 3;

                if (a != milker_number - 1){
                    parsed_formula_j += ("J" + b + ",");
                    parsed_formula_k += ("K" + b + ",");
                    parsed_formula_l += ("L" + b + ",");
                    parsed_formula_m += ("M" + b + ",");
                }
                else{
                    parsed_formula_j += ("J" + b);
                    parsed_formula_k += ("K" + b);
                    parsed_formula_l += ("L" + b);
                    parsed_formula_m += ("M" + b);
                }
               
            }

            parsed_formula_j += ")";
            parsed_formula_k += ")";
            parsed_formula_l += ")";
            parsed_formula_m += ")";

            // console.log(parsed_formula_j);


            

            var wb1 = XLSX.utils.book_new();
            wb1.Props = {
                Title: "Teat End Cleanliness",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Teat End Cleanliness";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws1 = XLSX.utils.aoa_to_sheet(data1);


            XLSX.utils.book_append_sheet(wb1, ws1, ws_name);


            // Loop for alphabets
            /*
            for(var letter=65;letter<91;letter++)
            {
            var _char = String.fromCharCode(letter);
            console.log(_char);
            }
            */


            // Assigning values to cells
            ws1['B2'] = { t: 'd', v: milker_data[0].date, fill: cell_style};
            ws1['J2'] = { t: 'd', v: milker_data[0].date, s: cell_style};
            var score1_sum = 0;
            var score2_sum = 0;
            var score3_sum = 0;
            var score4_sum = 0;
            for (j = 0; j < milker_data.length; j++){
                score1_sum += milker_data[j].clean;
                score2_sum += milker_data[j].dip_present;
                score3_sum += milker_data[j].small_dirt;
                score4_sum += milker_data[j].large_dirt;
            }
            ws1['B12'] = { t: 'n', v: score1_sum};
            ws1['C12'] = { t: 'n', v: score2_sum};
            ws1['D12'] = { t: 'n', v: score3_sum};
            ws1['E12'] = { t: 'n', v: score4_sum};

            for (k = 0; k < milker_data.length; k++){
                var row_number = 12 + k * 3;
                ws1['J' + row_number] = { t: 'n', v: milker_data[k].clean};
                ws1['K' + row_number] = { t: 'n', v: milker_data[k].dip_present};
                ws1['L' + row_number] = { t: 'n', v: milker_data[k].small_dirt};
                ws1['M' + row_number] = { t: 'n', v: milker_data[k].large_dirt};
            }

            
            for (e = 0; e < milker_data.length; e++){
                var row_number2 = 13 + e * 3;
                var row_number2f = row_number2 - 1;
                var jj = 'J' + row_number2f;
                var kk = 'K' + row_number2f;
                var mm = 'M' + row_number2f;
                var kk = 'K' + row_number2f;
                var ll = 'L' + row_number2f;

                ws1['J' + row_number2] = { t: 'n', f: jj + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws1['K' + row_number2] = { t: 'n', f: kk + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws1['L' + row_number2] = { t: 'n', f: ll + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws1['M' + row_number2] = { t: 'n', f: mm + "/" + "(SUM(" + jj + ":" + mm + "))" };
            }
            
            

            ws1['B4'] = {t: 'n', f: "SUM(B7:E7)"};
            ws1['B5'] = {t: 'n', f: "D8 + E8"};
            ws1['J4'] = {t: 'n', f: "SUM(J7:M7)"};
            ws1['J5'] = {t: 'n', f: "L8 + M8"};

            ws1['B7'] = {t: 'n', f: "SUM(B12:B97)"};
            ws1['C7'] = {t: 'n', f: "SUM(C12:C97)"};
            ws1['D7'] = {t: 'n', f: "SUM(D12:D97)"};
            ws1['E7'] = {t: 'n', f: "SUM(E12:E97)"};

            ws1['J7'] = {t: 'n', f: parsed_formula_j};
            ws1['K7'] = {t: 'n', f: parsed_formula_k};
            ws1['L7'] = {t: 'n', f: parsed_formula_l};
            ws1['M7'] = {t: 'n', f: parsed_formula_m};


            ws1['B8'] = {t: 'n', f: "B7/B4"};
            ws1['C8'] = {t: 'n', f: "C7/B4"};
            ws1['D8'] = {t: 'n', f: "D7/B4"};
            ws1['E8'] = {t: 'n', f: "E7/B4"};

            ws1['J8'] = {t: 'n', f: "J7/J4"};
            ws1['K8'] = {t: 'n', f: "K7/J4"};
            ws1['L8'] = {t: 'n', f: "L7/J4"};
            ws1['M8'] = {t: 'n', f: "M7/J4"};




            var wbout1 = XLSX.write(wb1, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };



            saveAs(new Blob([s2ab(wbout1)], { type: "application/octet-stream" }), 'Teat End Cleanliness.xlsx');

        });

    }








    // udder hygiene  /////////////////////////////////////////////////////////


    function createExcel_udder() {

        var milker_data
        
        var date_3 = document.getElementById("date_3").value;
                    console.log(date_3);
        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/udder?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }

        d3.json('../data/search/udder_data.json', function (error,data) {

            milker_data = res[1];
            console.log(milker_data);
        

            var milker_number = milker_data.length;
            
            var data2 = [
                ["Udder Hygiene", null, "Use this if all groups evaluated together", null, null, null, null, null, null, "Use this if groups evaluated seperately"],
                ["Date", null, null, null, null, null, null, null, "Date"],
                [null],
                ["Total Scored", 0, null, null, null, null, null, null, "Total Scored", 0],
                ["Percent 3 and 4", 0, null, null, null, null, null, null,"Percent 3 and 4", 0],
                [null],
                ["Total in each", 0, 0, 0, 0, null, null, null, "Total in each", 0, 0, 0, 0],
                ["Percent", 0, 0, 0, 0, null, null, null, "Percent", 0, 0, 0, 0],
                [null],
                [null],
                [null, "Score 1", "Score 2", "Score 3", "Score 4", null, null, null, null, "Score 1", "Score 2", "Score 3", "Score 4"],
                ["Total", 0, 0, 0, 0, null, null, null, "Group X", 0, 0, 0, 0],
                [null, null, null, null, null, null, null, null, "Percent", 0, 0, 0, 0],
                [null]
            ];

            for (i = 0; i < milker_number - 1; i++){
                var new_milker = new Array(null, null, null, null, null, null, null, null, "Group X", 0, 0, 0, 0);
                data2.push(new_milker);
                var new_percent = new Array(null, null, null, null, null, null, null, null, "Percent", 0, 0, 0, 0);
                data2.push(new_percent);
                var new_blank = new Array(null);
                data2.push(new_blank);
            }

            var parsed_formula_j = "SUM("
            var parsed_formula_k = "SUM("
            var parsed_formula_l = "SUM("
            var parsed_formula_m = "SUM("
            
            for (var a = 0; a < milker_number; a++){
                var b = 12 + a * 3;

                if (a != milker_number - 1){
                    parsed_formula_j += ("J" + b + ",");
                    parsed_formula_k += ("K" + b + ",");
                    parsed_formula_l += ("L" + b + ",");
                    parsed_formula_m += ("M" + b + ",");
                }
                else{
                    parsed_formula_j += ("J" + b);
                    parsed_formula_k += ("K" + b);
                    parsed_formula_l += ("L" + b);
                    parsed_formula_m += ("M" + b);
                }
               
            }

            parsed_formula_j += ")";
            parsed_formula_k += ")";
            parsed_formula_l += ")";
            parsed_formula_m += ")";

            console.log(parsed_formula_j);
            

            

            var wb2 = XLSX.utils.book_new();
            wb2.Props = {
                Title: "Udder Hygiene",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Udder Hygiene";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws2 = XLSX.utils.aoa_to_sheet(data2);


            XLSX.utils.book_append_sheet(wb2, ws2, ws_name);


            // Loop for alphabets
            /*
            for(var letter=65;letter<91;letter++)
            {
            var _char = String.fromCharCode(letter);
            console.log(_char);
            }
            */


            // Assigning values to cells
            ws2['B2'] = { t: 'd', v: milker_data[0].date};
            ws2['J2'] = { t: 'd', v: milker_data[0].date};
            var score1_sum = 0;
            var score2_sum = 0;
            var score3_sum = 0;
            var score4_sum = 0;
            for (j = 0; j < milker_data.length; j++){
                score1_sum += milker_data[j].clean;
                score2_sum += milker_data[j].slightly_dirt;
                score3_sum += milker_data[j].moderate_dirt;
                score4_sum += milker_data[j].cake_on_dirt;
            }
            ws2['B12'] = { t: 'n', v: score1_sum};
            ws2['C12'] = { t: 'n', v: score2_sum};
            ws2['D12'] = { t: 'n', v: score3_sum};
            ws2['E12'] = { t: 'n', v: score4_sum};

            for (k = 0; k < milker_data.length; k++){
                var row_number = 12 + k * 3;
                ws2['J' + row_number] = { t: 'n', v: milker_data[k].clean};
                ws2['K' + row_number] = { t: 'n', v: milker_data[k].slightly_dirt};
                ws2['L' + row_number] = { t: 'n', v: milker_data[k].moderate_dirt};
                ws2['M' + row_number] = { t: 'n', v: milker_data[k].cake_on_dirt};
            }

            
            for (e = 0; e < milker_data.length; e++){
                var row_number2 = 13 + e * 3;
                var row_number2f = row_number2 - 1;
                var jj = 'J' + row_number2f;
                var kk = 'K' + row_number2f;
                var mm = 'M' + row_number2f;
                var kk = 'K' + row_number2f;
                var ll = 'L' + row_number2f;

                ws2['J' + row_number2] = { t: 'n', f: jj + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws2['K' + row_number2] = { t: 'n', f: kk + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws2['L' + row_number2] = { t: 'n', f: ll + "/" + "(SUM(" + jj + ":" + mm + "))" };
                ws2['M' + row_number2] = { t: 'n', f: mm + "/" + "(SUM(" + jj + ":" + mm + "))" };
            }
            
            

            ws2['B4'] = {t: 'n', f: "SUM(B7:E7)"};
            ws2['B5'] = {t: 'n', f: "D8 + E8"};
            ws2['J4'] = {t: 'n', f: "SUM(J7:M7)"};
            ws2['J5'] = {t: 'n', f: "L8 + M8"};

            ws2['B7'] = {t: 'n', f: "SUM(B12:B97)"};
            ws2['C7'] = {t: 'n', f: "SUM(C12:C97)"};
            ws2['D7'] = {t: 'n', f: "SUM(D12:D97)"};
            ws2['E7'] = {t: 'n', f: "SUM(E12:E97)"};

            ws2['J7'] = {t: 'n', f: parsed_formula_j};
            ws2['K7'] = {t: 'n', f: parsed_formula_k};
            ws2['L7'] = {t: 'n', f: parsed_formula_l};
            ws2['M7'] = {t: 'n', f: parsed_formula_m};


            ws2['B8'] = {t: 'n', f: "B7/B4"};
            ws2['C8'] = {t: 'n', f: "C7/B4"};
            ws2['D8'] = {t: 'n', f: "D7/B4"};
            ws2['E8'] = {t: 'n', f: "E7/B4"};

            ws2['J8'] = {t: 'n', f: "J7/J4"};
            ws2['K8'] = {t: 'n', f: "K7/J4"};
            ws2['L8'] = {t: 'n', f: "L7/J4"};
            ws2['M8'] = {t: 'n', f: "M7/J4"};






            var wbout2 = XLSX.write(wb2, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };

            saveAs(new Blob([s2ab(wbout2)], { type: "application/octet-stream" }), 'Udder Hygiene.xlsx');

        });

    };




    // unit alignment /////////////////////////////////////////////////////////


    function createExcel_unit() {

        var goodbad_data
    
        var date_3 = document.getElementById("date_3").value;

        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/unit?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }

        d3.json('../data/search/unit_data.json', function (error,data) {

            goodbad_data = res[1];
                    
            var goodbad_number = goodbad_data.length;
            
            var data3 = [
                ["Unit Alignment Scores", null],
                ["Date", null],
                [null],
                ["Total Scored", 0],
                [null],
                ["Total in each category", 0, 0],
                ["Percent", 0, 0],
                [null],
                [null],
                [null, "Good", "Bad"]
            ];

            
            for (i = 0; i < goodbad_number; i++){
                var new_boolean = new Array(null,goodbad_data[i].good, goodbad_data[i].bad);
                data3.push(new_boolean);
                
            }
            

            

            var wb3 = XLSX.utils.book_new();
            wb3.Props = {
                Title: "Unit Alignment",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Unit Alignment";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws3 = XLSX.utils.aoa_to_sheet(data3);


            XLSX.utils.book_append_sheet(wb3, ws3, ws_name);


        


            var end_number = 11 + goodbad_number - 1;

            // Assigning values to cells
            ws3['B2'] = { t: 'd', v: goodbad_data[0].date};
            ws3['B6'] = { t: 'n', f: 'SUM(B11:B' + end_number + ')'};
            ws3['C6'] = { t: 'n', f: 'SUM(C11:C' + end_number + ')'};
            ws3['B7'] = { t: 'n', f: 'B6/B4'};
            ws3['C7'] = { t: 'n', f: 'C6/B4'};
            ws3['B4'] = { t: 'n', f: 'SUM(B6:C6)'};
            



            var wbout3 = XLSX.write(wb3, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };

            saveAs(new Blob([s2ab(wbout3)], { type: "application/octet-stream" }), 'Unit Alignment.xlsx');
        });
    }


     
    // strip yields/////////////////////////////////////////////////////////
            

    function createExcel_strip() {

        var strip_data
    
        var date_3 = document.getElementById("date_3").value;

        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/strip?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }


        d3.json('../data/search/strip_data.json', function (error,data) {

            strip_data = res[1];

            var strip_number = strip_data.length;
            
            var data4 = [
                ["Strip Yields"],
                ["Date", null, null],
                [null],
                ["Total", null, 0, null, 0, 0, 0],
                ["Average", null, null, null, null, null, null],
                [null],
                [null, "Stall #", "Strip Yields (ml)", "Majority in one 1/4 ? (1 if yes)", "<150", "150-250", ">250"]
                
            ];

            for (i = 0; i < strip_number; i++){
                var new_strip = new Array(null, strip_data[i].Stall_no, strip_data[i].ML, strip_data[i].IsBalanced, 0, 0, 0);
                data4.push(new_strip);
            }
            

            

            var wb4 = XLSX.utils.book_new();
            wb4.Props = {
                Title: "Strip Yields",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Strip Yields";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws4 = XLSX.utils.aoa_to_sheet(data4);


            XLSX.utils.book_append_sheet(wb4, ws4, ws_name);


            // Loop for alphabets
            /*
            for(var letter=65;letter<91;letter++)
            {
            var _char = String.fromCharCode(letter);
            console.log(_char);
            }
            */


            // Assigning values to cells
            ws4['C2'] = { t: 'd', v: strip_data[0].date};
            
            

            
            for (j = 0; j < strip_data.length; j++){
                var row_number3 = j + 8;
                var cc = 'C' + row_number3;

                ws4['E' + row_number3] = { t: 'n', f: 'IF(' + cc + '=""' + ",0,IF(" + cc + "<150,1,0))"};
                ws4['F' + row_number3] = { t: 'n', f: 'IF(' + cc + '>149,IF(' + cc + "<251,1,0),0)"};
                ws4['G' + row_number3] = { t: 'n', f: 'IF(' + cc + '>250,1,0)'};
            }
            
            

            
            var cc_last = 'C' + row_number3;
            var ee_last = 'E' + row_number3;
            var ff_last = 'F' + row_number3;
            var gg_last = 'G' + row_number3;

            ws4['E5'] = {t: 'n', f: "E4/C4"};
            ws4['F5'] = {t: 'n', f: "F4/C4"};
            ws4['G5'] = {t: 'n', f: "G4/C4"};
            ws4['C5'] = {t: 'n', f: 'AVERAGE(C8:' + cc_last + ')'};
            ws4['C4'] = {t: 'n', f: 'COUNT(C8:' + cc_last + ')'};
            ws4['E4'] = {t: 'n', f: 'SUM(E8:' + ee_last + ')'};
            ws4['F4'] = {t: 'n', f: 'SUM(F8:' + ff_last + ')'};
            ws4['G4'] = {t: 'n', f: 'SUM(G8:' + gg_last + ')'};





            var wbout4 = XLSX.write(wb4, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };

            saveAs(new Blob([s2ab(wbout4)], { type: "application/octet-stream" }), 'Strip Yields.xlsx');

        });
    }



    // post milking /////////////////////////////////////////////////////////


    function createExcel_post() {

        var post_data
    
        var date_3 = document.getElementById("date_3").value;

        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/post?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }

        d3.json('../data/search/post_data.json', function (error,data) {

            post_data = res[1];
        //console.log(teat_data[0].TES.LH);

            var group_number = post_data.length;
            
            var data5 = [
                ["farm Name", null, "Fill in", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Total scored", null, null],
                ["Date", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Percent", null, null, null, 0, "Percent", null, null, null, 0, "Percent", null, null, null, 0, "Percent", null, null, null, 0, "Percent", null, null, null, 0, "Percent", null, null, null, 0, "Percent", null, null, null,0],
                [null, null, null, "D,OL,H", null, null, null, "R,B,DS", null, null, null, "VM,SW", null, null, null, "F,W", null, null, null, "N,S,SR,R,VR", null, null, null, null, "Total cows", null, null, null, 0, "Total cows", null, null, null, 0, "Total cows", null, null, null, 0, "Total cows", null, null, null, 0, "Total cows", null, null, null, 0, "Total cows", null, null, null, 0, "Total cows", null, null, null,0],
                ["Page #", "Group #", "Line #", "Teat Skin Condition", null, null, null, "Teat color", null, null, null, "swelling Near Teat Base", null, null, null, "hardness at Teat End", null, null, null, "Teat End Score", null, null, null, null, "Teat skin condition", null, null, null, null, "Teat color", null, null, null, null, "swelling Near Teat Base", null, null, null, null, "hardness at Teat End", null, null, null, null, "Teat End Score", null, null, null, null, "Open lesion", null, null, null, null, "Hemorrhage", null, null, null,null],
                [null, null, null, "LH", "LF", "RH", "RF", "LH", "LF", "RH", "RF", "LH", "LF", "RH", "RF", "LH", "LF", "RH", "RF", "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF", null, "LH", "LF", "RH", "RF",null]
                
            ];

            for (i = 0; i < group_number; i++){
                var page_check = i % 20;
                var page_number = i / 20 + 1;
                if (page_check == 0){
                    var new_group = new Array(page_number, post_data[i].group_id, post_data[i].line, post_data[i].skin_condition.LH, post_data[i].skin_condition.LF, post_data[i].skin_condition.RH, post_data[i].skin_condition.RF, post_data[i].color.LH, post_data[i].color.LF, post_data[i].color.RH, post_data[i].color.RF, post_data[i].swelling.LH, post_data[i].swelling.LF, post_data[i].swelling.RH, post_data[i].swelling.RF, post_data[i].end_score.LH, post_data[i].end_score.LF, post_data[i].end_score.RH, post_data[i].end_score.RF, post_data[i].hardness.LH, post_data[i].hardness.LF, post_data[i].hardness.RH, post_data[i].hardness.RF, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    data5.push(new_group);
                }
                else{
                    var new_group = new Array(null, post_data[i].group_id, post_data[i].line, post_data[i].skin_condition.LH, post_data[i].skin_condition.LF, post_data[i].skin_condition.RH, post_data[i].skin_condition.RF, post_data[i].color.LH, post_data[i].color.LF, post_data[i].color.RH, post_data[i].color.RF, post_data[i].swelling.LH, post_data[i].swelling.LF, post_data[i].swelling.RH, post_data[i].swelling.RF, post_data[i].end_score.LH, post_data[i].end_score.LF, post_data[i].end_score.RH, post_data[i].end_score.RF, post_data[i].hardness.LH, post_data[i].hardness.LF, post_data[i].hardness.RH, post_data[i].hardness.RF, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    data5.push(new_group);
                }
            }
            

            

            var wb5 = XLSX.utils.book_new();
            wb5.Props = {
                Title: "Post Milking Teat Assessment",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Post Milking Teat Assessment";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws5 = XLSX.utils.aoa_to_sheet(data5);


            XLSX.utils.book_append_sheet(wb5, ws5, ws_name);


            // Loop for alphabets
            /*
            for(var letter=65;letter<91;letter++)
            {
            var _char = String.fromCharCode(letter);
            console.log(_char);
            }
            */


            // Assigning values to cells
            



            ws5['B1'] = { t: 's', v: post_data[0].farm};
            ws5['B2'] = { t: 'd', v: post_data[0].date};

            

            
            for (e = 0; e < post_data.length; e++){
                var row_number5 = 6 + e;

                var dd = 'D' + row_number5;
                var ee = 'E' + row_number5;
                var ff = 'F' + row_number5;
                var gg = 'G' + row_number5;

                var hh = 'H' + row_number5;
                var ii = 'I' + row_number5;
                var jj = 'J' + row_number5;
                var kk = 'K' + row_number5;

                var ll = 'L' + row_number5;
                var mm = 'M' + row_number5;
                var nn = 'N' + row_number5;
                var oo = 'O' + row_number5;

                var pp = 'P' + row_number5;
                var qq = 'Q' + row_number5;
                var rr = 'R' + row_number5;
                var ss = 'S' + row_number5;

                var tt = 'T' + row_number5;
                var uu = 'U' + row_number5;
                var vv = 'V' + row_number5;
                var ww = 'W' + row_number5;

                var yy = 'Y' + row_number5;
                var zz = 'Z' + row_number5;
                var aaaa = 'AA' + row_number5;
                var abab = 'AB' + row_number5;
                var acac = 'AC' + row_number5;

                var adad = 'AD' + row_number5;
                var aeae = 'AE' + row_number5;
                var afaf = 'AF' + row_number5;
                var agag = 'AG' + row_number5;
                var ahah = 'AH' + row_number5;

                var aiai = 'AI' + row_number5;
                var ajaj = 'AJ' + row_number5;
                var akak = 'AK' + row_number5;
                var alal = 'AL' + row_number5;
                var amam = 'AM' + row_number5;

                var anan = 'AN' + row_number5;
                var aoao = 'AO' + row_number5;
                var apap = 'AP' + row_number5;
                var aqaq = 'AQ' + row_number5;
                var arar = 'AR' + row_number5;

                var asas = 'AS' + row_number5;
                var atat = 'AT' + row_number5;
                var auau = 'AU' + row_number5;
                var avav = 'AV' + row_number5;
                var awaw = 'AW' + row_number5;

                var axax = 'AX' + row_number5;
                var ayay = 'AY' + row_number5;
                var azaz = 'AZ' + row_number5;
                var baba = 'BA' + row_number5;
                var bbbb = 'BB' + row_number5;

                var bcbc = 'BC' + row_number5;
                var bdbd = 'BD' + row_number5;
                var bebe = 'BE' + row_number5;
                var bfbf = 'BF' + row_number5;
                var bgbg = 'BG' + row_number5;


            


                ws5['Y' + row_number5] = { t: 'n', f: 'IF(OR(' + dd + '="D",' + dd + '="H",' + dd + '="OL"),1,0)'};
                ws5['Z' + row_number5] = { t: 'n', f: 'IF(OR(' + ee + '="D",' + ee + '="H",' + ee + '="OL"),1,0)'};
                ws5['AA' + row_number5] = { t: 'n', f: 'IF(OR(' + ff + '="D",' + ff + '="H",' + ff + '="OL"),1,0)'};
                ws5['AB' + row_number5] = { t: 'n', f: 'IF(OR(' + gg + '="D",' + gg + '="H",' + gg + '="OL"),1,0)'};
                ws5['AC' + row_number5] = { t: 'n', f: '+IF(SUM(' + yy + ':' + abab + ')>0,1,0)'};

                ws5['AD' + row_number5] = { t: 'n', f: 'IF(OR(' + hh + '="R",' + hh + '="B"),1,0)'};
                ws5['AE' + row_number5] = { t: 'n', f: 'IF(OR(' + ii + '="R",' + ii + '="B"),1,0)'};
                ws5['AF' + row_number5] = { t: 'n', f: 'IF(OR(' + jj + '="R",' + jj + '="B"),1,0)'};
                ws5['AG' + row_number5] = { t: 'n', f: 'IF(OR(' + kk + '="R",' + kk + '="B"),1,0)'};
                ws5['AH' + row_number5] = { t: 'n', f: '+IF(SUM(' + adad + ':' + agag + ')>0,1,0)'};

                ws5['AI' + row_number5] = { t: 'n', f: 'IF(' + ll + '="SW",1,0)'};
                ws5['AJ' + row_number5] = { t: 'n', f: 'IF(' + mm + '="SW",1,0)'};
                ws5['AK' + row_number5] = { t: 'n', f: 'IF(' + nn + '="SW",1,0)'};
                ws5['AL' + row_number5] = { t: 'n', f: 'IF(' + oo + '="SW",1,0)'};
                ws5['AM' + row_number5] = { t: 'n', f: '+IF(SUM(' + aiai + ':' + alal + ')>0,1,0)'};

                ws5['AN' + row_number5] = { t: 'n', f: 'IF(OR(' + pp + '="F",' + pp + '="W"),1,0)'};
                ws5['AO' + row_number5] = { t: 'n', f: 'IF(OR(' + qq + '="F",' + qq + '="W"),1,0)'};
                ws5['AP' + row_number5] = { t: 'n', f: 'IF(OR(' + rr + '="F",' + rr + '="W"),1,0)'};
                ws5['AQ' + row_number5] = { t: 'n', f: 'IF(OR(' + ss + '="F",' + ss + '="W"),1,0)'};
                ws5['AR' + row_number5] = { t: 'n', f: '+IF(SUM(' + anan + ':' + aqaq + ')>0,1,0)'};

                ws5['AS' + row_number5] = { t: 'n', f: 'IF(OR(' + tt + '="R",' + tt + '="VR"),1,0)'};
                ws5['AT' + row_number5] = { t: 'n', f: 'IF(OR(' + uu + '="R",' + uu + '="VR"),1,0)'};
                ws5['AU' + row_number5] = { t: 'n', f: 'IF(OR(' + vv + '="R",' + vv + '="VR"),1,0)'};
                ws5['AV' + row_number5] = { t: 'n', f: 'IF(OR(' + ww + '="R",' + ww + '="VR"),1,0)'};
                ws5['AW' + row_number5] = { t: 'n', f: '+IF(SUM(' + asas + ':' + avav + ')>0,1,0)'};

                ws5['AX' + row_number5] = { t: 'n', f: 'IF(' + dd + '="OL",1,0)'};
                ws5['AY' + row_number5] = { t: 'n', f: 'IF(' + ee + '="OL",1,0)'};
                ws5['AZ' + row_number5] = { t: 'n', f: 'IF(' + ff + '="OL",1,0)'};
                ws5['BA' + row_number5] = { t: 'n', f: 'IF(' + gg + '="OL",1,0)'};
                ws5['BB' + row_number5] = { t: 'n', f: '+IF(SUM(' + axax + ':' + baba + ')>0,1,0)'};

                ws5['BC' + row_number5] = { t: 'n', f: 'IF(' + dd + '="H",1,0)'};
                ws5['BD' + row_number5] = { t: 'n', f: 'IF(' + ee + '="H",1,0)'};
                ws5['BE' + row_number5] = { t: 'n', f: 'IF(' + ff + '="H",1,0)'};
                ws5['BF' + row_number5] = { t: 'n', f: 'IF(' + gg + '="H",1,0)'};
                ws5['BG' + row_number5] = { t: 'n', f: '+IF(SUM(' + bcbc + ':' + bfbf + ')>0,1,0)'};





            }
            
            var teat_l = post_data.length + 5;
            var ac_total = 'AC' + teat_l;
            var ah_total = 'AH' + teat_l;
            var am_total = 'AM' + teat_l;
            var ar_total = 'AR' + teat_l;
            var aw_total = 'AW' + teat_l;
            var bb_total = 'BB' + teat_l;
            var bg_total = 'BG' + teat_l;
            var c_total = 'C' + teat_l;

            
            ws5['AC3'] = {t: 'n', f: "SUM(AC6:" + ac_total + ")"};
            ws5['AH3'] = {t: 'n', f: "SUM(AH6:" + ah_total + ")"};
            ws5['AM3'] = {t: 'n', f: "SUM(AM6:" + am_total + ")"};
            ws5['AR3'] = {t: 'n', f: "SUM(AR6:" + ar_total + ")"};
            ws5['AW3'] = {t: 'n', f: "SUM(AW6:" + aw_total + ")"};
            ws5['BB3'] = {t: 'n', f: "SUM(BB6:" + bb_total + ")"};
            ws5['BG3'] = {t: 'n', f: "SUM(BG6:" + bg_total + ")"};
            
            ws5['Y1'] = {t: 'n', f: "COUNT(C6:" + c_total + ")"};

            ws5['AC2'] = {t: 'n', f: "AC3 / $Y$1"};
            ws5['AH2'] = {t: 'n', f: "AH3 / $Y$1"};
            ws5['AM2'] = {t: 'n', f: "AM3 / $Y$1"};
            ws5['AR2'] = {t: 'n', f: "AR3 / $Y$1"};
            ws5['AW2'] = {t: 'n', f: "AW3 / $Y$1"};
            ws5['BB2'] = {t: 'n', f: "BB3 / $Y$1"};
            ws5['BG2'] = {t: 'n', f: "BG3 / $Y$1"};

            




            var wbout5 = XLSX.write(wb5, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };

            saveAs(new Blob([s2ab(wbout5)], { type: "application/octet-stream" }), 'Post Milking Teat Assessment.xlsx');

        
        });

    }

    
    
    //lactocorder /////////////////////////////////////////////////////////

        
    function createExcel_lacto() {

        var lacto_data
    
        var date_3 = document.getElementById("date_3").value;

        var farm_name = document.getElementById("farm").value;
        console.log(farm_name);

        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://localhost:3000/lacto?date1="+date_3+"&date2="+date_3+"&farm="+farm_name,
            "method": "GET",
            "headers": {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                "username": username,
                "password": password

            }
        };

        var res=[];
        $.ajax(settings).done(function (response) {
            res = response;
        });
        console.log(res);
    

        if (res[0] == false){
            window.location = "index.html";
        }


        d3.json('../data/search/lacto_data.json', function (error,data) {

            lacto_data = res[1];

            var lacto_number = lacto_data.length;
            
            var data6 = [
                ["Date:", null, null, null, "farm:", null, null, null, null, null, null],
                ["Milking Routine Evaluation: LactoCorder Analysis", null, null, null, null, null, null, null, null, null, null, null, null, null],
                [null],
                ["Parlor Type:", null, null, "Pre-milking:", null, null, null, "Herd Size:", null, null],
                ["Size:", null, null, "Procedures:", null, null, null, "Milking Frequency:", "2X", null, "3X", null],
                ["No. Operations:", null, null, "(Prep)", null, null, null, "Milking Rountine:", "Territorial", null],
                [null],
                ["I. Prep procedures Timing:", null],
                [null, "Fill in procedures", null, null, null, null, null, null, null,"Total","Remarks"],
                ["Cow", "Dip", "Strip", "Wipe", "Attach", "Remove", "Dip Contact Time", "Lag Time Stimulation to Unit Attachment", "Unit on Time", "Milk"]
            ];

            for (i = 0; i < lacto_number; i++){
                var new_lacto = new Array(lacto_data[i].cow_name, "N/A", "N/A", "N/A", "N/A","N/A", 
                lacto_data[i].dip_contact_time, lacto_data[i].lag_contact_stimulate, lacto_data[i].unit_on_time, lacto_data[i].total_milk, lacto_data[i].remark);
                data6.push(new_lacto);
            }
            
            for (z = 0; z < 5; z++){
                var lacto_extra = new Array(null, null, null, null, null, null, null, null, null, null);
                data6.push(lacto_extra);

            }
            

        



            var wb6 = XLSX.utils.book_new();
            wb6.Props = {
                Title: "Lactocorder Evaluation",
                Subject: "Test File",
                Author: "Zhili Huang",
                CreatedDate: new Date(2018, 3, 13)
            };
            var ws_name = "Lactocorder Evaluation";
            //wb.SheetNames.push(ws_name);
            //var ws = XLSX.utils.json_to_sheet(data);
            var ws6 = XLSX.utils.aoa_to_sheet(data6);


            XLSX.utils.book_append_sheet(wb6, ws6, ws_name);



            ws6['B1'] = { t: 'd', v: lacto_data[0].date};
            ws6['E1'] = { t: 's', v: lacto_data[0].farm};
            

            for (k = 0; k < lacto_data.length; k++){
                var row_number = 11 + k;
                var dd = 'D' + row_number;
                var bb = 'B' + row_number;
                var ee = 'E' + row_number;
                var cc = 'C' + row_number;
                var ff = 'F' + row_number;

                // ws6['G' + row_number] = { t: 'n', f: dd + '-' + bb};
                // ws6['H' + row_number] = { t: 'n', f: ee + '-' + cc};
                // ws6['I' + row_number] = { t: 'n', f: ff + '-' + ee};
            
            }
            var lacto_last = lacto_number + 10;
            var lacto_last1 = lacto_number + 12;
            var lacto_last2 = lacto_number + 13;
            var lacto_last3 = lacto_number + 14;

            var ff1 = 'F' + lacto_last1;
            var ff2 = 'F' + lacto_last2;
            var ff3 = 'F' + lacto_last3;

            var gg1 = 'G' + lacto_last1;
            var gg2 = 'G' + lacto_last2;
            var gg3 = 'G' + lacto_last3;
            var gglast = 'G' + lacto_last;

            var hh1 = 'H' + lacto_last1;
            var hh2 = 'H' + lacto_last2;
            var hh3 = 'H' + lacto_last3;
            var hhlast = 'H' + lacto_last;

            var ii1 = 'I' + lacto_last1;
            var ii2 = 'I' + lacto_last2;
            var ii3 = 'I' + lacto_last3;
            var iilast = 'I' + lacto_last;

            ws6[ff1] = { t: 's', v: "Average"};
            ws6[ff2] = { t: 's', v: "Min"};
            ws6[ff3] = { t: 's', v: "Max"};

            ws6[gg1] = { t: 'n', f: "AVERAGE(G11:" + gglast + ")"};
            ws6[gg2] = { t: 'n', f: "MIN(G11:" + gglast + ")"};
            ws6[gg3] = { t: 'n', f: "MAX(G11:" + gglast + ")"};

            ws6[hh1] = { t: 'n', f: "AVERAGE(H11:" + hhlast + ")"};
            ws6[hh2] = { t: 'n', f: "MIN(H11:" + hhlast + ")"};
            ws6[hh3] = { t: 'n', f: "MAX(H11:" + hhlast + ")"};

            ws6[ii1] = { t: 'n', f: "AVERAGE(I11:" + iilast + ")"};
            ws6[ii2] = { t: 'n', f: "MIN(I11:" + iilast + ")"};
            ws6[ii3] = { t: 'n', f: "MAX(I11:" + iilast + ")"};




            var wbout6 = XLSX.write(wb6, { bookType: 'xlsx', type: 'binary' });
            function s2ab(s) {

                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };


            saveAs(new Blob([s2ab(wbout6)], { type: "application/octet-stream" }), 'Lactocorder Evaluation.xlsx');



        });

    }

});

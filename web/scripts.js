$(document).ready(function() {
  $("#download").click(function() {
    $("#hint").html("Download Succeeded");
    $("#hint").css('color','red');
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



});

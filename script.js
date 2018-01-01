/*
- restart game button
*/
var counter = 1; 
var winner = '';
var computerMove = 0;
var position = 0;
var gameOver = 0;
var emptyFields = ["1","2","3","4","5","6","7","8","9"]
function winnerCheck() {
      if ($("#1").val() + $("#2").val() + $("#3").val() ===  '111' ||
          $("#1").val() + $("#2").val() + $("#3").val() === '000' ||
          $("#4").val() + $("#5").val() + $("#6").val() === '111' ||
          $("#4").val() + $("#5").val() + $("#6").val() === '000' ||
          $("#7").val() + $("#8").val() + $("#9").val() === '111' ||
          $("#7").val() + $("#8").val() + $("#9").val() === '000' ||
          $("#1").val() + $("#4").val() + $("#7").val() === '111' ||
          $("#1").val() + $("#4").val() + $("#7").val() === '000' ||
          $("#2").val() + $("#5").val() + $("#8").val() === '111' ||
          $("#2").val() + $("#5").val() + $("#8").val() === '000' ||
          $("#3").val() + $("#6").val() + $("#9").val() === '111' ||
          $("#3").val() + $("#6").val() + $("#9").val() === '000' ||
          $("#1").val() + $("#5").val() + $("#9").val() === '111' ||
          $("#1").val() + $("#5").val() + $("#9").val() === '000' ||
          $("#3").val() + $("#5").val() + $("#7").val() === '111' ||
          $("#3").val() + $("#5").val() + $("#7").val() === '000')
        {
          setTimeout(function(){
            //alert(winner + ' is the winner!');
            $(".alert-text").text(winner + ' is the winner!');
            $(".alert").css({
              "opacity": "1", 
              "z-index": "0"
            });
          },500);
          gameOver=1;
          } else if (emptyFields.length == 0) {
            $(".alert-text").text("it's a tie!");
            $(".alert").css({
              "opacity": "1", 
              "z-index": "0"
            });
            gameOver=1;
          }
  }
function reset() {
  gameOver = 1;
  $(".square").val('');
  setTimeout(function(){$(".square").html('')}, 500);
  $("input[type=radio]").attr('disabled', false);
  emptyFields = ["1","2","3","4","5","6","7","8","9"]
}


$("input:radio[name=playerselect]").click(function() {
  if ($("#oradio").is(":checked")) {
    counter = 0;
  } else counter = 1;
      });

  $(".square").click(function() {
    $("input[type=radio]").attr('disabled', true);
    if ($("#multiplayer").is(":checked")) {
      if ($(this).val() === "") {
        emptyFields.splice(emptyFields.indexOf($(this).attr('id')),1);
        if (counter) {
          $(this).html("X");
          $(this).val(1);
          winner = 'X'
          counter = 0;
        } else if (!counter) {
          $(this).html("O");
          $(this).val(0);
          winner = 'O'
          counter = 1;
        };
      };
      setTimeout(function(){winnerCheck(), 200});
    } else if ($("#singleplayer").is(":checked")) {
      if ($(this).val() === "") {
        emptyFields.splice(emptyFields.indexOf($(this).attr('id')),1);
        if (counter) {
          $(this).html("X");
          $(this).val(1);
          winner = 'X';
          gameOver = 0;
        } else if (!counter) {
          $(this).html("O");
          $(this).val(0);
          winner = 'O';
          gameOver = 0;
        };
      
      winnerCheck();
      if (!gameOver && $(this).html() !== "") {
      var computerFunc = setTimeout(function(){
        computerMove = emptyFields[(Math.floor(Math.random()*emptyFields.length).toString())];
        if (counter) {
        $("#" + computerMove).html("O");
        $("#" + computerMove).val(0);
        winner = "O";  
        } else {
        $("#" + computerMove).html("X");
        $("#" + computerMove).val(1);
        winner = "X";
        };
        emptyFields.splice(emptyFields.indexOf($("#" + computerMove).attr('id')),1);
        setTimeout(function(){winnerCheck(), 500});
      }, 200);
    };
        };
    }
  })
$(".ok").click(function() {
  reset();
            $(".alert").css({
              "opacity": "0", 
              "z-index": "-1"
            });
});


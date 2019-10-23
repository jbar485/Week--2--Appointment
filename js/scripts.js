$(document).ready(function(){
  $(".sub-btn").click(function(){
    var nameText = $("#name").val();
    var descriptionText = $("#description").val();
    var dateText = $("#date").val();
    var startText = $("#start").val();
    var endText = $("#end").val();

    $("#nameResult").text(nameText);
    $("#descriptionResult").text(descriptionText);
    $("#dateResult").text(dateText);
    $("#startResult").text(startText);
    $("#endResult").text(endText);
  });
});





/*
id="nameResult"
id="descriptionResult"
id="dateResult"
id="startResult"
id="endResult"
*/

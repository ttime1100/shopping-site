$(document).ready( function() {

// Menu for Entertainment Effect
  $("#ent-item").hide();
  $("#ent-item-one").hide();
  $("#ent-item-two").hide();
  $("#ent-item-three").hide();
  $("#ent-item-four").hide();

$("#ent-int").click( function () {

$("#ent-item").toggle();
$("#ent-item-one").toggle();

$("#ent-item-two").toggle();
$("#ent-item-three").toggle();
$("#ent-item-four").toggle();

});

// Make shopping list
$("#item-button").click( function() {
$("ul").append( "<li>Computer</li>" );

});

$("#item-button-two").click( function() {
$("ul").append( "<li>Monitor</li>" );

});

$("#item-button-three").click( function() {
$("ul").append( "<li>Home System</li>" );

});

$("#item-button-four").click( function() {
$("ul").append( "<li>TV- Set-Up</li>" );

});

$("#item-button-four").click( function() {
$("ul").append( "<li>Radio</li>" );

});






});

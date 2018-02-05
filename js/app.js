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

//menu for technology
$("#tech-item").hide();
$("#tech-item-two").hide();
$("#tech-item-three").hide();
$("#tech-item-four").hide();
$("#tech-item-five").hide();

$("#tech-button").click( function () {

$("#tech-item").toggle();
$("#tech-item-two").toggle();

$("#tech-item-three").toggle();
$("#tech-item-four").toggle();
$("#tech-item-five").toggle();

});


// food shopping list
$("#food-one").hide();
$("#food-two").hide();
$("#food-three").hide();
$("#food-four").hide();
$("#food-five").hide();

$("#food").click( function () {

$("#food-one").toggle();
$("#food-two").toggle();

$("#food-three").toggle();
$("#food-four").toggle();
$("#food-five").toggle();

});


// Make shopping list
$("#item-button").click( function() {
$("ul").append( "<li> Computer, </li>" );

});

$("#item-button-two").click( function() {
$("ul").append( "<li> Monitor, </li>" );

});

$("#item-button-three").click( function() {
$("ul").append( "<li> Home-System, </li>" );

});

$("#item-button-four").click( function() {
$("ul").append( "<li> TV Set-Up, </li>" );

});

$("#item-button-five").click( function() {
$("ul").append( "<li id='list-five'> Radio, </li>" );

});

//tech shopping list

$("#tech-bone").click( function() {
$("ul").append( "<li> Home Phone, </li>" );

});

$("#tech-btwo").click( function() {
$("ul").append( "<li> Ipohone Pack, </li>" );

});

$("#tech-bthree").click( function() {
$("ul").append( "<li> Tablet, </li>" );

});

$("#tech-bfour").click( function() {
$("ul").append( "<li> Ipad, </li>" );

});

$("#tech-bfive").click( function() {
$("ul").append( "<li id='list-five'> Iwatch, </li>" );

});


//food shopping list

$("#food-bone").click( function() {
$("ul").append( "<li> Sub, </li>" );

});

$("#food-btwo").click( function() {
$("ul").append( "<li> Pizza, </li>" );

});

$("#food-bthree").click( function() {
$("ul").append( "<li> Chicken, </li>" );

});

$("#food-bfour").click( function() {
$("ul").append( "<li> Big Mac, </li>" );

});

$("#food-bfive").click( function() {
$("ul").append( "<li id='list-five'> Taco, </li>" );

});



$("#delete").click( function() {

$("li").eq(-1).remove();

});





});

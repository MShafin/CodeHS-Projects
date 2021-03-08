//Height in Meters
//Shafin Mohammed
//April 4
//
//a function that takes a height in feet and inches and converts it to meters.
var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 100;
var FEET_TO_INCHES = 12;

function start(){
    convertHeightToMeters(6,4);
}

function convertHeightToMeters(x, y){
    var inches = ((x * FEET_TO_INCHES) + y);
    var cm = (inches * INCHES_TO_CM);
    var meters = (cm / CM_TO_METERS);
    println(meters);
}
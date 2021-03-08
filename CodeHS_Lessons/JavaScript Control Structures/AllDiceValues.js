//All Dice Values
//Shafin Mohammed
//March 31
//
//A program that prints all possible dice rolls with 2 dice

var SIDES_ON_DICE = 6;
function start() {
    // var i = dice 1, var a = dice 2
    // repeats the 6 values 6 times
    for(var i = 1; i <= SIDES_ON_DICE; i++){
        for(var a = 1; a <= 6; a++){
            println(i + "," + a)
        }
    }
}
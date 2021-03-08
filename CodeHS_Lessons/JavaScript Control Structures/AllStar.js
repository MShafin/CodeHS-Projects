//All Star
//Shafin Mohammed
//March 31
//
//gets three variables from the user, their points per game, 
//their rebounds per game, and their assists per game,
function start(){
var pointsPerGame = readInt("Points per game? ");
var reboundsPerGame = readInt("Rebounds per game? ");
var assistsPerGame = readInt("Assists per game? ");
var isAllStar = pointsPerGame >= 25 || pointsPerGame >= 10 && reboundsPerGame >= 10 && assistsPerGame >= 10;

println("Is all star? " + isAllStar);
}
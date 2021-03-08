/*
 * This program has karel pick up
 * lay down a square of balls
 */

//Starts the for loop which initiates the sequence to make a square
function start(){
    for (var i = 0; i < 4; i++) {
        putBall();
        move();
        turnLeft();
    }
}
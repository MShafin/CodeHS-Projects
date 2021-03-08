/*
 * This program has karel build two
 * towers and then move all of the way
 * to the top of the second tower
 */

//Karel will build two towers by using the functions defined below.
function start(){
    move();
    ballisInLine();
    turnAround();
    move();
    move();
    turnLeft();
    move();
    move();
    ballisInLine();
    move();
    turnRight();
}

/*
*Makes a line of balls
*Precondition: Karel is in the collomn where the line of balls
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function ballisInLine() {
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}

//Turn aroudn 2 times = turn around
function turnAround() {
    turnLeft();
    turnLeft();
}

//Turn left 3 times = turn right
function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
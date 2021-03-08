/*
 * This program has karel build two
 * towers and then move all of the way
 * to the top of the second tower
 */
 
//Karel will build two towers by using the functions defined below.
function start(){
    move(); 
    turnLeft(); 
    makeTower();
    move(); 
    turnRight();
    move(); 
    move(); 
    turnRight();
    move(); 
    makeTower(); 
    turnLeft();
    turnLeft();
    move(); 
    move(); 
    move(); 
    turnRight();
}


/*Makes a tower of balls
*Precondition: Karel is in the collomn where the line of balls
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function makeTower() { 
    putBall();
    move();
    putBall(); 
    move();
    putBall();
}
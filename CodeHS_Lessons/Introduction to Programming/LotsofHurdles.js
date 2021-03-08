/*
 * This program has karel pick up
 * lay down a square of balls
 */
 
 //Starts the for loop which initiates the sequence to make a square
function start(){
    for (var i = 0; i < 5; i++){
        jumpHurdle();
    }

}

/*Defines the command of jumping a hurdle
*Precondition: Karel is 2 units before where the hurdle is, in the same row
*Karel is facing east.
*Postcondition: Karel is on the other side of the hurdle facing east
*/
function jumpHurdle(){
    move();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
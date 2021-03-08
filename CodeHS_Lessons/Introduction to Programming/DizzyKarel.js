/*
 * This program has karel spin around
 * 8 times in a row
 */
 
//Starts the for loop which initiates the sequence to turn left 32 times
//which is 8 complete flips
function start(){
    for (var i = 0; i < 32; i++) {
        turnLeft();
    }
    
}
/*
 * This program has karel pick up
 * 100 balls
 */
 

//starts the for loop which initiates the sequence to pick up 100 balls
function start(){
    move();
    for(var i = 0; i < 100; i++){
        takeBall();
    }
    move();
}
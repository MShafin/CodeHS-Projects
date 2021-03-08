/*
 * This program has Karel paint a red
 * frame around the edge of the world.
 */
function start(){
    for(var i = 0; i < 4; i++) {
        paintRedRow();
        turnLeft();
    }
}
/* 
 * Paints a red row starting at Karel's starting
 * position and ending at the next wall.
 */
function paintRedRow() {
    while(frontIsClear()) {
        paint(Color.red);
        move();
    }
    paint(Color.red);
}
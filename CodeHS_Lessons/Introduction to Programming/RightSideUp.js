// Karel should face the direction east
// from the position of west or south
function start(){
    if (facingSouth()) {
        turnLeft();
    }

    if (facingWest()) {
        turnAround();
    }
}
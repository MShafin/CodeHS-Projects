//This function takes Karel to all the Hurdles
//If there is one infront it will exexture the command jumpHurdle
function start() {
    for (var i = 0; i < 13; i++) {
        if (frontIsBlocked()) {
            jumpHurdle();
        } else {
            move();
        }
    }
}

//This function makes Karel jump over the Hurdles
function jumpHurdle() {
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
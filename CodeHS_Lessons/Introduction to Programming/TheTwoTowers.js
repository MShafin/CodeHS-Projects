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

function ballisInLine() {
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}

function turnAround() {
    turnLeft();
    turnLeft();
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
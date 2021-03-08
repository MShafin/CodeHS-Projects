function start() {
    turnLeft();
    move4();
    turnRight();
    move();
    move();
    takeBall();
    move();
    turnRight();
    move4();
    turnLeft();
    move3();
    turnAround();
    move3();
    move3();
    turnAround();
    putBall();
}


//Gives Karel the functions to move further with less code
function move4(){
    move();
    move();
    move();
    move();
}

function move3(){
    move();
    move();
    move();
}
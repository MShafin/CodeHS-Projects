function start(){
    move(); 
    move();
    buryBall();
    move();
    move();
    move();
    buryBall();
    move();
    move();
    move();
    buryBall();
    move();
}

function buryBall(){
    turnRight();
    move();
    move();
    move();
    putBall();
    turnLeft();
    turnLeft();
    move();
    move();
    move();
    turnRight();
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
    
}
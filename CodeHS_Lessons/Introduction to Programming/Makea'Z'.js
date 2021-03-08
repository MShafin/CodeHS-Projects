function start(){
    putBallsInRow();
    makeDiagonal();
    move();
    turnAround();
    putBallsInRow();
}

// Puts down four balls in a row
function putBallsInRow(){
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
}

//Learn to turn Right
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

//Learn to turn Around
function turnAround(){
    turnLeft();
    turnLeft();
}

// Makes the diagonal for the 'Z'
function makeDiagonal(){
    turnRight();
    move();
    turnRight();
    move();
    putBall();
    
    turnLeft();
    move();
    turnRight();
    move();
    putBall();

    turnLeft();
    move();
    turnRight();
    move();
}
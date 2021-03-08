//Has Karel clean up the balls row by row
function start(){
    ballsTaken();
    while(leftIsClear()){
        endUpFacingEast();
        ballsTaken();
        if(rightIsClear()){
            endUpFacingWest();
            ballsTaken();
        }else{
            turnAround();
        }
    }
}

function ballsTaken(){
    if(ballsPresent()){
        takeBall();
    }
    
    while(frontIsClear()){
        move();
        if(ballsPresent()){
            takeBall();
        }
    }
}

function endUpFacingEast(){
    turnLeft();
    move();
    turnLeft();
}

function endUpFacingWest(){
    turnRight();
    move();
    turnRight();
}
//Has Karel move the tennis from one spot to another
//Karel must double the number of tennis balls in that spot
function start(){
    move();
    putTwoBalls();
    moveBack();
}


function putTwoBalls(){
    while(ballsPresent()){
        takeBall();
        putTwoMoreBallsNextAve();
    }
    moveBallsNextDoorBack();
}

function putTwoMoreBallsNextAve(){
    move();
    putBall();
    putBall();
    moveBack();
}

function moveBallsNextDoorBack(){
    move();
    while(ballsPresent()){
        moveOneBallBack();
    }
    moveBack();
}

function moveOneBallBack(){
    takeBall();
    moveBack();
    putBall();
    move();
}

function moveBack(){
    turnAround();
    move();
    turnAround();
}
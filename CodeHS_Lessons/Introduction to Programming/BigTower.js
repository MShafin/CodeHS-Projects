//Karel will build a big tower using the functions below.
function start(){
    faceNorth();
    buildTower();
    putBall();
}

//This function make Karel face north if Karel is facing any other direction.
function faceNorth(){
    if(facingWest()){
        turnRight();
    }
    if(facingEast()){
        turnLeft();
    }
    if(facingSouth()){
        turnLeft();
        turnLeft();
    }
}

//This function makes Karel place balls to create a tower.
function buildTower(){
    while(frontIsClear()){
        putBall();
        move();
    }
}
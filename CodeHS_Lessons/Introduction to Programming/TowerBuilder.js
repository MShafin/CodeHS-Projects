//Has Karel build towers
function start(){
    buildTower();
    while(frontIsClear()){
        move();
        clearMove();
    }
} 

function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
}

function clearMove(){
    if(frontIsClear()){
        move();
        buildTower();
    }
}
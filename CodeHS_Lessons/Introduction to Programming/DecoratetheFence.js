function start(){
    //Aslong as the front is clear move forward
    while(frontIsClear()){
        move();
    } 
    turnLeft();
    while(frontIsClear()){
        //If the right is fenced then place a ball
        if(rightIsBlocked()){
            putBall();
            move();
            //Aslong as there is no fence towards the right move forward
            while(rightIsClear()){
                move();
            }
        }
        //If the front is fenced then place a ball
        if(frontIsBlocked()){
            putBall();
        }
    }
}
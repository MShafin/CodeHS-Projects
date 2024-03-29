/* Karel needs to move the stack of balls
 * at (2,1) over one spot to the right. We
 * need to make it work for any number of
 * balls in the stack. */
function start(){
    move();
    movePile();
}

/*
 * This function moves a pile of any size one spot
 * east.
 * Precondition: Karel is standing on the pile of balls
 * Postcondition: Karel is in the same spot, and the pile has
 * moved one spot east.
 */
function movePile(){
    while(ballsPresent()){
        moveSingleBall();
    }
}

/*
 * This function has Karel move one ball one spot east.
 * Precondition: Karel is standing on a ball.
 * Postcondition: Karel is in the same spot, one less ball is beneath
 * Karel, and one more ball is to the spot east of Karel.
 */
function moveSingleBall(){
    takeBall();
    move();
    putBall();
    comeBack();
}

/*
 * This function has Karel move backwards one spot West.
 * Precondition: Karel is facing East, and there is not a wall behind Karel.
 * Postcondition: Karel has moved one spot West, and is still facing East.
 */
function comeBack(){
    turnAround();
    move();
    turnAround();
}
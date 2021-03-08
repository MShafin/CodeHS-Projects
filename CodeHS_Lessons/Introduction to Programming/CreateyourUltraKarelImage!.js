/*
 * This program has karel create the 
 * Microsoft Logo outlined with the 
 * appropriate colors.
 */
 
//Karel will create the logo using the functions defined below.
function start(){
        paintBlueBorder();
        moveToYellow();
        paintYellowBorder();
        moveToGreen();
        paintGreenBorder();
        moveToRed();
        paintRedBorder();
        home();
}


//Functions
//Painting Boxes
/*Makes the red box
*Precondition: Karel is in the corner where the box
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function paintRedBorder(){
    for (var i = 0; i < 9; i++) {
        paint(Color.red);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.red);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.red);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.red);
        move();
    }
}

/*Makes the blue box
*Precondition: Karel is in the corner where the box
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function paintBlueBorder(){
    for (var i = 0; i < 9; i++) {
        paint(Color.blue);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.blue);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.blue);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.blue);
        move();
    }
}

/*Makes the green box
*Precondition: Karel is in the corner where the box
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function paintGreenBorder(){
    for (var i = 0; i < 9; i++) {
        paint(Color.green);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.green);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.green);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.green);
        move();
    }
}

/*Makes the yellow box
*Precondition: Karel is in the corner where the box
*is needed, Karel is facing east.
*Postcondition: Karel returns to original spot facing east.
*/
function paintYellowBorder(){
    for (var i = 0; i < 9; i++) {
        paint(Color.yellow);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.yellow);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.yellow);
        move();
    }
    turnLeft();
    for (var i = 0; i < 9; i++) {
        paint(Color.yellow);
        move();
    }
}


//Moving to Spaces
/*Moves Karel to the red boxes bottom left corner
*Precondition: Karel is in the bottom left corner of the previous
*colored box
*Postcondition: Karel moves to the bottom left corner of the new box
*/
function moveToRed(){
turnRight();
movex9();
turnAround();
}

/*Moves Karel to the blue boxes bottom left corner
*Precondition: Karel is in the bottom left corner of the previous
*colored box
*Postcondition: Karel moves to the bottom left corner of the new box
*/
function moveToBlue(){
//spawn point
}

/*Moves Karel to the green boxes bottom left corner
*Precondition: Karel is in the bottom left corner of the previous
*colored box
*Postcondition: Karel moves to the bottom left corner of the new box
*/
function moveToGreen(){
turnAround();
movex9();
turnRight();
}

/*Moves Karel to the yellow boxes bottom left corner
*Precondition: Karel is in the bottom left corner of the previous
*colored box
*Postcondition: Karel moves to the bottom left corner of the new box
*/
function moveToYellow(){
turnLeft();
movex9();
}


/*Moves Karel in the direction it is facing 9 times
*Precondition: Karel can move 9 steps forward
*Postcondition: Karel is now 9 steps ahead in the same row or column
*/
function movex9(){
move();
move();
move();
move();
move();
move();
move();
move();
move();
move();
}

/*Moves Karel to the point (0,0)
*Precondition: Karel is in the bottom left corner of the red box
*Postcondition: Karel is in the bottom left corner of the blue box
*/
function home(){
    movex9();
    turnLeft();
}
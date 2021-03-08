/*
 * This program has karel build a checkerboard
 */

//Karel will build the checkerboard using the functions defined below.
function start (){
    /*This for loop runs all the code inside 3 times making sets
    *of 2 rows at a time. Results in 6 rows being made from the 
    *bottom with color scheme black and red.
    *Precondition: Karel is in the point (0,0), facing east
    *Postcondition: Karel is in the third row from the top, facing east
    */
    for (var n = 0; n < 3; n++){
        //This for loop runs the code to create a row using the function
        //blackRedMove
        for (var i = 0; i < 4; i++){
            if(frontIsClear()){
                blackRedMove();
            }
        }
    
        //These 3 lines of code position Karel into the next row
        turnLeft();
        move();
        turnLeft();
    
        //This for loop runs the code to create a row using the function
        //blackRedMove
        for (var i = 0; i < 4; i++){
            if(frontIsClear()){
                blackRedMove();
            }
        }
        
        //These 3 lines of code position Karel into the next row
        turnRight();
        move();
        turnRight();
    }
    
    //Completes the function making the top 2 layers
    lastTwoRows();
    //return Karel to the point (0,0)
    home();
}
    


//Functions
/*Karel paints black then red
*Precondition: Karel is in the row where the paint black and red
*is needed, Karel is facing east.
*Postcondition: Karel is at end of the row in the same direction
*/
function blackRedMove(){
    paint(Color.black);
    move();
    paint(Color.red);
    if(frontIsClear()){
        move();
    }
}

/*Creates the top 2 rows using the code from the for loops in
*the start function
*Precondition: Karel is in the third row from the top and is
*facing east
*Postcondition: Karel moves up 2 rows facing east
*/
function lastTwoRows(){
    for (var i = 0; i < 4; i++){
        if(frontIsClear()){
            blackRedMove();
        }
    }
    
    turnLeft();
    move();
    turnLeft();

    for (var i = 0; i < 4; i++){
        if(frontIsClear()){
            blackRedMove();
        }
    }
}

/*Karel returns to point (0,0)
*Precondition: Karel is in the top row and in the first collomn,
*Karel is facing east.
*Postcondition: Karel returns to original starting spot (0,0)
*/
function home(){
    turnLeft();
    move();
    move();
    move();
    move();
    move();
    move();
    move();
    turnLeft();
}
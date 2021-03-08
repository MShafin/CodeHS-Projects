//Tell a Story!
//Shafin Mohammed
//May 1
/*
 * This program tells a graphical story in 4 frames.
 */

/* 
 * Draws the first scene on the canvas and outputs the first
 * section of text for the story.
 */
function drawScene1(){
    //background
    drawBackground();
    //ghost green
    var green = new Color(90,170,45);
    drawGhost(150, 300, green);
    //whos there
    var whos = new Text("Anybody here?");
    whos.setPosition(150,250);
    add(whos);
    
    // IMPLEMENT THIS FUNCTION
    println("Once upon a time a new ghost came to town.");
}

/* 
 * Draws the second scene on the canvas and outputs the second
 * section of text for the story.
 */
function drawScene2(){
    drawBackground();
    //ghost green
    var green = new Color(90,170,45);
    drawGhost(50, 300, green);
    //ghost red
    var red = new Color(255,0,0);
    drawGhost(150, 300, red);
    //ghost orange
    var orange = new Color(255,160,0);
    drawGhost(225, 300, orange);
    //ghost pink
    var pink = new Color(240,115,255);
    drawGhost(300, 300, pink);
    //ghost lightblue
    var lightBlue = new Color(0,210,255);
    drawGhost(375, 300, lightBlue);
    //smile
    var smile = new Text(":D");
    smile.setPosition(150,250);
    add(smile);
    
    // IMPLEMENT THIS FUNCTION
    println("He quickly became friends with all the other ghosts.");
}

/* 
 * Draws the third scene on the canvas and outputs the third
 * section of text for the story.
 */
function drawScene3(){
    drawBackground();
    //ghost green
    var green = new Color(90,170,45);
    drawGhost(235, 300, green);
    //ghost red - blue
    var ghostBlue = new Color(14,47,210);
    drawGhost(25, 300, ghostBlue);
    //ghost orange - blue
    drawGhost(60, 300, ghostBlue);
    //ghost pink - blue
    drawGhost(110, 300, ghostBlue);
    //ghost lightblue - blue
    drawGhost(160, 300, ghostBlue);
    //pacman
    var pacArc = new Arc(50,0,300,0);
    var pacYellow = new Color(225,250,0);
    pacArc.setPosition(335,325);
    pacArc.setRotation(150);
    pacArc.setColor(pacYellow);
    add(pacArc);
    //!
    var scare = new Text("!");
    scare.setPosition(150,250);
    add(scare);
    
    // IMPLEMENT THIS FUNCTION
    println("Then, pacman showed up and threatened the other ghosts.");
}

/* 
 * Draws the fourth scene on the canvas and outputs the fourth
 * section of text for the story.
 */
function drawScene4(){
    drawBackground();
    //ghost green
    var green = new Color(90,170,45);
    drawGhost(50, 300, green);
    //ghost red
    var red = new Color(255,0,0);
    drawGhost(125, 300, red);
    //ghost orange
    var orange = new Color(255,160,0);
    drawGhost(200, 300, orange);
    //ghost pink
    var pink = new Color(240,115,255);
    drawGhost(275, 300, pink);
    //ghost lightblue
    var lightBlue = new Color(0,210,255);
    drawGhost(350, 300, lightBlue);
    //The End
    var theEnd = new Text("The End!");
    theEnd.setPosition(
        getWidth() / 2 - theEnd.getWidth() / 2,
        getHeight() / 2
    );
    add(theEnd);
    
    // IMPLEMENT THIS FUNCTION
    println("The new ghost didn't turn blue and scared pacman off.");
}

function drawBackground(){
    //sky
    var skyBlue = new Color(125,230,225);
    var bgrect1 = new Rectangle(400, 350);
    bgrect1.setPosition(0, 0);
    bgrect1.setColor(skyBlue);
    add(bgrect1);
    
    //ground
    var bgrect2 = new Rectangle(400, 200);
    bgrect2.setPosition(0, 350);
    bgrect2.setColor(Color.green);
    add(bgrect2);    
}

/**********************************************************
 * This is set up code that makes the story advance from
 * scene to scene. Feel free to check out this code and
 * learn how it works!
 * But be careful! If you modify this code the story might
 * not work anymore.
 **********************************************************/
 
var sceneCounter = 0;
function start() {
    var welcome = new Text("Click to Begin!");
    welcome.setPosition(
        getWidth() / 2 - welcome.getWidth() / 2,
        getHeight() / 2
    );
    add(welcome);
    
    // Call the drawNextScene function every time the mouse is clicked
    mouseClickMethod(drawNextScene);
}

/*
 * When this function is called the next scene is drawn.
 */
function drawNextScene(){
    sceneCounter++;
    
    if(sceneCounter == 1) {
        drawScene1();
    } else if (sceneCounter == 2) {
        drawScene2();
    } else if (sceneCounter == 3) {
        drawScene3();
    } else {
        drawScene4();
    }
}

/**********************************************************
 * This is set up code that makes the ghosts from
 * scene to scene. Feel free to check out this code and
 * learn how it works!
 * But be careful! If you modify the variables they may or may
 * not work anymore depending on size. 
 **********************************************************/
 
 //A program to draw ghosts on the screen.
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 0;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

// functions that draw parts of the ghost
function drawGhost(centerX, centerY, color){
    drawBody(centerX, centerY, color);
    for(var i = 0; i < NUM_FEET; i++){
        drawCircle((centerX-HEAD_RADIUS)+(FOOT_RADIUS+(FOOT_RADIUS*(2*i))), centerY+BODY_HEIGHT, FOOT_RADIUS, color);
    }
    drawEye(centerX-EYE_OFFSET, centerY);
    drawEye(centerX+EYE_OFFSET, centerY);
}

function drawEye(x, y){
    drawCircle(x, y, EYE_RADIUS, Color.white);
    drawCircle(x+PUPIL_LEFT_OFFSET, y, PUPIL_RADIUS, Color.blue);
}

function drawBody(x, y, col){
    drawCircle(x, y, HEAD_RADIUS, col);
    drawRect(x-HEAD_RADIUS, y, BODY_WIDTH, BODY_HEIGHT, col);
}

function drawCircle(x, y, rad, col){
    var circle = new Circle(rad);
    circle.setPosition(x, y);
    circle.setColor(col);
    add(circle);
}

function drawRect(x, y, w, h, col){
    var rect = new Rectangle(w, h);
    rect.setPosition(x, y);
    rect.setColor(col);
    add(rect);
}
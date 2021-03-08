/* 
 * This program creates Karel without any of the builtin Karel commands,
 * it makes Karel from scratch using JavaScript.
 *
 * In this program, we build Karel's World in JavaScript and write a
 * JavaScript function to teach Karel how to turnLeft.
 */
 
// Constants for creating Karel
var KAREL_IMG_URL = "https://codehs.com/static/img/karel_east_big.png";

var NUM_STREETS = 4;
var NUM_AVES = 4;
var POINT_SIZE = 3;
var WORLD_WIDTH = 400;
var WORLD_HEIGHT = 400;

var STREET_HEIGHT = WORLD_HEIGHT / NUM_STREETS;
var AVE_WIDTH = WORLD_WIDTH / NUM_AVES;

var KAREL_SIZE = STREET_HEIGHT;

var PAUSE_TIME = 1000;

var EAST = "East";
var WEST = "West";
var NORTH = "North";
var SOUTH = "South";

//Variables to keep track of karel and karel's direction
var karel;
var direction;

function start(){
    setupWorld();
    
    setTimeout(turnLeft, PAUSE_TIME);
    setTimeout(turnLeft, 2*PAUSE_TIME);
}

//This function has the image of Karel rotate left 90 degrees
function turnLeft() {
    karel.rotate(-90);
    if(direction == EAST) {
        direction = NORTH;
    } else if(direction == WEST) {
        direction = SOUTH;
    } else if(direction == NORTH){
        direction = WEST;
    } else if(direction == SOUTH){
        direction = EAST;
    } else{
        println("Error: Karel's Direction is not properly set.");
    }
}

/*
 * This function creates Karel's world and creates Karel in the bottom left
 * corner, facing east.
 */
function setupWorld(){
    setSize(WORLD_WIDTH, WORLD_HEIGHT);
    
    //Add the points to the grid
    for(var street = 0; street < NUM_STREETS; street++){
        for(var ave = 0; ave < NUM_AVES; ave++){
            var xPosition = ave * AVE_WIDTH + AVE_WIDTH / 2;
            var yPosition = street * STREET_HEIGHT + STREET_HEIGHT / 2;
            
            var point = new Circle(POINT_SIZE);
            point.setPosition(xPosition, yPosition);
            add(point);
        }
    }
    
    //Add Karel to the grid
    karel = new WebImage(KAREL_IMG_URL);
    karel.setSize(KAREL_SIZE, KAREL_SIZE);
    
    karel.setPosition(0, WORLD_HEIGHT - KAREL_SIZE);
    add(karel);
    
    //Set Karel's initial direction
    direction = EAST;
}
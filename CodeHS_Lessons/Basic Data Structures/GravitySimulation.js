/*
 * This program simulates gravity acting on a ball.
 *
 * The ball starts off with a random velocity in the x
 * direction, and 0 velocity in the y direction.
 *
 * With each tick in time, gravity increases the y velocity
 * so that the ball is falling faster toward the ground.
 *
 * Try playing around with the GRAVITY_ACCELERATION constant
 * to see what the ball bounces like with stronger and weaker
 * gravitational force!
 */


// Constants for the gravity simulation
var BALL_RADIUS = 25;
var STARTING_Y = 50;
var STARTING_X = 50;
var GRAVITY_ACCELERATION = 4;
var ANIMATION_DELAY = 50;

var ball;
var velocityX;
var velocityY;

function start(){
    createBall();
    initializeVelocity();
    startSimulation();
}

// Creates the ball and adds it to the canvas
function createBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(STARTING_X, STARTING_Y);
    add(ball);
}

/*
 * Initializes the velocity for the ball
 * The ball gets a random velocity in the x direction, and
 * no velocity in the y direction
 */
function initializeVelocity(){
    velocityX = Randomizer.nextFloat(0, 5);
    velocityY = 0;
}

// Begins the simulation animation
function startSimulation(){
    setTimer(moveBall, ANIMATION_DELAY);
}

/*
 * Represents one moment in time passing. Moves the ball
 * according to the current velocity, and adds the gravity
 * acceleration to the y velocity.
 */
function moveBall(){
    ball.move(velocityX, velocityY);
    
    checkForBounce();
    
    velocityY += GRAVITY_ACCELERATION;
}

/*
 * If the ball is going off the screen, this function bounces the
 * ball back into the canvas.
 */
function checkForBounce(){
    var radius = ball.getRadius();
    if(ball.getX() + radius >= getWidth()){
        velocityX *= -1;
        ball.setPosition(getWidth() - radius, ball.getY());
    }
    if(ball.getX() - radius <= 0){
        velocityX *= -1;
        ball.setPosition(radius, ball.getY());
    }
    if(ball.getY() + radius >= getHeight()){
        velocityY = -1 * Math.abs(velocityY);
        ball.setPosition(ball.getX(), getHeight() - radius);
    }
    if(ball.getY() - radius <= 0){
        velocityY *= -1;
        ball.setPosition(ball.getX(), radius);
    }
}
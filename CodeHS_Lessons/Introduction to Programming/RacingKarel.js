/* This program will have Karel run around the racetrack
 * 8 times. */
function start(){ 
    for(var i = 0; i < 32; i++){ 
        setBall(); 
        runToWall(); 
        turnLeft(); 
    } 
} 

function setBall(){ 
    putBall(); 
} 

function runToWall(){ 
    while (frontIsClear()){ 
        move(); 
    } 
}
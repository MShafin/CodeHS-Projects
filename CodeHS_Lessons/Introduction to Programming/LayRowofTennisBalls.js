/* Write a program to lay a row of tennis balls
 * across first street. Make sure to test your
 * program on multiple worlds. */

//Aslong as the front is clear Karel will place a row of
//balls
function start(){
    while (frontIsClear()) {
        putBall();
        move();
    }
    putBall();
}
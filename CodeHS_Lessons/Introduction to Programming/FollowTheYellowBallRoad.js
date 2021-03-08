//Karel will follow the path of yellow balls aslong as there are balls
//to follow
function start() {
    while (ballsPresent()) {
        move();
    }
}
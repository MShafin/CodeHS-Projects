var NUM_CIRCLES = 15;
var MIN_RADIUS = 10;
var MAX_RADIUS = 40;
var DELAY = 500;
var circles = [];

function start(){
    randomCircles();
    setTimer(updateCircle, DELAY);
}

function drawCircle(){
    var RADIUS = Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS);
    var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
    var y = Randomizer.nextInt(getHeight() - RADIUS, RADIUS);
    var circle = new Circle(RADIUS);
    circle.setPosition(x,y);
    add(circle);
    return circle;
}

function updateCircle(circle){
    var color = Randomizer.nextColor();
    for(var i = 0; i < NUM_CIRCLES; i++){
    circles[i].setColor(color);
    }
}

function randomCircles(num){
    for(var i = 0; i < NUM_CIRCLES; i++){
    circles.push(drawCircle());
    }
}
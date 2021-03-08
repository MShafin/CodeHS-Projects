var RADIUS = 40;
var NUM_CIRCLES = 7;
var DELAY = 100;

var circles = [];

function start(){
	createCircles();
	setTimer(goCrazy, DELAY);
}

function createCircles(){
	for(var i = 0; i < NUM_CIRCLES; i++){
		var circle = new Circle(RADIUS);
		updateCircle(circle);
		add(circle);
		circles.push(circle);
	}
}

function goCrazy(){
	for(var i = 0; i < circles.length; i++){
		updateCircle(circles[i]);
	}
}

function updateCircle(circle){
	var x = Randomizer.nextInt(
		RADIUS, getWidth() - RADIUS);
	var y = Randomizer.nextInt(
		RADIUS, getHeight() - RADIUS);
	circle.setPosition(x, y);
	circle.setColor(Randomizer.nextColor());
}
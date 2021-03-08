function start(){
	runToHurdle();
	jumpHurdle();
	runToHurdle();
	jumpHurdle();
	runToFinish();
}

function runToFinish(){
	move();
	move();
	move();
	move();
}

function runToHurdle(){
	move();
	move();
	move();
}

function jumpHurdle(){
	turnLeft();
	move();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}

function turnRight(){
	turnLeft();
	turnLeft();
	turnLeft();
}
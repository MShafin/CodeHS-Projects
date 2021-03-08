function start(){
	move();
	buildTower();
	turnRight();
}

function buildTower(){
    putBall();
	turnLeft();
	move();
	putBall();
	move();
	putBall();
	move();
}

function turnRight(){
	turnLeft();
	turnLeft();
	turnLeft();
}
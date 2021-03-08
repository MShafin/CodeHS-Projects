//Random Color Square
//Shafin Mohammed
//March 31
//
//A program that draws a random color square centered 
//on the graphics canvas

var SIDE_LENGTH = 100;
function start(){
    var horzCenter = getWidth() / 2;
    var vertCenter = getHeight() / 2;
    var square = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
    square.setPosition(150,200);
    square.setColor(Randomizer.nextColor());
    add(square);
}
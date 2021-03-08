//The Worm
//Shafin Mohammed
//May 31
//
// This graphics program should draw a worm. 
// A worm is made up of NUM_CIRCLES circles. 
// Use a for loop to draw the worm, 
// centered vertically in the screen. 
// Also, be sure that the worm is still drawn across 
// the whole canvas, even if the value of NUM_CIRCLES is changed.

var NUM_CIRCLES = 15;
function start(){
    var vertCenter = getHeight() / 2;
    var diameter = (getWidth()/NUM_CIRCLES);
    var radius = diameter / 2;

    for(var i = 0; i < NUM_CIRCLES; i++){
        var worm = new Circle(radius)
        worm.setPosition((radius + i*diameter), vertCenter);
        worm.setColor(Color.black);
        add(worm);
    }
}
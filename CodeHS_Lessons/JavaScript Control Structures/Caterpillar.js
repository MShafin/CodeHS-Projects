//Caterpillar
//Shafin Mohammed
//March 31
//
//This graphics program should draw a caterpillar. A caterpillar has 
//NUM_CIRCLES circles. Every other circle is a different color, the even 
//circles are red, and the odd circles are green. Use a for loop to draw 
//the caterpillar, centered vertically in the screen.

var NUM_CIRCLES = 15;
function start(){
    var vertCenter = getHeight() / 2;
    var diameter = (getWidth()/NUM_CIRCLES);
    var radius = diameter / 2;

    for(var i = 0; i < NUM_CIRCLES; i++){
        var worm = new Circle(radius)
        worm.setPosition((radius + i*diameter), vertCenter);
        if(i % 2 == 0){
            worm.setColor(Color.red)
        }else{
            worm.setColor(Color.green)
        }
        add(worm);
    }
}
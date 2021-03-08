//Draw Something
//Shafin Mohammed
//April 4
//
//Something 

function start(){
//Defined Colors
    var blue = new Color(70, 125, 200);
    var purple = new Color(60, 50, 105);
    var lime = new Color(210, 225, 10);
    var red = new Color(180, 40, 40);
    var black = new Color(20, 20, 25);
    
//Shapes Used On Canvas
//Circles
    var blueCircle = new Circle(50);
    blueCircle.setPosition(130, 210);
    blueCircle.setColor(blue);
    add(blueCircle);
    
    var limeCircle = new Circle(35);
    limeCircle.setPosition(350, 400);
    limeCircle.setColor(lime);
    add(limeCircle);
    
//Rectangles and Squares
    var brect1 = new Rectangle(315, 25);
    brect1.setPosition(0, 390);
    brect1.setColor(black);
    add(brect1);
    
    var brect2 = new Rectangle(10,370);
    brect2.setPosition(255, 135);
    brect2.setColor(black);
    add(brect2);
    
    var brect5 = new Rectangle(10,60);
    brect5.setPosition(160, 220);
    brect5.setColor(black);
    add(brect5);
    
    var rrect1 = new Rectangle(300,80);
    rrect1.setPosition(70, 280);
    rrect1.setColor(red);
    add(rrect1);

//Arcs
    var purpArc = new Arc(50, 0, 70, 0);
    purpArc.setPosition(60, 60);
    purpArc.setRotation(280);
    purpArc.setColor(purple);
    add(purpArc);
    
//Lines
    var bline = new Line(0,100,150,190);
    bline.setColor(black);
    bline.setLineWidth(4);
    add(bline);
    
//Ovals
    var limeOval = new Oval(60, 40);
    limeOval.setPosition(75, 60);
    limeOval.setColor(lime);
    add(limeOval);
}
function start(){
    while(frontIsClear()){
        //if the color Karel is on is red, turn it blue
        if(colorIs(Color.red)){
            paint(Color.blue)
            move();
        }else {
            paint(Color.red);
            move();
        }
    }
    //if the color Karel is on is blue, turn it red
    if(colorIs(Color.blue)){
        paint(Color.red)
    }else {
        paint(Color.blue);
    }
}
//Snake Eyes
//Shafin Mohammed
//May 31
//
//A program that rolls two dice until the user gets snake eyes
//Snake eyes = 1,1

var ROLLS = 1;
function start(){
    while(true){
        var dice1 = Randomizer.nextInt(1,6);
        var dice2 = Randomizer.nextInt(1,6);
        if(dice1 && dice2 == 1){
            break;
        }
        println("You rolled: " + dice1 + ", " + dice2);
        ROLLS++;        
    }
    println("It took you " + ROLLS + " rolls to get snake eyes.");
}
//Lots of Dice
//Shafin Mohammed
//March 31
//
//A program that rolls a 6-sided die 100 times, and prints 
//out all of the rolls

function start(){
    for(var i = 0; i < 100; i++){
        var roll = Randomizer.nextInt(1,6)
        println("You rolled a " + roll);
    }
}
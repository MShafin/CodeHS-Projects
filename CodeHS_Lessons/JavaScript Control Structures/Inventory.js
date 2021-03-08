//Inventory
//Shafin Mohammed
//March 31
//
//A program that keeps track of a simple inventory for a store

var STARTING_ITEMS_IN_INVENTORY = 20;
function start(){
    var numItems = STARTING_ITEMS_IN_INVENTORY; 
    var numItems = STARTING_ITEMS_IN_INVENTORY; 
    while(numItems > 0) {
        println("We have " + numItems + " in inventory.");
        var buy = readInt("How many would you like to buy? ");

        if (buy>numItems) {
            println("There is not enough in inventory for that purchase.");
        } else {
            numItems -= buy;
            println("We have " + numItems + " left.");
        }
    }
    println("All out!");
}
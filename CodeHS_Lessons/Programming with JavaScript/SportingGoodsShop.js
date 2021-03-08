//Sporting Goods Shop
//Shafin Mohammed
//May 31
//
//Asks the user how many frisbees they would like to buy, 
//and then prints out the total cost.


//Declare a constant here to represent the cost of a frisbee
function start(){
var COST_OF_FRISBEE = 15;
var amount = readInt("How many frisbees would like? ");
var sum = COST_OF_FRISBEE * amount;

println(sum);
}
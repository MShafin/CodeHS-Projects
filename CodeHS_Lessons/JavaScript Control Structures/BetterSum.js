//Better Sum
//Shafin Mohammed
//March 31
//
//A program that asks the user for two numbers. Using a for loop, 
//add all of the numbers from the first to the second.

function start(){
    var minNum = readInt("What is the minimum number?");
    var maxNum = readInt("What is the maximum number?");
    var sum = 0;
    for(var i = minNum; i <= maxNum; i++){
        sum = sum + i;
    }
    println("The sum was " + sum);
}
//Fibonacci
//Shafin Mohammed
//March 31
//
//a program that prints out the numbers in the 
//Fibonacci sequence up until the max number.

var MAX_NUM = 1000;
function start(){
    var firstNum = 0; 
    var secondNum = 1; 
    println("1");
    
    while (firstNum + secondNum < MAX_NUM){
        var answer = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = answer;
        println(answer);
    }
}
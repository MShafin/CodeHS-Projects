//Factorial
//Shafin Mohammed
//March 31
//
//A program that prints out a factorial.

function start(){
    var N = 5;
    var minNum = 4;
    var maxNum = 15;
    var product = 4;

    for(var i = minNum; i <= maxNum; i++){
        product = product * i;
    }
    println("The product was " + product);
}
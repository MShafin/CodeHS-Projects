//Teenagers
//Shafin Mohammed
//March 31
//
//Determines if you are a teenager based on your age.
function start(){
    var age = readInt("Age: ");
    if(age >= 13 && age <= 19){
        println("Yes, you are a teenager.");
    }else{
        println("No, you are not a teenager.");
    }
}
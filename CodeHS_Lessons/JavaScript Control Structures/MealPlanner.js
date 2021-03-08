//Meal Planner
//Shafin Mohammed
//March 31
//
//Determines what type of food you would like based off time of meal.
function start(){
    var breakfast = "breakfast";
    var lunch = "lunch";
    var dinner = "dinner";
    var mealType = readLine("What type of food would you like: ");

    //if breakfast
    if(mealType == "breakfast"){
        println("How about cereal.");
    // if lunch    
    } else if(mealType == "lunch"){
        println("Would you like a burger.");
    // if dinner
    } else if(mealType == "dinner"){
        println("Pizza is a nice suggestion.");
    }
}
//RPM The Restaurant Price Manager
//Shafin Mohammad
//June 3 2019
//
//RMP is a easy to use, cost managing program which helps you keep track of how much
//money need to give, every time you eat out. The user can add their dishes, apply discounts
//or tips, as well as divide the bill with friends. Whatever you need RPM is their to help.

//Global Variables - can be modified and edited from different functions
var ORDER = []; //stores the users total order
var COST = 0; //without tip, tax, discount, should remain that way
var newCOST = 0; //cost with tip and discount, should remain that way
var TIP_RATE = 0; //whole number, user input
var DISCOUNT_RATE = 0; //whole number, user input
var TAX_RATE = 0.1;//can be updated, in deciaml -> in real life, based off time/location

function start(){
    //Shows start selection before entering the looped function as well as instructions.
    println("Welcome to RPM. The Ultimate Restaurant Calculating Manager. Simply enter in the dishes you ordered and calculate the total price");
            println("Where would you like to go.");
            println("a) Enter in Dishes");
            println("b) Manage Price");
            println("c) Print Receipt");
            println("d) Exit");
            
    //checks what the user will input, looped
    while(true){
        var userInput = readLine("Type in the letter corresponding to the action, For example, type 'a' to enter in dishes. ");
        
        //runs when the user types in a letter
        if(userInput == "a" || userInput == "A"){
            enterDishes(ORDER); //runs the function asking user to enter dishes
            arrOrder(ORDER); //runs the function that sorts the dishes entered
            arrCost(ORDER); //runs the function which groups the costs
            println("MMMM! All of these dishes look soo goood!");
            //Shows start select again
            println("Where would you like to go next.");
            println("a) Enter in Dishes");
            println("b) Manage Price");
            println("c) Print Receipt");
            println("d) Exit");
        }else if(userInput == "b" || userInput == "B"){
            managePrice(ORDER); //runs function which adds tip/discount
            
            //Shows start select again
            println("Where would you like to go next.");
            println("a) Enter in Dishes");
            println("b) Manage Price");
            println("c) Print Receipt");
            println("d) Exit");
        }else if(userInput == "c" || userInput == "C"){
            printReceipt(ORDER); //runs function that gives user final summary
            
            //Shows start select again
            println("Where would you like to go next.");
            println("a) Enter in Dishes");
            println("b) Manage Price");
            println("c) Print Receipt");
            println("d) Exit");
        }else if(userInput == "d" || userInput == "D"){
            println("RPM will be waiting for you the next you decide to eat out.");
            println("Thanks for using the RPM");
            break; //exits program
        }else{
            println("Please type in a letter from the start select. "); //if user types in something else
        }//continue adding menu items
    }
}

//A - enter in dishes name and price    
function enterDishes(arr){
    //while items is more stays in loop, gets user to enter in items and costs
    var moreItems = true;
    while(moreItems == true){
        var item_name = readLine("What was the name of the food you ate? ");
        ORDER.push(item_name);
        var item_cost = readFloat("How much did it cost?(For example, enter '20' for $20. ");
        ORDER.push(item_cost);
        moreItems = readBoolean("Did you eat anything else?(Reply with 'yes' or 'no')");
    }
}

//AC - prints list of items with costs
function arrOrder(arr){
    //sorts items based on name and price
    for(var i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) % 2 == 0){
            println(arr[i] + ": ");
        }else if(arr.indexOf(arr[i]) % 2 != 0){
            println("$" + arr[i]);
        }
    }
}

function arrCost(arr){
    var costStore = []; //array which stores all costs
    for(var i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) % 2 != 0){
            var costVal = arr[i]; //Gets the costs and stores them in temp variable 
            costStore.push(costVal); //Stores this in cost array
        }
    }
    
    for(var i=0; i<costStore.length; i++){
        COST += costStore[i];
    }
    println("Subtotal: $" + COST); //Prints final stored cost value
}

//B - edit tip and adjust tax
function managePrice(arr){
    //checks if user has entered dishes
    if(ORDER.length == 0){
        println("Your order is empty, comeback after entering in some dishes.")
    }else{
        var askTip = readBoolean("Do you want to leave a tip?(Reply with 'yes' or 'no') ");
        if(askTip == true){
            TIP_RATE = readInt("How was your service, leave a tip.(Enter '20; for 20% tip.) ");
            var randomNum = Randomizer.nextInt(30, 90);
            if(TIP_RATE >= randomNum){
                println("Wow! That's a BIG tip.");
            }
            println("You will tip $" + (COST*(TIP_RATE/100)));
        }else{
            println("Maybe next time.");
        }
        var askDiscount = readBoolean("Did you recieve any discounts on the meal?(Reply with 'yes' or 'no' ");
        //enter discount amount
        if(askDiscount == true){
            DISCOUNT_RATE = readInt("How much of a discount did you recieve.(Enter '10' for a $10 discount.) ");
            if(DISCOUNT_RATE >= 10){
                println("Good Deal!");
            }
            if(DISCOUNT_RATE == Randomizer.nextInt(0,100)){
                println("What are the chances!");
            }
        }else{
            println("Maybe next time.");
        }
        newCOST = ((COST*(1+(TIP_RATE/100)))-DISCOUNT_RATE); //sets newCOST = COST+TIP-DISCOUNT
        println("So far your total excluding tax is $" + newCOST + ".");
    }
}

//C - prints all of the extras on price in a recipt format
function printReceipt(arr){
    //checks if user has entered dishes
    if(ORDER.length == 0){
        println("Your order is empty, comeback after entering some dishes.");
    }else{
        println("Subtotal: $" + COST);
        println("Discount: $" + DISCOUNT_RATE);
        println("Tip: $" + (COST*(TIP_RATE/100)));
        println("Tax (" + (TAX_RATE*100) + "%): $" + (newCOST*TAX_RATE));
        println("Grand Total: $" + (newCOST*(1+TAX_RATE)));
    }
    var sharedBill = readBoolean("Are you going to share the bill?(Reply with 'yes' or 'no') ");
    if(sharedBill == true){
        var friends = readInt("How many other people are with you?(Reply with whole number) ");
        var shared_price = ((newCOST*(1+TAX_RATE))/(friends + 1));
        println("Each person will pay $" + shared_price + ".");
    }else{
        println("Maybe next time you will come with someone else.");
    }
}

//© 2019 Shafin Mohammad

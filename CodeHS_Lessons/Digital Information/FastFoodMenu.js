/*
 * This program shows how digital information is used
 * to encode full orders at restaurants into simple numbers
 */
 
// Create the mapping from number to order
var ORDERS = {
    1 : "Hamburger with Fries",
    2 : "Cheeseburger with Fries",
    3 : "Chicken Club Sandwich",
    4 : "Southwest Salad",
    5 : "Chicken Nuggets with Fries",
    6 : "Bean Burrito",
    7 : "BLT Sandwich",
    8 : "Chicken Salad Wrap",
    9 : "Avocado Wrap",
    10 : "Fried Fish Sandwich"
}

function start() {
    // Get the order encoded as a number
    var orderNumber = readInt("Please enter the number for the meal you would like to order: ");
    
    // Decode the order
    var orderText = "";
    
    if(orderNumber in ORDERS) {
        orderText = ORDERS[orderNumber];
    }
    else {
        orderText = "Sorry, we don't have a meal for that number.";
    }
    
    // Print out the text version of the order
    println(orderText)
}
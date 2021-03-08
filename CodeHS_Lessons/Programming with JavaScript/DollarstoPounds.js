// This constant represents our currency
// conversion rate
var DOLLARS_TO_POUNDS = 0.6462;

// This program will convert dollars to pounds
function start(){
	println("This program converts USD to GBP.");
	var dollars = readFloat("USD: ");
	
	// This is how we can convert from dollars
	// to pounds
	var pounds = dollars * DOLLARS_TO_POUNDS;
	
	println("GBP: " + pounds);
}
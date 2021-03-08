/*
 * This program converts hexadecimal values
 * to decimal values
 */
 
var NUMBER_BASE = 16;

function start()
{
    var hexString = readLine("Input a hexadecimal value: ");
    
    var decimalValue = hexToDecimal(hexString);
    
    println(hexString + " (hex) = " + decimalValue + " (decimal)");
}

/* Convert a given hexadecimal string
 * into the equivalent decimal value.
 * returns a number representing the decimal value
 * of the hexadecimal string
 *
 * Ex: "30F"
 * 
 * Number:        3     0     F
 *
 * Place:       16^2  16^1  16^0
 * 
 * Place value:  256   16     1
 * 
 * Compute decimal value: 3*(256) + 0*(16) + 15*(1) = 783
 */
function hexToDecimal(hexString)
{
    // Get the number of places in this hex number
    var numPlaces = hexString.length;
    
    // Get the current exponent starting with far left
    var currentExponent = numPlaces - 1;
    
    var decimalValue = 0;
    
    // Loop over each character of the hex string
    // and add the value of each place to the decimal value
    for(var i = 0; i < hexString.length; i++)
    {
        // Get the value of this place (16 ^ current exponent)
        var placeValue = Math.pow(NUMBER_BASE, currentExponent);
        
        // Get the value of the current hex digit
        var currentDigit = hexString.charAt(i);
        var digitValue = parseInt(currentDigit, NUMBER_BASE);
        
        // Print out the value at this place
        print(digitValue + " * (" + placeValue + ")");
        if(i != hexString.length - 1)
        {
            print(" + ");
        }
        
        // Add this value to the decimal result
        decimalValue += digitValue * placeValue;
        
        // Decrease the exponent by one for the next place
        currentExponent--;
    }
    
    println(" = " + decimalValue);
    
    return decimalValue;
}
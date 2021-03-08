/*
 * This program encodes user input into binary data!
 * Your job is to write the textToBinary function
 */
function start(){
    var text = readLine("Input the string you would like to encode: ");
    var binary = textToBinary(text);
    println(binary);
    }

function textToBinary(text){
    //Converts user text into ascii values
    var BINARY = [];
    for(var i = 0; i < text.length; i++){
        var charValue = text.charAt(i);
        var numericValue = text.charCodeAt(i);
        BINARY += decimalToBinary(numericValue);
        println(charValue + " --> " + numericValue);
    }
    return BINARY;
}

// Converts a given decimal value into an 8 bit binary value
function decimalToBinary(decimalValue){
    var binaryBase = 2;
    var numBitsDesired = 8;
    var binaryValue = decimalValue.toString(binaryBase);
    
    while(binaryValue.length < numBitsDesired){
        binaryValue = "0" + binaryValue;
    }
    return binaryValue;
}
/*
 * This program is an example of how we can use steganography
 * to encrypt a secret message inside of a cover image without the cover
 * image looking modified.
 */

// Constants for the image
var ORIGINAL_URL = "https://codehs.com/static/img/zebra.jpg";

// Constants for the secret message
var MAX_CHARACTERS = 255;

// Constants for spacing
var GAP = 30;
var IMAGE_WIDTH = 370;
var IMAGE_HEIGHT = 225;
var IMAGE_X = 10;
var IMAGE_Y = 10;

// Constants for buttons
var BUTTON_X = 10;
var BUTTON_Y = IMAGE_Y + IMAGE_HEIGHT + GAP;
var BUTTON_WIDTH = 100;
var BUTTON_HEIGHT = 30;
var PADDING = 5;

// Constants for pixel indices
var RED = 0;
var GREEN = 1;
var BLUE = 2;

// We need to wait for the image to load before modifying it
var IMAGE_LOAD_WAIT_TIME = 50;

// Buttons
var encryptLabel;
var encryptButton;
var decryptLabel;
var decryptButton;

// Image
var image;

function start() {
    // Set up original image
    image = new WebImage(ORIGINAL_URL);
    image.setSize(IMAGE_WIDTH, IMAGE_HEIGHT);
    image.setPosition(IMAGE_X, IMAGE_Y);
    
    // Add image to the canvas
    add(image);
    
    // Set up encrypt buttons
    encryptLabel = new Text("ENCRYPT", "17pt Arial");
    encryptLabel.setPosition(BUTTON_X, BUTTON_Y);
    
    encryptButton = new Rectangle(encryptLabel.getWidth() + PADDING, encryptLabel.getHeight() + PADDING);
    encryptButton.setPosition(encryptLabel.getX(), encryptLabel.getY() - encryptLabel.getHeight());
    encryptButton.setColor(Color.white);
    encryptButton.setBorder(true);
    
    // Set up decrypt button
    decryptLabel = new Text("DECRYPT", "17pt Arial");
    decryptLabel.setPosition(encryptLabel.getX() + encryptLabel.getWidth() + GAP, BUTTON_Y);
    
    decryptButton = new Rectangle(decryptLabel.getWidth() + PADDING, decryptLabel.getHeight() + PADDING);
    decryptButton.setPosition(decryptLabel.getX(), decryptLabel.getY() - decryptLabel.getHeight());
    decryptButton.setColor(Color.white);
    decryptButton.setBorder(true);
    
    // Add buttons to canvas
    add(encryptButton);
    add(encryptLabel);
    
    add(decryptButton);
    add(decryptLabel);
    
    // Set up a click listener to act when the user clicks a button
    mouseClickMethod(handleClick);
    
    println("Press ENCRYPT to encrypt a secret message into the\n image data, or DECRYPT to decrypt a\n message from the image data.");
}

/*
 * Handles a user click
 * If the user clicked on the encrypt button, starts the encrypt process
 * If the user clicked on the decrypt button, starts the decrypt process
 */
function handleClick(e) {
    // Get the element at the location of the mouse click
    var elem = getElementAt(e.getX(), e.getY());
    
    // If the element is the encrypt button or label, start the encrypt process
    if(elem == encryptButton || elem == encryptLabel) {
        encryptProcess();
    }
    
    // If the element is the decrypt button or label, start the decrypt process
    if(elem == decryptButton || elem == decryptLabel) {
        decryptProcess();
    }
}

// Ask for a secret message and encrypt the message into the image data
function encryptProcess() {
    // Ask for secret message. Max length for the secret message
    // is 255, so we can encode the number of characters with 8 bits
    var secretMessage = askForSecretMessage();
    
    encrypt(image, secretMessage);
}

// Decrypt a secret message from the image
function decryptProcess() {
    decrypt(image);
}

/*
 * Continually prompts the user for a secret message that they
 * would like to encrypt until a valid message is input.
 * A valid message has a length of 255 characters or less.
 * That way we can encode the number of characters in the
 * message with only 8 bits.
 */
function askForSecretMessage() {
    while(true) {
        var secretMessage = readLine("Please enter the message you would like to encrypt (" + MAX_CHARACTERS + " characters max): ");
        if(secretMessage.length <= MAX_CHARACTERS) {
            return secretMessage;
        }
        else {
            println("That message is too long. Please try again.");
        }
    }
}

function encrypt(coverImage, secretMessage) {
    println("Message to encrypt: " + secretMessage);

    var binaryString = encodeMessageInBinary(secretMessage);

    println("Message bits: " + binaryString);

    encryptBinaryMessage(coverImage, binaryString);

    println("Done. Message has been encrypted in the image.\n");
}

function encryptBinaryMessage(coverImage, binaryMessage) {
    // Loop over the string and encode each bit into the lowest bit of the blue
    // color channel for each pixel in the image
    for(var index = 0; index < binaryMessage.length; index++) {
        var bit = parseInt(binaryMessage.charAt(index));
        var pixelCoordinates = indexToPixelCoordinates(index, coverImage);

        var x = pixelCoordinates[0];
        var y = pixelCoordinates[1];

        var oldBlue = coverImage.getBlue(x, y);
        var newBlue = setLowestBit(oldBlue, bit);

        coverImage.setBlue(x, y, newBlue);
    }
}

function encodeMessageInBinary(message) {
    var numCharactersInBinary = decimalToBinary(message.length);

    var messageInBinary = textToBinary(message);

    var binaryString = numCharactersInBinary + messageInBinary;

    return binaryString;
}

function decrypt(coverImage) {
    // Get the binary image data
    var binaryImageData = getImageBinaryData(coverImage);
    
    // Get the number of characters in the secret message
    var secretMessageLength = getSecretMessageLength(binaryImageData);
    println("Message detected!");
    println("Message is " + secretMessageLength + " characters long");
    
    // Get the bits of the secret message
    var secretMessageBits = getSecretMessageBits(binaryImageData, secretMessageLength);
    
    // Convert the bits to text
    var secretMessage = binaryToText(secretMessageBits);
    
    // Print and return the secret message text
    println("Decrypted message: " + secretMessage + "\n");

    return secretMessage;
}


/*
 * Given the binary data of an image,
 * Returns the length of the secret message embeded in the image as a decimal value
 * The length is encoded by the low bits of the blue channels of the first 8 pixels
 */
function getSecretMessageLength(binaryData) {
    var pixelDataLength = 24;
    var numPixels = 8;
    var bits = "";
    
    for(var index = 0; index < pixelDataLength * numPixels; index += pixelDataLength) {
        var pixelData = binaryData.substring(index, index + pixelDataLength);
        bits += pixelData.charAt(pixelDataLength - 1);
    }
    
    var length = binaryToDecimal(bits);
    
    return length;
}

function getSecretMessageBits(binaryData, numCharacters) {
    // Already read the first 8 indices for the number of characters
    // Now starting at index 8, read 8 bits for each character in
    // the secret message
    var secretBinaryMessage = "";
    var pixelDataLength = 24;
    var numPixels = numCharacters * 8;
    var startIndex = pixelDataLength * 8;
    
    for(var index = startIndex; index < startIndex + pixelDataLength * numPixels; index += pixelDataLength) {
        var currentPixelData = binaryData.substring(index, index + pixelDataLength);
        var bit = currentPixelData.charAt(pixelDataLength - 1);
        
        secretBinaryMessage += bit;
    }
    
    return secretBinaryMessage;
}

/*
 * Given a pixel index and an image, returns the pixel coordinates
 * in the image that the index should be encoded inside of.
 * Returns a coordinate array [x, y]
 */
function indexToPixelCoordinates(index, image) {
    var x = index % image.getWidth();
    var y = Math.floor(index / image.getWidth());

    var coordinates = [x, y];

    return coordinates;
}

/*
 * Given a binary string of 0s and 1s, returns a string
 * of characters represeting the ASCII interpretation of those bits
 */
function binaryToText(binaryMessage)
{
    // Initialize the resulting message
    var resultMessage = "";

    // Loop over the binary message in chunks of 8 bits
    for(var i = 0; i < binaryMessage.length; i += 8)
    {
        // Get the current byte of data from the message
        var currentByte = binaryMessage.substring(i, i+8);

        // Get the decimal value of that byte
        var decimalValue = binaryToDecimal(currentByte);

        // Get the ascii character that corresponds to the decimal value
        var asciiCharacter = String.fromCharCode(decimalValue);

        // Add that character to the resulting message
        resultMessage += asciiCharacter;
    }

    // Return the resulting message
    return resultMessage;
}

/*
 * Given a string of text, returns a binary string
 * that contains the binary representation of that text
 */
function textToBinary(text)
{
    var result = "";

    // For every character in the text,
    for(var i = 0; i < text.length; i++)
    {
        // convert the character into its ASCII decimal encoding
        var numericValue = text.charCodeAt(i);

        // then convert that decimal value into its equivalent binary encoding
        var binaryValue = decimalToBinary(numericValue);

        // and combine each binary encoding to get the resulting binary string
        result += binaryValue;
    }

    return result;

}

// Converts a given decimal value into an 8 bit binary value
function decimalToBinary(decimalValue)
{
    var binaryBase = 2;
    var numBitsDesired = 8;
    var binaryValue = decimalValue.toString(binaryBase);

    while(binaryValue.length < numBitsDesired)
    {
        binaryValue = "0" + binaryValue;
    }

    return binaryValue;
}

// Converts a given binary string into a decimal value
function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
}

/*
 * Given a number, returns a new number with the same underlying bits
 * except the lowest bit is set to the given bitValue.
 */
function setLowestBit(value, bitValue) {
    if(bitValue == 0) {
        // If value is even, the lowest bit is already 0.
        if(isEven(value)) {
            return value;
        }
        // Otherwise, the lowest bit is 1. We subtract 1 to set it to 0.
        else {
            return value - 1;
        }
    }

    else {
        // If value is odd, the lowest bit is already 1
        if(!isEven(value)) {
            return value;
        }
        // Otherwise, the lowest bit is 0. We add 1 to set it to 1.
        else {
            return value + 1;
        }
    }
}

// Returns true if the given value is even, false otherwise
function isEven(value) {
    return value % 2 == 0;
}

/*
 * Given a WebImage, returns the underlying pixel data of the WebImage as a string of bits
 * The first 24 bits encode the pixel at (0, 0), the next 24 bits encode the pixel at (1, 0) and so on.
 * Row by row for the entire image.
 * Returns a String of 0s and 1s
 */
function getImageBinaryData(image) {
    var binaryString = "";
    
    for(var y = 0; y < image.getHeight(); y++) {
        for(var x = 0; x < image.getWidth(); x++) {
            var pixel = image.getPixel(x, y);
            
            var redBits = decimalToBinary(pixel[RED]);
            var greenBits = decimalToBinary(pixel[GREEN]);
            var blueBits = decimalToBinary(pixel[BLUE]);
            
            binaryString += redBits + greenBits + blueBits;
        }
    }
    
    return binaryString;
}
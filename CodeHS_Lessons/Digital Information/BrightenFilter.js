// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/about/goldengate.jpg";
var IMAGE_WIDTH = 350;
var IMAGE_HEIGHT = 250;
var IMAGE_X = getWidth() / 2 - IMAGE_WIDTH / 2;
var IMAGE_Y = getHeight() / 2 - IMAGE_HEIGHT / 2;

// Constants for the filter
var BRIGHTENING_FACTOR = 50;
var MAX_PIXEL_VALUE = 255;

// Constants for the pixel array indices
var RED = 0;
var GREEN = 1;
var BLUE = 2;

// We need to wait for the image to load before modifying it
var IMAGE_LOAD_WAIT_TIME = 50;

function start() {
    // Set up the image
    var image = new WebImage(IMAGE_URL);
    image.setSize(IMAGE_WIDTH, IMAGE_HEIGHT);
    image.setPosition(IMAGE_X, IMAGE_Y);
    
    // Add the image to the canvas
    add(image);
    
    // Wait for the image to load before applying the filter
    setTimeout(function(){
        brightenFilter(image);
    }, IMAGE_LOAD_WAIT_TIME);
}

// Filter that takes an image as a parameter 
// and brightens the pixels in the left half of the image
function brightenFilter(image) {
    for(var x = 0; x < image.getWidth() / 2; x++) {
        for(var y = 0; y < image.getHeight(); y++) {
            // Get the current pixel
            var pixel = image.getPixel(x, y);
            
            // Modify it
            var newPixel = brighten(pixel);
            
            // Update the image with the modified pixel
            image.setRed(x, y, newPixel[RED]);
            image.setGreen(x, y, newPixel[GREEN]);
            image.setBlue(x, y, newPixel[BLUE]);
        }
    }
}

// Function that takes in a pixel array [R, G, B] 
// and returns the same pixel array brightened
function brighten(pixel) {
    // Get the color values from the pixel array
    var red = pixel[RED];
    var green = pixel[GREEN];
    var blue = pixel[BLUE];
    
    // Add brightening factor to each color
    var newRed = red + BRIGHTENING_FACTOR;
    var newGreen = green + BRIGHTENING_FACTOR;
    var newBlue = blue + BRIGHTENING_FACTOR;
    
    // If the value is over 255, set it to 255
    newRed = Math.min(newRed, MAX_PIXEL_VALUE);
    newGreen = Math.min(newGreen, MAX_PIXEL_VALUE);
    newBlue = Math.min(newBlue, MAX_PIXEL_VALUE);
    
    // Modify the pixel with the brightened color values
    pixel[RED] = newRed;
    pixel[GREEN] = newGreen;
    pixel[BLUE] = newBlue;
    
    // Return the modified pixel
    return pixel;
}
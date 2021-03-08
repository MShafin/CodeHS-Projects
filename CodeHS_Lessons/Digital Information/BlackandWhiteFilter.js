// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/about/goldengate.jpg";
var IMAGE_WIDTH = 350;
var IMAGE_HEIGHT = 250;
var IMAGE_X = getWidth() / 2 - IMAGE_WIDTH / 2;
var IMAGE_Y = getHeight() / 2 - IMAGE_HEIGHT / 2;

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
    
    // Add it to the canvas
    add(image);
    
    // Wait for it to load before applying the filter
    setTimeout(function(){
        blackAndWhiteFilter(image);
    }, IMAGE_LOAD_WAIT_TIME);
}

/*
 * Filter that takes an image as a parameter 
 * and applies a black and white filter to the image. 
 * For every pixel,
 * compute the average of the R, G, and B values
 * set the R, G, and B values of this pixel all to the computed average.
 */
function blackAndWhiteFilter(image) {
    for(var x = 0; x < image.getWidth(); x++) {
        for(var y = 0; y < image.getHeight(); y++) {
            // Get the pixel at this location
            var pixel = image.getPixel(x, y);
            
            // Modify it
            pixel = grayscale(pixel);
            
            // Update the image with the modified pixel
            image.setRed(x, y, pixel[RED]);
            image.setGreen(x, y, pixel[GREEN]);
            image.setBlue(x, y, pixel[BLUE]);
        }
    }
}

/*
 * Given a pixel array of three values [r, g, b]
 * Sets each value in the array to the average of all values
 * (r + g + b) / 3
 * Returns the modified pixel array.
 */
function grayscale(pixel) {
    // Get the current color channel values
    var red = pixel[RED];
    var green = pixel[GREEN];
    var blue = pixel[BLUE];
    
    // Compute the average
    var average = (red + green + blue) / 3;
    
    // Set each color to the average
    pixel[RED] = average;
    pixel[GREEN] = average;
    pixel[BLUE] = average;
    
    // Return the modified pixel array
    return pixel;
}
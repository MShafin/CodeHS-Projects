// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/about/goldengate.jpg";
var IMAGE_WIDTH = 350;
var IMAGE_HEIGHT = 250;
var IMAGE_X = getWidth() / 2 - IMAGE_WIDTH / 2;
var IMAGE_Y = getHeight() / 2 - IMAGE_HEIGHT / 2;

// Constants for the saturation filter
// Try modfying these values and see how it affects the filter
var MAX_COLOR_VALUE = 255;
var MIN_COLOR_VALUE = 0;
var COLOR_THRESHOLD = 128;

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
        saturate(image);
    }, IMAGE_LOAD_WAIT_TIME);
}

/*
 * Filter that takes an image as a parameter 
 * and saturates each pixel in the image. 
 * For every pixel,
 * if the red channel is more than half full (over 127), max out
 * the red channel to 255, otherwise drop it down to 0. Same for
 * green and blue.
 */
function saturate(image) {
    for(var x = 0; x < image.getWidth(); x++) {
        for(var y = 0; y < image.getHeight(); y++) {
            
            // Get the current pixel
            var pixel = image.getPixel(x, y);
            
            // Saturate the pixel
            var newPixel = saturatePixel(pixel);
            
            // Update image to saturate this pixel
            image.setRed(x, y, newPixel[RED]);
            image.setGreen(x, y, newPixel[GREEN]);
            image.setBlue(x, y, newPixel[BLUE]);
        }
    }
}

// Saturates each color in the given pixel array and returns it
function saturatePixel(pixel) {
    var red = pixel[RED];
    var green = pixel[GREEN];
    var blue = pixel[BLUE];
    
    pixel[RED] = saturateColor(red);
    pixel[GREEN] = saturateColor(green);
    pixel[BLUE] = saturateColor(blue);
    
    return pixel;
}

/*
 * Given a color value, returns the saturated version of that
 * color value. 
 * If the value is in the upper half of the color range (128 - 255),
 * returns the max value of 255.
 * If the value is in the lower half of the color range (0 - 127),
 * returns the min value of 0.
 */
function saturateColor(colorValue) {
    if(colorValue >= COLOR_THRESHOLD) {
        return MAX_COLOR_VALUE;
    } else {
        return MIN_COLOR_VALUE;
    }
}
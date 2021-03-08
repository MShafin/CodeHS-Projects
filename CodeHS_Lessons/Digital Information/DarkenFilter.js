// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/about/goldengate.jpg";
var IMAGE_WIDTH = 350;
var IMAGE_HEIGHT = 250;
var IMAGE_X = getWidth() / 2 - IMAGE_WIDTH / 2;
var IMAGE_Y = getHeight() / 2 - IMAGE_HEIGHT / 2;

// Constants for the filter
var DARKENING_FACTOR = 50;
var MIN_PIXEL_VALUE = 0;

// Constants for pixel indices
var RED = 0;
var GREEN = 1;
var BLUE = 2;

// We need to wait for the image to load before modifying it
var IMAGE_LOAD_WAIT_TIME = 50;

// Filter that takes an image as a parameter 
// and darkens the pixels in the left half of the image
function darkenFilter(image) {
    for(var x = 0; x < image.getWidth() / 2; x++) {
        for(var y = 0; y < image.getHeight(); y++) {
            // Get the current pixel
            var pixel = image.getPixel(x, y);
            
            // Modify it
            pixel[RED] = Math.min(pixel[RED] - DARKENING_FACTOR, 255);
            pixel[GREEN] = Math.min(pixel[GREEN] - DARKENING_FACTOR, 255);
            pixel[BLUE] = Math.min(pixel[BLUE] - DARKENING_FACTOR, 255);
            
            // Update the image with the modified pixel
            image.setRed(x, y, pixel[RED]);
            image.setGreen(x, y, pixel[GREEN]);
            image.setBlue(x, y, pixel[BLUE]);
        }
    }
}


function start() {
    // Set up the image
    var image = new WebImage(IMAGE_URL);
    image.setSize(IMAGE_WIDTH, IMAGE_HEIGHT);
    image.setPosition(IMAGE_X, IMAGE_Y);
    
    // Add it to the canvas
    add(image);
    
    // Wait for it to load before applying the filter
    setTimeout(function(){
        darkenFilter(image);
    }, IMAGE_LOAD_WAIT_TIME);
}
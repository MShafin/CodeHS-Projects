// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/about/goldengate.jpg";
var IMAGE_WIDTH = 300;
var IMAGE_HEIGHT = 300;
var IMAGE_X = 50;
var IMAGE_Y = 10;

// Constants for the RGB status
var FONT = "20pt Arial";

// Constants for the color view area
var COLOR_VIEW_WIDTH = 100;
var COLOR_VIEW_HEIGHT = 50;
var COLOR_VIEW_X = 10;
var COLOR_VIEW_Y = getHeight() - COLOR_VIEW_HEIGHT - 10;

// Constants for the pixel array indices
var RED = 0;
var GREEN = 1;
var BLUE = 2;

// Global variables for the pixel picker
var image;
var text;
var colorView;

function start() {
    // Add all of our elements to the canvas
    image = new WebImage(IMAGE_URL);
    image.setSize(IMAGE_WIDTH, IMAGE_HEIGHT);
    image.setPosition(IMAGE_X, IMAGE_Y);
    
    colorView = new Rectangle(COLOR_VIEW_WIDTH, COLOR_VIEW_HEIGHT);
    colorView.setPosition(COLOR_VIEW_X, COLOR_VIEW_Y);
    
    text = new Text("", FONT);
    text.setPosition(COLOR_VIEW_X, COLOR_VIEW_Y - text.getHeight() / 2);
    
    add(image);
    add(text);
    add(colorView);
    
    // Set up the mouse event listener to call printPixelAt every time
    // the mouse moves.
    mouseMoveMethod(printPixelAt);
}

// Updates the colorView every time the mouse is moved to show the pixel
// color at that position
function printPixelAt(e) {
    // Get the mouse position
    var x = e.getX();
    var y = e.getY();
    
    // Translate to image coordinates
    x = x - image.getX();
    y = y - image.getY();
    
    // Get the red green and blue values of the pixel at those coordinates
    var pixel = image.getPixel(x, y);
    var red = pixel[RED];
    var green = pixel[GREEN];
    var blue = pixel[BLUE];
    
    // Update the color view
    colorView.setColor(new Color(red, green, blue));
    
    // Update the text
    var rgbString = "rgb: (" + red + ", " + green + ", " + blue + ")";
    text.setText(rgbString);
}
setDimensions(100, 255);
showGrid(false);
var redValue = 0;
var greenValue = 0;
var blueValue = 0;
for (var col = 0; col < getCols(); col++) {
    blueValue = col;
    drawColumn(col, redValue, greenValue, blueValue);
}
function drawColumn(index, r, g, b)
{
    for(var i = 0; i < getRows(); i++)
    {
        setPixelRGB(i, index, r, g, b);
    }
}
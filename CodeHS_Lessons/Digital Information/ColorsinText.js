setDimensions(6, 6);
drawColumn(0, "red");
drawColumn(1, "orange");
drawColumn(2, "yellow");
drawColumn(3, "green");
drawColumn(4, "blue");
drawColumn(5, "purple");
function drawColumn(index, color)
{
  for(var i = 0; i < getRows(); i++)
  {
    setPixel(i, index, color);
  }
}
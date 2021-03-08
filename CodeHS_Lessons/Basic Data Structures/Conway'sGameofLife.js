/*
 * This program simulates cell-like creatures living and
 * dying in a grid based on the classic simulation
 * Conway's Game of Life.
 *
 * Each cell starts off either living or dead based on a 
 * random probability. From there, the cells live and die
 * with each tick in time, based on the following model:
 *
 * If  a cell has --
 * fewer than 2 live neighbors: cell dies
 * 2 neighbors: cell stays the way it is
 * 3 neighbors: cell is born
 * 4 or more neighbors: cell dies of overcrowding
 *
 * Try manipulating the constants below and see how the
 * simulation changes!
 */

var DELAY = 200;
var ALIVE = 1;
var DEAD = 0; 
var NUM_COLS = 50;
var NUM_ROWS = 50;
var LIFE_PROB = 0.5;

var grid = new Grid(NUM_ROWS, NUM_COLS);

function start() {
    initGrid(grid);
    drawGrid(grid);
    setTimer(updateGrid, DELAY);
}

//Calculates and displays the next generation
//of cells based on the current generation. 
function updateGrid(){
    grid = computeNextGrid(grid);
    drawGrid(grid);
}

//takes an int that represents the status
//of a cell and returns the corresponding color
//ALIVE returns BLACK 
//DEAD returns WHITE
function getColor(status){
    if(status){
        return Color.BLACK;
    }else{
        return Color.WHITE;
    }
}

//returns a boolean that represents 
//whether a row number is within the grid
function rowInBounds(row){
    if(row < 0){
        return false;
    }
    if(row >= NUM_ROWS){
        return false;
    }
    return true;
}

//returns a boolean that represents 
//whether a row number is within the grid
function colInBounds(column){
    if(column < 0){
        return false;
    }
    if(column >= NUM_COLS){
        return false;
    }
    return true;
    
}

//returns the number of live neighbors a cell has
//not counting itself
function numNeighbors(row, column){
    var num_neighbors = 0;
    for(var delta_i =- 1; delta_i <= 1; delta_i++){
        for(var delta_j =- 1; delta_j <= 1; delta_j++){
            var neighbor_row = row-delta_i;
            var neighbor_col = column-delta_j;
            if(rowInBounds(neighbor_row) && colInBounds(neighbor_col)){
                if(neighbor_row != row || neighbor_col != column){
                    num_neighbors += grid.get(neighbor_row, neighbor_col);
                }
            }
            
        }
    }
    return num_neighbors;
}

//takes a current grid and returns a grid with
//the next generation of cells based on the rules
// fewer than 2 live neighbors: cell dies
// 2 neighbors: cell stays the way it is
// 3 neighbors: cell is born
// 4 or more neighbors: cell dies of overcrowding
function computeNextGrid(grid){
    var new_grid = new Grid(NUM_ROWS, NUM_COLS);
    for (var i = 0; i < grid.numRows(); i++){
        for (var j = 0; j < grid.numCols(); j++){
            var num_neighbors = numNeighbors(i, j);
            if (num_neighbors < 2){
                new_grid.set(i, j, DEAD);
            }
            if (num_neighbors == 2){
                var old_val = grid.get(i, j)
                new_grid.set(i, j, old_val);
            }
            if (num_neighbors == 3){
                new_grid.set(i, j, ALIVE);
            }
            if (num_neighbors > 3){
                new_grid.set(i, j, DEAD);
            }
        }
    }
    return new_grid;
}

//Generates a grid of cells with 
//randomly assigned life
function initGrid(grid){
    for(var i = 0; i < grid.numRows(); i++){
        for(var j = 0; j < grid.numCols(); j++){
            var isAlive = Randomizer.nextBoolean(LIFE_PROB);
            grid.set(i, j, isAlive);
        }
    }
    
}

//displays a grid of rectangles that represents
//the contents of the grid parameter. 
//live cells are represented as black rectangles
//dead cells are white rectangles
function drawGrid(grid){
    removeAll();
    var rect_height = getHeight() / NUM_ROWS;
    var rect_width = getWidth() / NUM_COLS;

    for(var i = 0; i < grid.numRows(); i++){
        for(var j = 0; j < grid.numCols(); j++){
            var isAlive = grid.get(i, j)
            if (isAlive) {
                var rect = new Rectangle(rect_width, rect_height);
                var color = getColor(isAlive);
                rect.setColor(color);
                grid.set(i, j, isAlive);
                var x = j * rect_width;
                var y = i * rect_height;
                rect.setPosition(x, y);
                add(rect);   
            }
        }
    }
}
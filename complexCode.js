/* filename: complexCode.js 
   content: Complex code that generates a maze using a randomized algorithm */

// Create a maze object
class Maze {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = [];

    // Initialize the grid with cells
    for (let i = 0; i < this.rows; i++) {
      let row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(new Cell(i, j));
      }
      this.grid.push(row);
    }

    this.currentCell = this.grid[0][0];
    this.visitedCells = [];

    // Recursive backtracking algorithm to generate the maze
    this.generateMaze(this.currentCell);

    // Additional logic for solving or displaying the maze can be added here
  }

  // Recursive function to generate the maze
  generateMaze(cell) {
    cell.visited = true;
    this.visitedCells.push(cell);

    let neighbors = this.getUnvisitedNeighbors(cell);
    while (neighbors.length > 0) {
      let randomIndex = Math.floor(Math.random() * neighbors.length);
      let randomNeighbor = neighbors[randomIndex];

      if (!randomNeighbor.visited) {
        this.removeWallBetween(cell, randomNeighbor);
        this.generateMaze(randomNeighbor);
      }

      neighbors = this.getUnvisitedNeighbors(cell);
    }
  }

  // Get unvisited neighboring cells of a given cell
  getUnvisitedNeighbors(cell) {
    let neighbors = [];

    let { row, col } = cell;
    if (row > 0 && !this.grid[row - 1][col].visited) {
      neighbors.push(this.grid[row - 1][col]);
    }
    if (row < this.rows - 1 && !this.grid[row + 1][col].visited) {
      neighbors.push(this.grid[row + 1][col]);
    }
    if (col > 0 && !this.grid[row][col - 1].visited) {
      neighbors.push(this.grid[row][col - 1]);
    }
    if (col < this.cols - 1 && !this.grid[row][col + 1].visited) {
      neighbors.push(this.grid[row][col + 1]);
    }

    return neighbors;
  }

  // Remove wall between two neighboring cells
  removeWallBetween(cell1, cell2) {
    if (cell1.row > cell2.row) {
      cell1.topWall = false;
      cell2.bottomWall = false;
    } else if (cell1.row < cell2.row) {
      cell1.bottomWall = false;
      cell2.topWall = false;
    } else if (cell1.col > cell2.col) {
      cell1.leftWall = false;
      cell2.rightWall = false;
    } else if (cell1.col < cell2.col) {
      cell1.rightWall = false;
      cell2.leftWall = false;
    }
  }
}

// Create a cell object
class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.visited = false;
    this.topWall = true;
    this.bottomWall = true;
    this.leftWall = true;
    this.rightWall = true;
  }
}

// Create a maze instance with 15 rows and 15 columns
const maze = new Maze(15, 15);

// Additional logic for solving or displaying the maze can be added here
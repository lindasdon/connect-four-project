const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'blue';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  left = () => {
    if (this.col > 0) {
    	this.col--;
    	Screen.render();
    }
  }

  right = () => {
    if (this.col < this.numCols - 1) {
    	this.col++;
    	Screen.render();
    }
  }

  up = () => {
    if (this.row > 0) {
    	this.row--;
    	Screen.render();
    }
  }

  down = () => {
    if (this.row < this.numRows - 1) {
    	this.row++;
    	Screen.render();
    }
  }

}


module.exports = Cursor;
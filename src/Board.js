import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import Random from "./Random";
import Message from "./Message";

//  game board properties:
//  number of rows of board
const nrows = new Array(5);
//  number of cols of board
const ncols = new Array(5);
// chance any cell is lit at start of game
const chanceLightStartsOn = 0.5;



// winner message ***************************** need to fix
const msg = ""

// create a board nrows high/ncols wide, each cell randomly lit or unlit
function Board() {
  const [board, setBoard] = useState(createBoard(nrows, ncols));

  function createBoard() {
    let initialBoard = [];

    // array-of-arrays of true/false values
    for (let y = 0; y < nrows.length; y++) {
      let rowVals = [];
      for (let x = 0; x < ncols.length; x++) {
        ncols[x] = Random();

        if (ncols[x] > chanceLightStartsOn) {
          rowVals.push("on");
        } else {
          rowVals.push("off");
        }
      }

      initialBoard.push(rowVals);
    }
    return initialBoard;
  }

  // check for all cells off   **************** need to change to check for 'off'
  function hasWon() {
    return board.every((row) => row.every((cell) => !cell));
  }


  // **** Need to fix this function to account for on/off variables to flip each card****

  function flipCellsAround(cellCoords) {
    setBoard((oldBoard) => {
      const [y, x] = cellCoords.split("-").map(Number);

      console.log(cellCoords);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
            boardCopy[y][x] = !boardCopy[y][x];
         }
      };

      // (deep) copy of the oldBoard
      const boardCopy = oldBoard.map((row) => [...row]);

      // flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      // return the copy
      return boardCopy;
    });
  }

  // ************************ how to return message 

  // if the game is won render Message
  if (hasWon()) {
    msg = Message("You Win!")
    return msg
  }

  //create table board
  let tableBoard = [];

  for (let y = 0; y < nrows.length; y++) {
    let tableRow = [];
    for (let x = 0; x < ncols.length; x++) {
      let cellCoords = `${x}-${y}`;
      tableRow.push(
        <Cell
          key={cellCoords}
          light={board[x][y]}
          flipCellsAroundMe={() => flipCellsAround(cellCoords)}
        />
      );
    }
    tableBoard.push(
      <tr key={y} className="tableRow">
        {tableRow}
      </tr>
    );
  }

  return (
    <div className="game">
      <h1>Lights Out</h1>
      <table>
        <tbody>{tableBoard}</tbody>
      </table>
      <div>{msg}</div>
    </div>
  );
}

export default Board;

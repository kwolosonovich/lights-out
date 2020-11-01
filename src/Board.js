import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { xor } from "lodash";
import Random from './Random'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

 const nrows = new Array(3);
 const ncols = new Array(3);
  const chanceLightStartsOn = 0.5

// function Board({ nrows, ncols, chanceLightStartsOn }) {

function Board() {
  // const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  const [board, setBoard] = useState(createBoard(nrows, ncols));

  function createBoard(nrows, ncols) {
    let initialBoard = [];

    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows.length; i++) {
      let rowVals = [];
      for (let j = 0; j < ncols.length; j++) {
        ncols[j] = Random();

        if (ncols[j] > 0.5) {
          rowVals.push(true);
        } else {
          rowVals.push(false);
        }
      }

      initialBoard.push(rowVals);
    }
    console.log(initialBoard);
    return initialBoard;
  }
  // function hasWon() {
  //   // TODO: check the board in state to determine whether the player has won.
  // }

  // function flipCellsAround(coord) {
  //   setBoard(oldBoard => {
  //     const [y, x] = coord.split("-").map(Number);

  //     const flipCell = (y, x, boardCopy) => {
  //       // if this coord is actually on board, flip it

  //       if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
  //         boardCopy[y][x] = !boardCopy[y][x];
  //       }
  //     };

  //     // TODO: Make a (deep) copy of the oldBoard

  //     // TODO: in the copy, flip this cell and the cells around it

  //     // TODO: return the copy
  //   });
  // }

  // // if the game is won, just show a winning msg & render nothing else

  // // TODO

  // // make table board

  // // TODO

  return (
    <div>
      <h1>Board</h1>
    </div>
  );
}

export default Board;

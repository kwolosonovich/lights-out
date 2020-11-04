import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ light, flipCellsAroundMe }) {

  let lightClass 
    
    if (light) {
      lightClass = "Cell on";
    } else {
      lightClass = 'Cell off';
    }

  return <td className={lightClass} onClick={flipCellsAroundMe} role="button" alt="select"/>;
}

export default Cell;
import React from "react";
import Board from "./Board";
import "./App.css";
import Home from './Home'

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="page">
      <div className="flex-container">
        <div className="App">
          <Board />
        </div>
        <div className="col2">
          <Home />
        </div>

        <div className="footer">
          <div>
            <a href="https://www.freepik.com/vectors/background">
              Background vector created by <i>freepik</i> {"; "}
              <a href="https://www.freepik.com/photos/background">
                background photo created by <i>bedneyimages</i>
              </a>
            </a>
          </div>
          <div>
            {"Icons made by"}{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              <i>Pixel perfect</i>
            </a>{" "}
            {"and"}{" "}
            <a
              href="https://www.flaticon.com/authors/iconixar"
              title="iconixar"
            >
              <i>iconixar</i>
            </a>{" "}
            {"from"}{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              <i>www.flaticon.com</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

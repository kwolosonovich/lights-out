import React from "react";
import Board from "./Board";
import "./App.css";
import Home from './Home'
import Footer from './Footer'

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="flex-container">
      <div className="App">
        <Board />
      </div>
      <div className="col2">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

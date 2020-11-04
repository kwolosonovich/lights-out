import React from "react";
import "./Message.css"
import replay from './replay.png'

let restart = () => {
    window.location.reload(false)
}

const Message = (msg) => {
    return (
      <>
        <h2 className="msg">
          {msg}
          <button className="restart" onClick={restart}>
            <img src={replay} alt={replay} />
          </button>
        </h2>
      </>
    );
}

export default Message
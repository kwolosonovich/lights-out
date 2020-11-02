import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="https://www.freepik.com/vectors/background">
          Background vector created by <i>freepik</i> {"; "}
        </a>
        <a href="https://www.freepik.com/photos/background">
          background photo created by <i>bedneyimages</i>
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
        <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
          <i>iconixar</i>
        </a>{" "}
        {"from"}{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          <i>www.flaticon.com</i>
        </a>
      </div>
    </div>
  );
};

export default footer;

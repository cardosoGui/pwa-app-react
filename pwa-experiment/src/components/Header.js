import React from "react";
import "../css/Header.css";

function Header(props) {
  return (
    <div className="App-header">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;

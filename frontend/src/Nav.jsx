import React from "react";
import "./Nav.css";

let word3 = "high";

function addWords() {
  //let, var, or const

  let word4 = "bus";

  let addedWords = word3 + word4;
  return addedWords;
}

function Nav() {
  return (
    <div className="nav-container">
      <a href="http://localhost:3000/post" className="nav-container__anchor">
        post
      </a>
      <a href="http://localhost:3000/feed" className="nav-container__anchor">
        feed
      </a>
      <a href="http://localhost:3000/jobs" className="nav-container__anchor">
        jobs
      </a>
      <a href="http://localhost:3000/message" className="nav-container__anchor">
        message
      </a>
    </div>
  );
}

export default Nav;

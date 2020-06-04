import React from "react";
import "./App.css";

import Card from "./components/Card";
import img_cap from './img/img_cap.png';

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Card
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          buttonName="Go somewhere"
        >
          <img src={img_cap} className="image" alt="cap_image"></img>
        </Card>

        <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
          buttonName="Go somewhere"
        />
      </div>{" "}
    </div>
  );
}

export default App;

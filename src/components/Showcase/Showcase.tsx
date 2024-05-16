import React from "react";
import "./Showcase.css";
import Title from "../Title/Title";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div>
          <Title
            types="showcase"
            header="Join Us"
            headline="A Great Place to Receive Care"
            subHeadline="Medical Recover is most focused in helping you 
            discover your most beauiful smile"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

import React from "react";
import "./Showcase.css";
import Title from "../Title/Title";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="grid grid-cols-2 justify-center items-center overflow-hidden">
          <Title
            types="showcase"
            header="Join Us"
            headline="A Great Place to Receive Care"
            subHeadline="Medical Recover is most focused in helping you 
            discover your most beauiful smile"
          />
          <img src="/imgs/showcase-doctor.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

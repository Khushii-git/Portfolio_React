import React from "react";
import "./Services.css";

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from "../Cards/Cards";
import Resume from'./resume1.pdf';
const Services = () => {
  return (
    <div className="services">
      {/* Left Section */}
      <div className="awesome">
        <span>Crafting Solutions with</span>
        <span>Code</span>
        <span>
          Building efficient and innovative solutions using Java, SQL,
          <br />
          and modern web technologies, turning ideas into functional digital experiences.
        </span>
        <br></br>
        <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* Right Section - Cards */}
      <div className="cards">
        <div className="card2">
            <Cards
            emoji={Glasses}
            heading={'Full Stack Developer'}
            detail={'Building robust applications using Java, Spring Boot, SQL, and React.'}
            />
        </div>

        <div className="card1"> 
            <Cards
            emoji={HeartEmoji}
            heading={'Web Development'}
            detail={'Creating responsive and interactive websites using HTML, CSS, JavaScript, and React.'}
            />
        </div>

        <div className="card3">
            <Cards
            emoji={Humble}
            heading="AI & Problem Solving"
            detail="Applying basic AI concepts and algorithms to solve real-world problems."
            />
       </div>
       <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Div from "../Div/Div";
import Github from "../../img/github.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
function Intro() {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
    <div className="i-left">
      <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
        <span>Andrew Thomas</span>
        <span>
          Frontend Developer with high level of experience in web designing
          and development, producting the <br /> Quality work
        </span>
      </div>
        <button className="button i-button" style={{width:"11vw", height:"6vh"}}>Hire me</button>

      <div className="i-icons">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </div>
    <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <img src={glassesimoji} alt=""
      />
      <div className="floating-div">
        <Div img={crown} text1="Web" text2="Developer" />
      </div>

      <div className="floating-div">
        <Div img={thumbup} text1="Best Design" text2="Award" />
      </div>

      <div className="blur"></div>
      
    </div>
  </div>
  )
}

export default Intro

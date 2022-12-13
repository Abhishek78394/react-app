import React from "react";
import "./Portfolio.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
const Portfolio = () => {
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <div className="portfolio-slider">
        <div className="slide">
          <img src={Sidebar} alt="" />
        </div>
        <div className="slide">
          <img src={Ecommerce} alt="" />
        </div>
        <div className="slide">
          <img src={MusicApp} alt="" />
        </div>
        <div className="slide">
          <img src={HOC} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

export  const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abhishek@@gmail.com</span>
        <div className="f-icons">
        <Insta color="white" size={"4vw"} />
          <Facebook color="white" size={"4vw"} />
          <Gitub color="white" size={"4vw"} />
        </div>
      </div>
    </div>
  );
};

// export default Footer;

import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {

    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>
                        <li>Serivces</li>
                        <li>Experience</li>
                        <li> Protfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>

            </div>
        </div>
    )
}

export default Navbar

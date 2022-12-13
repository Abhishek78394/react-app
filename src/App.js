import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import { ContactUs } from "./components/Contact/ContactUs";
import {Footer } from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
   <ContactUs/>
   <Footer/>
    </div>
  );
}

export default App;

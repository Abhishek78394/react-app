import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { useState } from 'react';
import { themeContext } from "../../Context";

export const ContactUs = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_veq0a2n', 'template_tmqr3mw', form.current, 'nCOk97N1rHGHoKy76')
      .then((result) => {
          console.log(result.text );
          setDone(true);
      }, (error) => {
          console.log(error.text );
      });
  };
  const [done, setDone] = useState(false)
  return (
    <div className="container"  >
     <div className="c-left">
      <h1 style={{color: darkMode?'white': ''}}>Get in Touch</h1>
<p>Contact me</p>
     </div>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Name' />
      <input type="email" name="user_email" placeholder='Email' />
      <textarea name="message" placeholder='Message' rows="5" cols="50" />
      <button style={{marginBottom:"19px"}} className='button'>submit</button>
      <br  />
     
      <span className='thank'>{done && "Thanks for Contacting me"}</span>
    </form>

    </div>
  );
};
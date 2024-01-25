import React, { useRef } from 'react'
import './contact.css'
import { AiFillGithub,AiFillLinkedin,AiOutlineLeft } from "react-icons/ai";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rkdjnnh', 'template_x17o3ke', form.current, '4CN7gWn8UVVz-5RTL')
      .then((result) => {
          console.log(result.text);
          alert("Email sent !!")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<section id='contact'>
        <div className='container'>
             <div className='contactHead'>
             <h1>Contact</h1>
             </div>
            <form  ref={form} onSubmit={sendEmail}>
            <input className='inputName' name="user_name" type="text" placeholder="Enter Your Name"/>
            <input className='inputEmail' name="user_email" type="email" placeholder="Enter Your Email"/>
            <textarea className='inputTextarea' name="message" rows="5"  placeholder="Write Somthing"></textarea>
            <button className='form-btn' type="submit">Send</button>
        </form>
        <ul className='social'>
            <li><a href='https://github.com/mohamad-alghoul/'><AiFillGithub/></a></li>
             <li><a href='https://www.linkedin.com/in/mohamad-alghoul/'><AiFillLinkedin/></a></li>
            <li><AiOutlineLeft /> <span>...check more</span></li>
        </ul>
        </div>
  </section>
  )
}

export default Contact
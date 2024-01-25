
import React from 'react'
import './intro.css'
import my from "../../assets/image.png"
import btnHire from "../../assets/hireme.png"
import cv from "../../assets/cv.pdf"



const Intro = () => {


  return (
   <section id='home'>
    <div className='introconteant'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'M <span className='introName'>Mohamad</span><br></br>Frontend Developer</span>
        <p className='introPara'>I am a web developer and have extensive experience in creating websites, 
         <br></br>My experience is creating and designing websites, </p>
         <a href={cv} download="cv"> <button className='btni'><img src={btnHire} alt="hire"></img>Hire me</button>
</a>
    </div>
    <div className='introImg'>
        <img src={my} alt='me' />
    </div>
   </section>
  )
}

export default Intro

import React from 'react'
import "./about.css"
import { skills } from '../../data'
const About = () => {
  return ( <section id='about'>
    <div className='container'>
    <div className='aboutHead'>
        <h1>What I Do </h1>
        <p>I respect my superiors at work and show loyalty to my job and the company ,
         I present positive attitudes towards the employer and my colleagues in the company , 
         I put organizational business interest before personal interest , 
         I abide by the limits of my duties and position honestly ,
          I am a hardworking and reliable person , I can solve problems ,
           I'm serious at work , I am always energetic and eager to learn new skills ,
            I am flexible in my time being able to work in the evenings and on the weekends.
           </p>
    </div>
    <div className='skillsBars'>
    {skills.map((skill,index)=>{
const {img,text,des}=skill
return <div key={index} className='skillsBar'>
<img  src={img} alt={text}/>
<div className='skillText'>
<h3>{text}</h3>
<p>{des}</p>
</div>
</div>
    }
    )}
       
    </div>
    </div>
  </section>
  )
}

export default About
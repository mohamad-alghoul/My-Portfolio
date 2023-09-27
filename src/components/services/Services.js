import React from 'react'
import { services } from '../../data'
import  "./services.css"

const Services = () => {
  return (
    <section id='services'>
     <div className='ServicesHead'>
        <h1>Services</h1>
   </div>
    <div className='servicesBox'>
    {services.map((serv,index)=>{
      const {icon,head,text}= serv;
return <div key={index} className='servItem'>
  <span className='servIcon'>{icon}</span>
  <h3>{head}</h3>
  <p>{text}</p>
</div>

    }
    )}
       
    </div>
  </section>
  )
}

export default Services
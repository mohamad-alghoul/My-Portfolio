import React from 'react'
import { portfolio } from '../../data'
import { Link } from '@mui/material';
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id='portfolio'>
     <div className='portHead'>
        <h1>Portfolio</h1>
   </div>
    <div className='portBox'>
    {portfolio.map((serv,index)=>{
      const {img,name,url}= serv;
return <div key={index} className='portItem'>
         <div className='img'>
            <img src={img} alt={name} />
         </div>
         <div className='infoPorto'>
         <h2>{name}</h2>
         <Link className="project" href={url}>Show more</Link>
         </div>
</div>

    }
    )}
       
    </div>
  </section>
  
  )
}

export default Portfolio
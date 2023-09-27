import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./sidebar.css"
import { useGlobalContext } from '../../context'
import { Link } from 'react-scroll';
import sublinks from '../../data'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
           const {name,icon}= item
            return (
              <article className='link' key={index}>
              <Link
               activeClass='active' 
               to={name} 
               spy={true}
               offset={-100} 
               duration={500} 
                className='myButtom' 
                // when i click on the like it will close the sidebar 
                onClick={()=>closeSidebar(false)}>{icon}{name}</Link>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}
export default Sidebar
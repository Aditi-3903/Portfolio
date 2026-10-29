import React from 'react'
import Project from '../components/ProjectData'

const Projects = () => {
  return (
   <>
  <div className='bg-white text-black'>
     <div className="main-container py-28 ">
    <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-normal tracking-tight text-center'>Projects</h2>
    <div className='grid md:grid-cols-2 gap-8 lg:mt-16'>
        {Project.map(({ id, name, image, link }) => (
            <a key={id} href={link} className="overflow-hidden flex flex-col ">
            <div className='overflow-hidden group h-full'>
                <img src={image} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <span className='uppercase leading-[1.4] l:text-2xl font-heading mt-4 '>{name}</span>
            </a>
          ))}
    </div>
   </div>
  </div>
   </>
  )
}

export default Projects
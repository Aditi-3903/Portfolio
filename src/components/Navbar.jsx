import React, { useRef, useState } from 'react'
import Logo from '../assets/images/Logo.avif'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  // gsap hook

  useGSAP(()=>{
    gsap.from(navbarRef.current,{
      opacity:0,
      y:-100,
      duration:0.6
    })
  }

  );
  return (
    <div>
        <nav ref={navbarRef} className='fixed top-0 w-full mix-blend-difference z-30'>
            <div className='main-container py-6 flex justify-between items-center '>
                <img src={Logo} alt='Logo'className='h-15 w-auto'></img>
                <div onClick={()=>{
                  setMenuOpen(!menuOpen)
                }} className='flex flex-col gap-1.5 cursor-pointer'>
                    <span className ={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen? "rotate-45 translate-y-1":''}`}></span>
                      <span className ={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen? "-rotate-45 -translate-y-1":''}`}></span>
                </div>
            </div>
        </nav>

        {/* full screen menu  */}
        <div onClick={()=>setMenuOpen(false)} className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-4 transition-transform duration-500 ${menuOpen?"translate-y-0":"-translate-y-full"} `}>
        <Link to="/"className='menu-link'>Home</Link>
        <Link to="/projects"className='menu-link'>Projects</Link>
        <Link to="/contact"className='menu-link'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {
  const aboutRef = useRef(null)

  useGSAP(()=>{
    SplitText.create(".about-text",{
      type:"lines, chars",
      onSplit(self){
        gsap.set(self.chars,{
          opacity:0.25
        });
        gsap.to(self.chars,{
          opacity:1,
          stagger:0.5,
          scrollTrigger:{
            trigger:aboutRef.current,
            start:"top 70%",
            end:"center center",
            scrub:1
          }
        })
      }

    })
  })

  return (
    <>
    <div ref={aboutRef} className='relative z-20 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]'>
        <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl lg:text-4xl  leading-[1.23] text-justify'>

        With skills in HTML, CSS, JavaScript, React, Tailwind CSS, and GSAP, I build interactive websites that focus on clean design, smooth animations, and responsive layouts.

        I also enjoy designing website interfaces using Figma and exploring new technologies to improve my skills.


        </div>

        </div>
        </>
  )
}

export default About
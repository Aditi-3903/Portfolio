// import { useRef } from "react";
// import GradientButton from "../components/GradientButton";
// import Projects from "../components/ProjectData";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from 'gsap/ScrollTrigger';


// gsap.registerPlugin(useGSAP,ScrollTrigger);



// const Work = () => {

//   const workRef = useRef(null);
//   const projectRef = useRef(null);

//  useGSAP(()=>{
//   const projectWidth = projectRef.current.scrollWidth;
//   const scrollDistance = projectWidth - window.innerWidth; 

//   gsap.to(projectRef.current,{
//     x:-scrollDistance,
//     ease:"linear",
//     scrollTrigger:{
//       trigger:workRef.current,
//       start:"center center",
//       end:()=>`+=${projectWidth}`,
//       pin:true,
//       scrub:1,
//       anticipatePin:1,
//       invalidateOnRefresh:true
//     }
//   })
//  });
  

//   return (
//     <>
//       <div ref={workRef} className="h-screen bg-white text-black py-24 lg:py-40 ">
//         {/* title wrapper */}

//         <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
//           <div className="max-w-xl">
//             <h3 className="mb-3">Selected Work</h3>
//             <p className="text-lg lg:text-lg">
//               A showcase of my selected projects-designed to inspire, engage,
//               and deliver real results.
//             </p>
//           </div>
//           <GradientButton text="Explore All" link="/projects" className="btn-light" />
//         </div>

//         {/* Project Wrapper */}

//         <div ref={projectRef}>
//           <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6 ">
//           {Projects.map(({ id, name, image, link }) => (
//             <a key={id} href={link} className="relative rounded-2xl w-full min-w-85 lg:min-w-lg h-64 lg:h-80 block overflow-hidden group ">
//               <img src={image} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
//               <span className="absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
//             </a>
//           ))}
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Work;

import { useRef } from "react";
import GradientButton from "../components/GradientButton";
import Projects from "../components/ProjectData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(
    () => {
      const track = projectRef.current;
      const section = workRef.current;

      if (!track || !section) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: workRef }
  );

  return (
    <section
      ref={workRef}
      className="min-h-screen bg-white text-black py-24 lg:py-40"
    >
      <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <div className="max-w-xl">
          <h3 className="mb-3">Selected Work</h3>
          <p className="text-lg">
            A showcase of my selected projects—designed to
            inspire, engage, and deliver real results.
          </p>
        </div>

        <GradientButton
          text="Explore All"
          link="/projects"
          className="btn-light"
        />
      </div>

      <div className="overflow-hidden">
        <div
          ref={projectRef}
          className="flex w-max gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6"
        >
          {Projects.map(({ id, name, image, link }) => (
            <a
              key={id}
              href={link}
              className="relative block h-64 w-[340px] shrink-0 overflow-hidden rounded-2xl group lg:h-80 lg:w-[500px]"
            >
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <span className="absolute top-4 right-4 rounded-full bg-black px-5 py-1 font-heading text-sm uppercase leading-[1.4] text-white lg:text-lg">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

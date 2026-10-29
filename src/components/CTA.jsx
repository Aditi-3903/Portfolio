import React, { useRef } from "react";
import GradientButton from "./GradientButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(ctaRef.current, {
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "center bottom",
        end: "60% bottom",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div ref={ctaRef}>
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center ">
          <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight mix-blend-difference">
            Creative Design, Modern Web Development, Smooth Animations &
            Responsive Layouts.<br/>
            <span className="bg-gray-800"> Let's bring your vision to life!</span>
          </h4>
          <GradientButton text="Book a Call" link={<Footer />} />
        </div>
      </div>
    </>
  );
};

export default CTA;

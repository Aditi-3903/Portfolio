import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-white text-black ">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Details</h3>
        </div>
      </div>

      <div className="relative">
        <div className=" bg-black text-white pt-16 lg:pt-20 pb-140 sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left section */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Web<br/>Development</h2>
            </div>
            {/* right side */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                    I build modern, responsive, and interactive websites with clean code, smooth functionality, and user-friendly layouts.
                    </p>
                    </div>  
                
                          </div>
        </div>
         <div className=" bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-77 sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left section */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">UI/UX Design<br/> </h2>
            </div>
            {/* right side */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                   I design intuitive and visually engaging website interfaces that focus on usability, consistency, and a better user experience.
                    </p>
                    </div>  
                
                          </div>
        </div>
         <div className=" bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* left section */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Website Animations<br/> </h2>
            </div>
            {/* right side */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                    I add smooth animations and interactive elements to make websites more engaging, dynamic, and visually appealing.
                    </p>
                    </div>  
                
                          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

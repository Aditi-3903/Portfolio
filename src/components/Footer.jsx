import React from "react";
import Logo from "../assets/images/Logo.avif";
const Footer = () => {
  return (
    <>
      {/* divider */}
      <div className="max-w-375 m-auto h-px bg-white opacity-10 "></div>
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <img src={Logo} alt="" className="h-17 object-cover" />
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">UI/UX Design</a>
            </li>
            <li>
              <a href="">Responsive Website </a>
            </li>
            <li>
              <a href="">Web Animation</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Mon-Fri: 9:00 to 5:00</a>
            </li>
            <li>
              <a href="">24/7 WhatsApp & Email</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">ad@gmail.com</a>
            </li>
            <li>
              <a href="">+1 210 123 4509</a>
            </li>
          </ul>
        </div>

        <div className="max-w-375 m-auto h-px bg-white opacity-10 "></div>

      
      </footer>
        <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
          <div className="text-base lg:text-lg ">© 2026 AD | All rights reserved.</div>
          <div className="flex gap-3 justify-center md:justify-end">
            <a href="https://github.com/Aditi-3903" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.2V9h2.85v1.29h.04c.4-.74 1.37-1.52 2.82-1.52 3.01 0 3.56 1.98 3.56 4.55v5.13Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
    </>
  );
};

export default Footer;

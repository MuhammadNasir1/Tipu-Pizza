
import {
    FaFacebookF,
    FaTiktok,
    FaInstagram,
 
  } from "react-icons/fa";
  import { IoIosArrowUp } from "react-icons/io";
  import { useState, useEffect } from 'react';
function Footer() {
    const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };
    return (
 
 <>
  isVisible && (
      <div
        className="fixed bottom-10 right-8 bg-primary h-20 w-20 rounded-full flex justify-center items-center text-white text-4xl font-bold cursor-pointer shadow-lg"
        onClick={scrollToTop}
      >
        <IoIosArrowUp />
      </div>
       <div className="bg-primary text-white py-2 px-4">
            <div className="flex justify-between items-center  ">
              <span className="text-xl font-semibold">Tipu Pizza  Kebab</span>
              <div className="flex gap-6">
                <a className="text-2xl"
                  href="https://www.facebook.com/TipuPizzaKebab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF  />
                </a>
                <a className="text-2xl"
                  href="https://www.tiktok.com/@tipupizzakebab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok  />
                </a>
                <a className="text-2xl"
                  href="https://www.instagram.com/tipupizzakebab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram  />
                </a>
               
              </div>
            </div>
          </div>
    
    <footer className="bg-primary  py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose text-white font-semibold">© Tipu Pizza Kebab . All rights reserved.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="" className="text-[15px] text-white  font-semibold">Terms of Service</a></li>
          <li><a href="" className="text-[15px] text-white  font-semibold">Privacy Policy</a></li>
          <li><a href="" className="text-[15px] text-white  font-semibold">Contact</a></li>
        </ul>
      </div>
    </footer></>
  );
}

export default Footer;

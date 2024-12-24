import instagram from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkdin from "../assets/icons/linkdin.svg";
function Footer() {
  return (
    // <footer classNameName="bg-white shadow-xl text-black font-semibold py-4 px-4 font-sans tracking-wide">
    //   <div classNameName="text-center">
    //     <h6 classNameName="text-lg text-gray-700">Stay connected with us:</h6>

    //     <ul classNameName="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
       
    //       <li>
    //         <a href="javascript:void(0)">
    //           <img classNameName="w-8 h-8" src={facebook} alt="facebook" />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="javascript:void(0)">
    //           <img classNameName="w-8 h-8" src={linkdin} alt="linkedin" />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="javascript:void(0)">
    //           <img classNameName="w-8 h-8" src={instagram} alt="instagram" />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="javascript:void(0)">
    //           <img classNameName="w-8 h-8" src={twitter} alt="twitter" />
    //         </a>
    //       </li>
    //     </ul>
    //     <div>
    //         <hr classNameName="border-black  mb-4" />
    //     </div>
    //     <p classNameName="text-base font-semibold">
    //       © Tipu . All rights reserved.
    //     </p>
    //   </div>
    // </footer>
    <footer className="bg-primary  py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose text-white font-semibold">© Tipu Pizza Kebab . All rights reserved.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="javascript:void(0)" className="text-[15px] text-white  font-semibold">Terms of Service</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] text-white  font-semibold">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" className="text-[15px] text-white  font-semibold">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import "../App.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
function ContactUs() {
  return (
    <>
      <Navbar />
      <div className=" lg:grid grid-cols-1 flex flex-col  lg:grid-cols-2 gap-8 py-20 max-w-8xl lg:mx-auto px-4">
        <div className="w-full">
        <div className="md:grid flex flex-col md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="border-4 border-primary flex flex-col justify-center items-center py-6 px-2 rounded-lg">
            <div className="h-24 w-24 text-white text-[50px] rounded-full bg-primary flex justify-center items-center">
              <IoLocationSharp />
            </div>
            <h2 className="text-2xl font-semibold text-primary mt-3">
              Address
            </h2>
            <p className="text-lg text-gray-500 font-semibold">
              2 Curzon St, Derby DE1 1LL
            </p>
          </div>

          <div className="border-4 border-primary flex flex-col justify-center items-center py-6 px-2 rounded-lg">
            <div className="h-24 w-24 text-white text-[50px] rounded-full bg-primary flex justify-center items-center">
              <MdEmail />
            </div>
            <h2 className="text-2xl font-semibold text-primary mt-3">Email</h2>
            <p className="text-lg text-gray-500 font-semibold">
              tipupizzakebab@gmail.comL
            </p>
          </div>

          <div className="col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.8039332572916!2d-1.4816794!3d52.922724699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f1f801b9feb7%3A0xcba458a3a606b604!2sTipu%20Balti!5e1!3m2!1sen!2s!4v1735130836118!5m2!1sen!2s"
              className="w-full h-56  rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        </div>

        <div className="form">
          <div>
            <h2 className="font-semibold text-2xl ">Have Question?</h2>
            <p className=" text-gray-500 mt-4">
              For all enquires, please contact us and one of our delightful team
              will be be happy to help.
            </p>

            <form>
              <input
                type="text"
                className="w-full border-2 border-gray-400 py-3 px-6 placeholder:text-gray-500 mt-6 rounded-lg"
                placeholder="FUll  Name"
              />
              <input
                type="text"
                className="w-full border-2 border-gray-400 py-3 px-6 placeholder:text-gray-500 mt-6 rounded-lg"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="w-full border-2 border-gray-400 py-3 px-6 placeholder:text-gray-500 mt-6 rounded-lg"
                placeholder="Phone No"
              />
              <textarea
                className="w-full border-2 border-gray-400 h-[180px] py-3 px-6 placeholder:text-gray-500 mt-6 rounded-lg"
                placeholder="Message"
              ></textarea>
              <div className="flex justify-center">
                <button className="bg-primary text-white px-4 py-3 font-semibold mt-5 rounded-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-2 bg-primary  rounded-2xl p-6">
         <div>
         <h2 className="text-white font-bold text-center text-4xl">
            Our Timing
          </h2>
          <div className="flex gap-10 mt-6 justify-around max-w-4xl mx-auto">
            <div className="text-white flex-col flex items-center">
              <h3 className="font-semibold text-2xl">Monday - Friday</h3>
              <p>12:00 PM - 10:00 PM</p>
            </div>
            <div className="text-white flex-col flex items-center">
              <h3 className="font-semibold text-2xl">Saturday - Sunday</h3>
              <p>12:00 PM - 11:00 PM</p>
            </div>
          </div>
         </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

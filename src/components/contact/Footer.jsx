import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import "./Footer.css";
//import MapImage from '../images/img1.jpg'; // Import the square image here

const Contact = () => {
  const goFb = () => {
    window.location.replace(
      "https://www.facebook.com/NIT.Silchar.Assam.India/"
    );
  };

  const goIg = () => {
    window.location.replace("https://www.instagram.com/nss_nits/");
  };

  return (
    <div className='footer w-100'>
      <div className='footer-container'>
        <div className='info sm:flex-row sm:justify-start flex-col'>
        
          <div className='left h-full sm:w-1/3 mb-6 p-20'>
            <div className='address sm:px-4 mb-6 '>
              <h3 className='heading sm:text-xl sm:mb-5 mb-2'>Address</h3>
              <p>
                NIT SILCHAR
                <br></br>
                Silchar-788010
                <br></br>
                Assam, IN
              </p>
            </div>
            <div className='contact-us sm:p-4 mb-6 '>
              <h3 className='heading text-xl mb-2'>Contact Us</h3>
              <div className='contact-icon'>
                <p className='flex items-center gap-3'>
                  <IoMailOutline /> mail@gmail.com
                </p>
                <p className="flex  items-center gap-3">
                  <IoCallOutline /> +91-9999900000
                </p>
              </div>
            </div>
          </div>
          <div className='middle sm:w-1/3 h-full mb-8 p-20'>
            <div className='follow-link'>
              <h3 className='heading text-xl mb-2'>Follow Us</h3>
              <div className='iconsss flex gap-4 items-center'>
                <FaFacebookF
                  className="icon fb mb-2"
                  size={20}
                  onClick={goFb}
                />
                <FaInstagram
                  className="icon ig mb-2"
                  size={25}
                  onClick={goIg}
                />
              </div>
            </div>
            <div className="imp-link py-4">
              <h3 className="heading text-base">Important Links</h3>
              <ul className="listing py-2">
                <li>link_1</li>
                <li>link_2</li>
                <li>link_3</li>
              </ul>
            </div>
          </div>
          <div className='right sm:w-1/3 mb-5'>
            <div className='text-xl mb-5'> Contact Us Dirtectly </div>
            {/* <div className="bar w-12 bg-slate-600 mx-12 sm:h-2  rounded-md mb-8"></div> */}
            <div className='flex-col my-2 flex '>
              <h1 className='text-xs'>Your Name*</h1>
              <input
                type="text"
                placeholder="Name"
                className="border cursor-pointer  text-black  placeholder:text-xs placeholder:p-2 rounded-md h-9 w-3/4 border-gray "
              />
            </div>
            <div className="email flex my-2 flex-col ">
              <h1 className="text-xs">Your Email*</h1>
              <input
                type="text"
                placeholder="Email "
                className="border cursor-pointer  text-black placeholder:text-xs placeholder:p-2 rounded-md  h-9  w-3/4 border-gray "
              />
            </div>
            <div className="Phone flex-col  my-2 flex ">
              <h1 className="text-xs">Phone</h1>
              <input
                type="text"
                placeholder="Phone"
                className="border cursor-pointer text-black  placeholder:text-xs placeholder:p-2 rounded-md  h-9 w-3/4  border-gray "
              />
            </div>
            <div className="message flex-col my-2 w-3/4 flex ">
              <h1 className="text-xs">Your Message</h1>
              <input
                type="text"
                placeholder="YOUR MESSAGE"
                className="border cursor-pointer  text-black placeholder:text-xs placeholder:p-2 rounded-md h-20 placeholder:h-full  border-gray  "
                name=""
                id=""
              />
            </div>
            <div className='flex  w-3/4'>
              <button className='submit  p-2 rounded-md my-3 text-black sm:mx-auto border-black-950 border-blue-600 cursor-pointer bg-blue-400 hover:bg-blue-600'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

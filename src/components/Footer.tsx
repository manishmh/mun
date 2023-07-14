import React from "react";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    //<>
      <div id = "footer" className="bg-[url('/footer/green_bg.png')] w-full h-full bg-no-repeat bg-cover">
        <footer className="g-gradient-to-b from-black to-black via-blue-900 mx-auto px-4 py-6 rounded-lg" style={{ margin: "0 10%" }}>
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <h3 className="text-2xl text-center font-extrabold text-white">
                  CONTACT US
                </h3>
              </div>
              <div className="mt-4 flex justify-start">
                <div className="w-full rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="270"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1869.6267498966815!2d85.811784058212!3d20.34954249914489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8f99fc78767%3A0x9eacdaac84524cdd!2sKIIT%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1658118103340!5m2!1sen!2sin"
                    allowFullScreen
                    style={{ borderRadius: "30px" }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-6">
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4">
                <h4 className="text-lg font-bold text-white">PHONE</h4>
                <p className="text-white">
                  <a href="tel: +917008051628">
                    +91-7008051628 (Shivram Krishna){" "}
                  </a>{" "}
                </p>
                <p className="text-white">
                  <a href="tel: +919431591145">
                    +91-9431591145 (Kshitij Singh){" "}
                  </a>
                </p>
                <p className="text-white">
                  <a href="tel: +917735127138">
                    +91-7735127138 (Satyajeet Das){" "}
                  </a>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4">
                <h4 className="text-lg font-bold text-white">Address</h4>
                <p className="text-white">Student Activity Centre</p>
                <p className="text-white">
                  Campus 13 KIIT (Deemed to be University)
                </p>
                <p className="text-white">Bhubaneswar, Odisha-751024</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4">
                <h4 className="text-lg font-bold text-white">Email</h4>
                <p className="text-white">
                  <a href="mailto:kiitmun@gmail.com">kiitmun@gmail.com</a>{" "}
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4">
                <h4 className="text-lg font-bold text-white">Social Media</h4>
                <div className="flex items-center">
                  <FaFacebook style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a
                    href="https://www.facebook.com/kiitmun/"
                    className="text-white"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center">
                  <FaInstagram style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a
                    href="https://www.instagram.com/instakiitmun/"
                    className="text-white"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center">
                  <FaTwitter style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a
                    href="https://twitter.com/kiitmun"
                    className="text-white"
                  >
                    Twitter
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a
                    href="https://www.linkedin.com/example"
                    className="text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-right hidden lg:block">
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
                <p>
                  <a href="#" className="text-white block">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white block">
                    Committees
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white block">
                    Executive board
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white block">
                    Important Dates
                  </a>
                </p>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-left text-white-700 mt-4">© 2023 KIIT MUN. All rights reserved.</p>
              </div>
              <div className="flex gap-2 ">
                <img
                  className="w-8 h-8 md:w-12 md:w-12"
                  src="/Logo/MUN_logo.png"
                  alt="Image 1"
                />
                <img
                  className="w-8 h-8 md:w-12 md:w-12"
                  src="/Logo/KIIT_Logo.png"
                  alt="Image 2"
                />
                <img
                  className="w-8 h-8 md:w-12 md:w-12"
                  src="/Logo/Ksac_logo.png"
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    //</>
  );
};

export default Footer;

import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";
import { BsChatRightTextFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-random">
        <div className="relative bg-gradient-to-r from-[#00a14b] via-[#00a14b]">
          <div className="relative ">
            <div className="px-4 py-24 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-64 h-[90vh] flex flex-col justify-center content-center">
              <div className="">
                <div className="w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-once="true"
                    className="max-w-lg mb-6 text-5xl font-semibold tracking-tight text-center text-white sm:text-left md:text-5xl lg:text-6xl xl:text-7xl sm:leading-none bigsect underlined underlined--thin"
                  >
                    Personal Chef Experience
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="max-w-xl mb-4 text-sm font-normal text-center text-white md:text-sm lg:text-base sm:text-left"
                  >
                    Accra traffic jam is ready, can you stop the one that’s
                    missing it stereo ? Explore our saucy or dry flavors ranging
                    from mid-to-hot, in doice or savory. Browse our menu
                  </p>
                  <div className="flex flex-wrap sm:flex-nowrap">
                    <a
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      href="https://wa.me/message/E3A3VLWVVBTSK1"
                      className="relative inline-flex items-center justify-center p-4 px-12 py-4 mx-auto overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md sm:mx-0 group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="#00a14b"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        Whatsapp Us
                      </span>
                      <span className="relative invisible">Button Text</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="mailto:add.atiemo@gmail.com">
            <BsChatRightTextFill
              size={50}
              className="fixed text-white animate-bounce bottom-5 right-14"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

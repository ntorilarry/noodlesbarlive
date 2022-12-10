import React from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-random">
        <div className="relative bg-gradient-to-r from-[#00a14b] via-[#00a14b]">
          <div className="relative ">
            <div className="px-4 py-24 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-64 h-[90vh] flex flex-col justify-center content-center">
              <div className="">
                <div className="w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 text-center sm:text-left text-5xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl sm:leading-none bigsect underlined underlined--thin">
                    Personal Chef Experience
                  </h2>
                  {/* <img
                    className="line mb-6 mx-auto lg:mx-0"
                    src="https://i.postimg.cc/ZRdtVH1K/title-line-2.png"
                    alt=""
                  /> */}
                  <p className="max-w-xl mb-4 font-normal text-sm text-white md:text-sm lg:text-base text-center sm:text-left">
                    Accra traffic jam is ready, can you stop the one that’s
                    missing it stereo ? Explore our saucy or dry flavors ranging
                    from mid-to-hot, in doice or savory. Browse our menu
                  </p>
                  <div className="flex flex-wrap sm:flex-nowrap">
                    <a
                      href="https://wa.me/message/E3A3VLWVVBTSK1"
                      className="relative inline-flex mx-auto sm:mx-0 items-center justify-center p-4 px-12 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white  transition-all duration-300 transform group-hover:translate-x-full ease">
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
      </div>
    </div>
  );
}

export default Home;

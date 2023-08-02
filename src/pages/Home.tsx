import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

import Mission from "../components/Mission";
import Features from "../components/Features";
import Pattern from "../assets/noodlesbgg.webp";
import { LuChefHat } from "react-icons/lu";
import Navbar from "../components/Navbar";
import RandomImage from "../components/RandomImage";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-[#00a14b] md:rounded-2xl md:mx-10">
        <section
          className="pt-12 lg:pt-8"
          style={{
            backgroundImage: `url(${Pattern})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="py-8 text-center lg:text-left">
                  <span className="inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm">
                    <LuChefHat className="mr-1 h-5 w-5" />
                    Personal Chef Experience
                  </span>
                  <h1
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    className="text-5xl mt-4 font-extrabold text-white lg:text-6xl"
                  >
                    We believe in the emotional power of food.
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="1200"
                    data-aos-once="true"
                    className="mt-4 text-base font-light text-white"
                  >
                    Accra traffic jam is ready, can you stop the one that’s
                    missing it stereo ? Explore our saucy or dry flavors ranging
                    from mid-to-hot, in doice or savory. Browse our menu.
                  </p>

                  <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                    <a
                      data-aos="fade-right"
                      data-aos-delay="1300"
                      data-aos-once="true"
                      href="/meals"
                      className="relative rounded px-5 py-4 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Browse our Meals</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1400"
                data-aos-once="true"
                className="mt-auto"
              >
                <RandomImage />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Features /> */}
      <Mission />
      <Footer />
    </div>
  );
}

export default Home;

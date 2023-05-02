import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Heropic from "../assets/heropic.png";
import Mission from "../components/mission";
import Features from "../components/Features";
import Pattern from "../assets/bgpatttern.png";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-[#00a14b] md:rounded-3xl md:mx-10">
        <section
          className="  pt-12  lg:pt-8"
          style={{
            backgroundImage: `url(${Pattern})`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <h1
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-ph"
                  >
                    Personal Chef Experience
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="1200"
                    data-aos-once="true"
                    className="mt-2 text-md text-white sm:mt-4"
                  >
                    Accra traffic jam is ready, can you stop the one that’s
                    missing it stereo ? Explore our saucy or dry flavors ranging
                    from mid-to-hot, in doice or savory. Browse our menu
                  </p>

                  <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                    <a
                      data-aos="fade-right"
                      data-aos-delay="1300"
                      data-aos-once="true"
                      href="/meals"
                      className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
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
              >
                <img className="w-full m-auto" src={Heropic} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Features />
      <Mission />
      <Footer />
    </div>
  );
}

export default Home;

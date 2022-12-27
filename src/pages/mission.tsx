import React from "react";
import Navbar from "../components/navbar";
import "../styles/mission.css";
import IMG1 from "../assets/missionpic.jpeg";

function Mission() {
  return (
    <div>
      <Navbar />
      <section className=" bgg lg:py-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full lg:order-2">
              <div className="relative h-full lg:h-auto">
                <div className="relative ">
                  <img className="" src={IMG1} alt="" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
              <div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                  className="text-sm font-semibold tracking-widest text-white uppercase"
                >
                  Our Mission
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                  className="mt-8 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight"
                >
                  We are Committed to becoming carbon neutral by 2032.
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                  className="leading-relaxed text-gray-200 text-md mt-9"
                >
                  We understand that there's an environmental cost to almost
                  every aspect of modern life offsetting all of CO2 emmissions
                  involved in the production of your food, however we pledge to
                  constantly look for ways to reduce our carbon footprint even
                  further.
                </p>
                <p className="mt-6 leading-relaxed text-gray-200 text-md">
                  We consider the environmental consequences of absolutely
                  everything we do, from the way we source and transport our
                  produce, to how we deal with food waste and packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;

import React from "react";
import Navbar from "../components/navbar";

function About() {
  return (
    <div>
      <Navbar />
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              About
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Noodle bar is virtual fast food chain, building 24hours sustainable
              meals by connecting people their food adventure and making an
              avenue for food entrepreneurs to own their own brand. We are self-help community.
            </p>
          </div>
          <div className="w-full h-full py-48 bg-gray-200"></div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Decide how you integrate Payments
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <div className="w-full h-full py-48 bg-gray-200"></div>
        </div>
      </section>
    </div>
  );
}

export default About;

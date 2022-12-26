import React from "react";
import Navbar from "../components/navbar";
import Noodles1 from "../assets/noodles1.gif";
import Noodles2 from "../assets/noodles2.gif";
import Noodles3 from "../assets/noodles3.gif";

function About() {
  return (
    <div>
      <Navbar />
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
              className="mb-4 text-2xl font-semibold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl"
            >
              About Us
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-once="true"
              className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg"
            >
              Noodles bar is virtual fast food chain, building 24hours
              sustainable meals by connecting people their food adventure and
              making an avenue for food entrepreneurs to own their own brand. We
              are self-help community.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-once="true"
              src={Noodles1}
              alt=""
            />
          </div>
        </div>
        <div className="grid flex-col-reverse items-center mb-24 grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-once="true"
              className="mb-4 text-2xl font-semibold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl"
            >
              Our Story
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-once="true"
              className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg"
            >
              It was at Legon Hall in University of Ghana with the sound of dib
              Afrobeat pounding lazily relentlessly in the background that
              noodles bar was born. The names of our meals moments and
              experience. Storytelling through food artistry, with the notion
              that you are what you eat.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-once="true"
              src={Noodles2}
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-once="true"
              className="mb-4 text-2xl font-semibold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl"
            >
              Our Food
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="900"
              data-aos-once="true"
              className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg"
            >
              We offer our clients a complete range of catering options, ranging
              from breakfast buffets to gala dinners and quirky street food
              bites to corporate dining and blah blah y’all heard this shit
              before
            </p>
          </div>
          <div className="w-full h-full">
            <img
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-once="true"
              src={Noodles3}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

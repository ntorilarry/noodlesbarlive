import React from "react";
import Navbar from "../components/navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-4xl">
          <div className="mb-4">
            <a
              href="/"
              aria-label="Article"
              className="inline-block max-w-lg text-3xl font-semibold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-5xl"
            >
              Addomprehian
            </a>
          </div>
          <p className="text-base text-gray-700 md:text-lg">
            Addompreh is a synonym of food which in it essence means you can not
            live without food. the art of healthy eating has alway being a
            minority occupation,health is the objective for food consumption and
            the benefit of eating a well prepped meal can be rectify by our
            inner satisfaction. Taste has deluge the idea of a perfect meal or
            balance diet. We us the planetary stewards: preparing, creating,
            discovering, exploring, innovating and changing our food and food
            culture is part of food in human activity. we continue to explore
            our minds through our abilities from the creation of new hit street
            foods to fine dining experience in pushing the realm of what is
            food, what is considered to be food and it consistent to your
            health. So there is no doubt that what you eat contribute to how you
            think and you are what you think, so when you think food think
            Addompreh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;

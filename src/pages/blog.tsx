import React from "react";
import Navbar from "../components/navbar";
import BlogImg from "../assets/blogpic.jpeg";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="relative w-full mx-auto mb-4 md:mb-0">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold leading-tight text-gray-800">
                ADDOMPREHIAN
              </h2>
              <p className="py-2 mx-auto text-[#00a14b] inline-flex items-center justify-center mb-2">
                Food Blog
              </p>
            </div>
            <img
              src={BlogImg}
              className="object-cover w-full lg:rounded"
              style={{ height: "28em" }}
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="w-full px-4 mt-12 leading-relaxed text-gray-700 lg:px-0 text-md">
              <p className="pb-6">
                Addompreh is a synonym of food which in it essence means you can
                not live without food. the art of healthy eating has alway being
                a minority occupation,health is the objective for food
                consumption and the benefit of eating a well prepped meal can be
                rectify by our inner satisfaction. Taste has deluge the idea of
                a perfect meal or balance diet. We us the planetary stewards:
                preparing, creating, discovering, exploring, innovating and
                changing our food and food culture is part of food in human
                activity.
              </p>
              <p className="pb-6">
                we continue to explore our minds through our abilities from the
                creation of new hit street foods to fine dining experience in
                pushing the realm of what is food, what is considered to be food
                and it consistent to your health. So there is no doubt that what
                you eat contribute to how you think and you are what you think,
                so when you think food think Addompreh.
              </p>
              <p className="pb-6">
                ADDOMPREHIAN is a period of renewed interest in food culture in
                Legon campus sparked by feed your Ego campaign. Addo was
                accompanied by scholars and food critics which led to Ghanaian
                fast meals evolution.
              </p>
              <div className="pl-4 mb-6 italic border-l-4 border-gray-500 rounded">
                Addompreh is synonym of food , particularly Ghanaian foods,
                making anything with them. History resurrect the future in
                resuscitate.
              </div>
              <p className="pb-6">
                The term Addompreh from Akuapim, happiness, refer to
                the enthusiasm for everything related to food. Think food think
                Addompreh Food + mind + action = result
              </p>

              <p className="pb-6">
                I am the very tradition of modern cultural ego. I have Creative
                vegetables black and white and I know the kings of Akuapeman,
                And i quote God thereof.
              </p>
             
            </div>
      
          </div>
        </main>
      </div>
    </div>
  );
}

export default Blog;

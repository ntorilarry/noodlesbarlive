import React from "react";
import Navbar from "../components/Navbar";
import BlogImg from "../assets/blogpic.jpeg";
import Footer from "../components/Footer";

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
                The term Addompreh from Akuapim, happiness, refer to the
                enthusiasm for everything related to food. Think food think
                Addompreh Food + mind + action = result
              </p>

              <p className="pb-6">
                I am the very tradition of modern cultural ego. I have Creative
                vegetables black and white and I know the kings of Akuapeman,
                And i quote God thereof.
              </p>
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <h2 className="text-3xl font-semibold leading-tight text-gray-800">
              Creative Vegetables
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="w-full px-4 mt-6 leading-relaxed text-gray-700 lg:px-0 text-md">
              <p className="pb-6">
                When we talk about food trends and how they benefit the
                consumer, it keeps evolving for better and the latest trends as
                it relate to health and nutrition is the ‘complete food
                category’ where you can get all the nutrition in one prepped
                meal, is a concept that has been around for sometime and is loud
                in the sport nutrition industry and is expected to continue to
                grow 150% by 2030, study says.
              </p>
              <p className="pb-6">
                And if in-patients could have access to medical tailored meals
                in one year, we would have about a million and half
                hospitalization avoid and that will translate into 13.43 billion
                dollars saved. The meals are for really sick person and that’s
                about 6% of the population but that 6% is responsible for 50% of
                our healthcare cost so if these people can get access this
                tailored meals, it will be a game changer I would say. The
                hunger hormones that tells the brain to feel hungry levels rise
                and tell the brain to eat.
              </p>
              <p className="pb-6">
                And understanding the modern consumption trends that
                marijuana(weed) has entered the Health phase as consumers
                interest has shifted from physical to mental. also clearly due
                to the covid pandemic depression rate has tripled over the
                period and the younger generation think the future is
                frightening.
              </p>

              <p className="pb-6">
                 Throughout history, the wealthiest of society would display
                their wealth through great banquets and feasts. In the same way
                art and music would signify "the good life," so is food. Food
                was about living well and enjoying life. In reality though, the
                cost of the feast or the rarity of the ingredient matters
                little.  Anyone who has enjoyed the sweet taste of a fresh peach
                or a hot bowl of delicious soup on a showery day knows the
                simple, peaceful joy food can bring. When you eat something that
                just tastes so perfect that it literally reminds you to stop and
                appreciate all you have in your life - that is the unique joy
                and magic of good food.
              </p>

              <p className="pb-6">
                The emergence of this food culture which is happening largely
                among millennials who care deeply about the experience of eating
                and what chefs are doing all over the world is what can I create
                new with the old stuff, Food thinking is the process of
                imaginary eaten meals for ego satisfaction in every situation.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;

import React from "react";
import Navbar from "../components/navbar";
import BlogImg from "../assets/blogpic.jpeg";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                ADDOMPREHIAN
              </h2>
              <p className="py-2 mx-auto text-[#00a14b] inline-flex items-center justify-center mb-2">
                Food Blog
              </p>
            </div>
            <img
              src={BlogImg}
              className="w-full object-cover lg:rounded"
              style={{ height: "28em" }}
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full">
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
              <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                Addompreh is synonym of food , particularly Ghanaian foods,
                making anything with them. History resurrect the future in
                resuscitate.
              </div>
              <p className="pb-6">
                Addomprehh The term Addompreh from Akuapim, happiness, refer to
                the enthusiasm for everything related to food. Think food think
                Addompreh Food + mind + action = result
              </p>

              <p className="pb-6">
                I am the very tradition of Morden cultural ego. I have Creative
                vegetables black and white and I know the kings of Akuapeman,
                And i quote God thereof.
              </p>
              {/* <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                Uneasy barton seeing remark happen his has
              </h2>
              <p className="pb-6">
                Guest it he tears aware as. Make my no cold of need. He been
                past in by my hard. Warmly thrown oh he common future. Otherwise
                concealed favourite frankness on be at dashwoods defective at.
                Sympathize interested simplicity at do projecting increasing
                terminated. As edward settle limits at in.
              </p>
              <p className="pb-6">
                Dashwood contempt on mr unlocked resolved provided of of.
                Stanhill wondered it it welcomed oh. Hundred no prudent he
                however smiling at an offence. If earnestly extremity he he
                propriety something admitting convinced ye. Pleasant in to
                although as if differed horrible. Mirth his quick its set front
                enjoy hoped had there. Who connection imprudence middletons too
                but increasing celebrated principles joy. Herself too improve
                gay winding ask expense are compact. New all paid few hard pure
                she.
              </p>
              <p className="pb-6">
                Breakfast agreeable incommode departure it an. By ignorant at on
                wondered relation. Enough at tastes really so cousin am of.
                Extensive therefore supported by extremity of contented. Is
                pursuit compact demesne invited elderly be. View him she roof
                tell her case has sigh. Moreover is possible he admitted
                sociable concerns. By in cold no less been sent hard hill.
              </p>
              <p className="pb-6">
                Detract yet delight written farther his general. If in so bred
                at dare rose lose good. Feel and make two real miss use easy.
                Celebrated delightful an especially increasing instrument am.
                Indulgence contrasted sufficient to unpleasant in in insensible
                favourable. Latter remark hunted enough vulgar say man. Sitting
                hearted on it without me.
              </p> */}
            </div>
      
          </div>
        </main>
      </div>
    </div>
  );
}

export default Blog;

import React from "react";
import Navbar from "../components/navbar";
import Akora from "../assets/akora.jpeg";
import AccraTraffic from "../assets/accratraffic.jpeg";
import AfiTower from "../assets/afitower.jpeg";
import Agotime from "../assets/Agotime.jpeg";
import Akorfa from "../assets/akorfa.jpeg";
import Asasewa from "../assets/asesewa.jpeg";
import BiggestStick from "../assets/biggeststick.jpeg";
import GoldCoast from "../assets/goldcoast.jpeg";
import Legon from "../assets/legon.jpeg";
import Markola from "../assets/markola.jpeg";
import OlonkaBelly from "../assets/olonkabelly.jpeg";
import Trinity from "../assets/trinity.jpeg";
import Wokspicy from "../assets/wokspicy.jpeg";
import Mealvideo from "../assets/meal.mp4";

function Meals() {
  return (
    <div>
      <Navbar />
      <section className="pb-6 text-white bg-white sm:pb-12">
        <div className="w-full h-full">
          <video
            className="object-cover object-center w-full"
            src={Mealvideo}
            autoPlay
            loop
            controls
          />
        </div>
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="my-2 text-3xl font-semibold text-gray-600 sm:text-4xl">
              Our Delicious Meals
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={AccraTraffic}
              />

              <div className="flex flex-col flex-1 p-6">
                Accra Beef Traffic Jam
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 50
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={AfiTower}
              />

              <div className="flex flex-col flex-1 p-6">
                Trinity Tasty Stir
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 40
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Agotime}
              />

              <div className="flex flex-col flex-1 p-6">
                Akora Cucumber Wings
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 30
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Akora}
              />

              <div className="flex flex-col flex-1 p-6">
                Biggest Akuapim flying Taste
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 45
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Akorfa}
              />

              <div className="flex flex-col flex-1 p-6">
                Akorfa Spicy Veggies
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 50
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Asasewa}
              />

              <div className="flex flex-col flex-1 p-6">
                Asesewa Market Signature Egg Loaf
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 30
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={BiggestStick}
              />

              <div className="flex flex-col flex-1 p-6">
                Wok-Spicy Shrimp Stem
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 50
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={GoldCoast}
              />

              <div className="flex flex-col flex-1 p-6">
                Gold Coast Fashion Stirring
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 35
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Legon}
              />

              <div className="flex flex-col flex-1 p-6">
                Legon Confidence Corn Sauced
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 55
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Markola}
              />

              <div className="flex flex-col flex-1 p-6">
                Hot Makola Soup Glaze
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 25
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Trinity}
              />

              <div className="flex flex-col flex-1 p-6">
                Agotime Love 1831.ave
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 35
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={OlonkaBelly}
              />

              <div className="flex flex-col flex-1 p-6">
                Olonka Belly Pounced Sausages
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 30
                </h3>
              </div>
            </article>
            <article className="flex flex-col bg-[#00a14b]">
              <img
                alt=""
                className="object-cover w-full bg-gray-500 h-52"
                src={Wokspicy}
              />

              <div className="flex flex-col flex-1 p-6">
                AFI Chilies Swiss
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting price GHC 25
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Meals;

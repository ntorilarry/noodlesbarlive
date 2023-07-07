import { BiDonateBlood } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";
import { GiWeightCrush } from "react-icons/gi";
import { GiCancer } from "react-icons/gi";

export default function Features() {
  return (
    <div>
      <div className="grid grid-cols-4 mt-10 gap-8 p-4 md:p-10 bg-white">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#00a14b] rounded-xl text-gray-300">
          <span className="absolute -top-6 p-3 rounded-full bg-[#00a14b]">
            <BiDonateBlood className="text-3xl text-white" />
          </span>
          <h2 className="my-1 text-gray-800 text-center text-lg font-semibold tracking-wide">
            Regulates blood sugar levels
          </h2>
          <p className="py-2 text-gray-800 text-center text-sm">
            Noodles are a good source of carbohydrates, which are broken down
            into glucose and used for energy. Eating noodles can help to
            regulate blood sugar levels and provide a steady supply of energy.
          </p>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#00a14b] rounded-xl text-gray-300">
          <span className="absolute -top-6 p-3  rounded-full bg-[#00a14b]">
            <SlEnergy className="text-3xl text-white" />
          </span>
          <h2 className="my-1 text-gray-800 text-center text-lg font-semibold tracking-wide">
            Boosts energy levels
          </h2>
          <p className="py-2 text-gray-800 text-center text-sm">
            Noodles are a good source of carbohydrates, which are broken down
            into glucose and used for energy. Eating noodles can help to boost
            energy levels and improve physical performance.
          </p>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#00a14b] rounded-xl text-gray-300">
          <span className="absolute -top-6 p-3 rounded-full bg-[#00a14b]">
            <GiWeightCrush className="text-3xl text-white" />
          </span>
          <h2 className="my-1 text-gray-800 text-center text-lg font-semibold tracking-wide">
            Promotes weight loss
          </h2>
          <p className="py-2 text-gray-800 text-center text-sm">
            Noodles are low in calories and fat, and they can help you to feel
            full. Eating noodles can help to promote weight loss and maintain a
            healthy weight.
          </p>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#00a14b] rounded-xl text-gray-300">
          <span className="absolute -top-6 p-3 rounded-full bg-[#00a14b]">
            <GiCancer className="text-3xl text-white" />
          </span>
          <h2 className="my-1 text-gray-800 text-center text-lg font-semibold tracking-wide">
            Reduces the risk of cancer:
          </h2>
          <p className="py-2 text-gray-800 text-center text-sm">
            Noodles are a good source of folate, which is a vitamin that helps
            to reduce the risk of cancer.
          </p>
        </div>
      </div>
    </div>
  );
}

import {
  TagIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import Missionpic from "../assets/carbon-neutrality.png"

export default function Mission() {
  return (
    <section className="px-8 py-12 md:py-18">
      <div className="mx-auto max-w-6xl space-y-24 md:space-y-36">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row-reverse">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm">
              <ShieldCheckIcon className="mr-1 h-5 w-5" />
              Mission
            </span>
            <h3 className="text-3xl font-semibold text-heading lg:text-4xl">
              We are Committed to becoming carbon neutral by 2032.
            </h3>
            <p className="text-lg font-normal">
              We understand that there's an environmental cost to almost every
              aspect of modern life offsetting all of CO2 emmissions involved in
              the production of your food, however we pledge to constantly look
              for ways to reduce our carbon footprint even further.
            </p>
            <p className="text-lg font-normal">
              We consider the environmental consequences of absolutely
              everything we do, from the way we source and transport our
              produce, to how we deal with food waste and packaging.
            </p>
          </div>

          <div className="max-w-lg">
            <img
              src={Missionpic}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

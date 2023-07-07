import Navbar from "../components/Navbar";
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
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Accra Beef Traffic Jam",
    href: "#",
    price: "Starting price GHC 50",
    imageSrc: AccraTraffic,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    calories: "743g",
    fat: "12g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "967h",
    ingredients:
      "Shredded beef, earthy spring onions, crushed garlic, roasted green beans",
  },
  {
    id: 2,
    name: "Trinity Tasty Stir",
    href: "#",
    price: "Starting price GHC 40",
    imageSrc: Trinity,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    calories: "743g",
    fat: "12g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "755g",
    ingredients:
      "diced carrots, chopped green paper, Roasted corn, chopped bell pepper, shredded chicken",
  },
  {
    id: 3,
    name: "Akora Cucumber Wings",
    href: "#",
    price: "Starting price GHC 30",
    imageSrc: Akora,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    calories: "837g",
    fat: "13g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "638g",
    ingredients: "Braised cucumber, squeezed lime, fish fingers",
  },
  {
    id: 4,
    name: "Biggest Akuapim flying Taste",
    href: "#",
    price: "Starting price GHC 45",
    imageSrc: BiggestStick,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "649g",
    fat: "12g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "533g",
    ingredients:
      "toast shrimps, shredded kale, spicy asparagus, sliced lettuce",
  },
  {
    id: 5,
    name: "Akorfa Spicy Veggies",
    href: "#",
    price: "Starting price GHC 50",
    imageSrc: Akorfa,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "653g",
    fat: "14g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "563g",
    ingredients:
      "shredded fish, diced carrots, chopped greens, sliced coriander, shredded kale",
  },
  {
    id: 6,
    name: "Asesewa Market Signature Egg Loaf",
    href: "#",
    price: "Starting price GHC 30",
    imageSrc: Asasewa,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "752g",
    fat: "14g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "543g",
    ingredients: "chopped leeks, Pouches egg, spicy kale, diced carrots",
  },
  {
    id: 7,
    name: "Wok-Spicy Shrimp Stem",
    href: "#",
    price: "Starting price GHC 50",
    imageSrc: Wokspicy,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "543g",
    fat: "11g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "684g",
    ingredients:
      "chopped celery, roasted asparagus, chicken flicks, sliced chili pepper, crushed garlic",
  },
  {
    id: 8,
    name: "Gold Coast Fashion Stirring",
    href: "#",
    price: "Starting price GHC 35",
    imageSrc: GoldCoast,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "643g",
    fat: "13g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "636g",
    ingredients:
      "shredded chicken, pan-seared broccoli, diced tomatoes, chopped bell peppers",
  },
  {
    id: 9,
    name: "Legon Confidence Corn Sauced",
    href: "#",
    price: "Starting price GHC 55",
    imageSrc: Legon,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "865h",
    fat: "11g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "533g",
    ingredients: "shredded beef, roasted corn, diced carrots, chopped celery",
  },
  {
    id: 10,
    name: "Hot Makola Soup Glaze",
    href: "#",
    price: "Starting price GHC 25",
    imageSrc: Markola,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "895g",
    fat: "12g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "548g",
    ingredients:
      "crushed garlic, chopped chicken, spicy mushroom, sliced cabbage",
  },
  {
    id: 11,
    name: "Agotime Love 1831.ave",
    href: "#",
    price: "Starting price GHC 35",
    imageSrc: Agotime,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "854g",
    fat: "12h",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "634g",
    ingredients:
      "Seeded pea, Chopped spring onion, crushed garlic, shredded chicken, diced greens",
  },
  {
    id: 12,
    name: "Olonka Belly Pounced Sausages",
    href: "#",
    price: "Starting price GHC 30",
    imageSrc: OlonkaBelly,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "543g",
    fat: "12g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "573g",
    ingredients:
      "spiced sausage, chopped spring onions, diced carrots, sliced lettuce",
  },
  {
    id: 13,
    name: "AFI Chilies Swiss",
    href: "#",
    price: "Starting price GHC 25",
    imageSrc: AfiTower,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    calories: "613g",
    fat: "13g",
    potassium: "38mg",
    carbohydrates: "25g",
    protein: "871g",
    ingredients:
      "spicy chili, slices spinach, diced sausage, chopped asparagus",
  },
  // More products...
];

export default function Meals() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-64 w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00a14b] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm px-1 text-white font-bold text-text">
                      Calories
                    </dt>
                    <dd className="text-sm px-1 text-white font-normal text-heading">
                      {product.calories}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-sm px-1 text-white font-bold text-text">
                      Fat
                    </dt>
                    <dd className="text-sm px-1 text-white font-normal text-heading">
                      {" "}
                      {product.fat}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm px-1 text-white font-bold text-text">
                      Potassium
                    </dt>
                    <dd className="text-sm px-1 text-white font-normal text-heading">
                      {product.potassium}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm px-1 text-white font-bold text-text">
                      Carbohydrates
                    </dt>
                    <dd className="text-sm px-1 text-white font-normal text-heading">
                      {product.carbohydrates}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm px-1 text-white font-bold text-text">
                      Protein
                    </dt>
                    <dd className="text-sm px-1 text-white font-normal text-heading">
                      {product.protein}
                    </dd>
                  </div>
                  <h1 className="text-sm px-1 text-white font-bold text-center underline text-text">
                    Ingredients
                  </h1>
                  <span className="text-sm px-4 text-white font-normal text-heading text-center">
                    {product.ingredients}
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

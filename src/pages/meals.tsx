import Navbar from "../components/navbar"
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
    name: 'Accra Beef Traffic Jam',
    href: '#',
    price: 'Starting price GHC 50',
    imageSrc: AccraTraffic,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Trinity Tasty Stir',
    href: '#',
    price: 'Starting price GHC 40',
    imageSrc: Trinity,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Akora Cucumber Wings',
    href: '#',
    price: 'Starting price GHC 30',
    imageSrc: Akora,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Biggest Akuapim flying Taste',
    href: '#',
    price: 'Starting price GHC 45',
    imageSrc: BiggestStick,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Akorfa Spicy Veggies',
    href: '#',
    price: 'Starting price GHC 50',
    imageSrc: Akorfa,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Asesewa Market Signature Egg Loaf',
    href: '#',
    price: 'Starting price GHC 30',
    imageSrc: Asasewa,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Wok-Spicy Shrimp Stem',
    href: '#',
    price: 'Starting price GHC 50',
    imageSrc: Wokspicy,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Gold Coast Fashion Stirring',
    href: '#',
    price: 'Starting price GHC 35',
    imageSrc: GoldCoast,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 9,
    name: 'Legon Confidence Corn Sauced',
    href: '#',
    price: 'Starting price GHC 55',
    imageSrc: Legon,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'Hot Makola Soup Glaze',
    href: '#',
    price: 'Starting price GHC 25',
    imageSrc: Markola,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 11,
    name: 'Agotime Love 1831.ave',
    href: '#',
    price: 'Starting price GHC 35',
    imageSrc: Agotime,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 12,
    name: 'Olonka Belly Pounced Sausages',
    href: '#',
    price: 'Starting price GHC 30',
    imageSrc: OlonkaBelly,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 13,
    name: 'AFI Chilies Swiss',
    href: '#',
    price: 'Starting price GHC 25',
    imageSrc: AfiTower,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Meals() {
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

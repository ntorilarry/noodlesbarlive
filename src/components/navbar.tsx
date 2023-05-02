import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import Logo from "../assets/noodlesbarlogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative relative z-20 flex shrink-0 items-center space-x-2 bg-layer-2 py-6 px-4 sm:px-10">
      <a href="/" className="z-10">
        {/* Logo */}
        <div className="w-28">
          <img src={Logo} alt="" />
        </div>
      </a>
      <div className="flex-1">
        <div className="absolute inset-y-0 inset-x-0 hidden items-center justify-center space-x-1.5 px-4 md:flex">
          <NavLink
            to="/about-us"
            className="navlink inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            About US
          </NavLink>
          <NavLink
            to="/meals"
            className="navlink inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            Meals
          </NavLink>
          <NavLink
            to="/blog"
            className="navlink inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            Blog
          </NavLink>
        </div>
      </div>
      <div className="z-10">
        <a
          href="https://wa.me/message/E3A3VLWVVBTSK1"
          type="button"
          className="hidden cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-base font-medium text-text  shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80 md:inline-flex"
        >
          Contact Us
        </a>
      </div>

      <Menu as="div" className="relative md:hidden">
        <Menu.Button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <MenuAlt3Icon className="h-5 w-5" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white py-3 shadow-xl focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/about-us"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  About Us
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/meals"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Meals
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/blog"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Blog
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Contact Us
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}

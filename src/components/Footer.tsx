import React from "react";
import Logo from "../assets/noodlesbarlogo.png";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="px-4 pt-10 pb-18">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
        <div className="flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-14 lg:space-y-0">
          <a href="/">
            {/* Logo */}
            <img className="w-28" src={Logo} alt="" />
          </a>

          <div className="flex flex-col space-y-2 text-center text-base font-semibold lg:flex-row lg:space-x-6 lg:space-y-0 lg:text-left">
            <a href="https://goo.gl/maps/Rom74r9kHkqESpH36">
              Money trees ave, Accra
            </a>
            <NavLink
              to="/about-us"
              className="font-semibold text-text hover:text-heading"
            >
              About Us
            </NavLink>
            <NavLink
              to="/meals"
              className="font-semibold text-text hover:text-heading"
            >
              Meals
            </NavLink>
            <NavLink
              to="/blog"
              className="font-semibold text-text hover:text-heading"
            >
              Blog
            </NavLink>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="http://instagram.com/noodles_bar"
          >
            <BsInstagram className="text-2xl" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="http://twitter.com/noodles_bargh"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center">
        © 2022{" "}
        <a href="/node_modules" className="hover:underline">
          Noodlesbar™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

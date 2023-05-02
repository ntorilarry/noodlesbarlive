import React from "react";
import Logo from "../assets/noodlesbarlogo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src={Logo}
              className="h-8 mr-3"
              alt="Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <NavLink to="/about-us" className="mr-4 hover:underline md:mr-6 ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/meals" className="mr-4 hover:underline md:mr-6">
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="mr-4 hover:underline md:mr-6 ">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2022{" "}
          <a href="/node_modules" className="hover:underline">
            Noodlesbar™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

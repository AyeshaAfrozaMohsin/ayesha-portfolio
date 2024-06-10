"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="flex-1">
      <nav className=" w-full dark:bg-medium dark:text-darkText text-lightText bg-zinc-300 top-0 left-0 right-0 z-10  shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-700 dark:text-teal-400 font-bold">
                  AYESHA AFROZA MOHSIN
                </h2>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 dark:text-darkText rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-lightText dark:text-darkText">
                <li className="p-6 m-2 text-xl text-center rounded-lg hover:bg-teal-400 hover:text-white dark:hover:text-white dark:hover:bg-cyan-600 md:p-3 md:px-6 transform-transition duration-300 hover:shadow-lg">
                  <Link href="#education" onClick={() => setNavbar(!navbar)}>
                    Education
                  </Link>
                </li>
                <li className="p-6 m-2 text-xl text-center rounded-lg hover:bg-teal-400 hover:text-white dark:hover:text-white dark:hover:bg-cyan-600 md:p-3 md:px-6 transform-transition duration-300 hover:shadow-lg">
                  <Link href="#awards" onClick={() => setNavbar(!navbar)}>
                    Awards
                  </Link>
                </li>
                <li className="p-6 m-2 text-xl text-center rounded-lg hover:bg-teal-400 hover:text-white dark:hover:text-white dark:hover:bg-cyan-600 md:p-3 md:px-6 transform-transition duration-300 hover:shadow-lg">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="p-6 m-2 text-xl text-center rounded-lg hover:bg-teal-400 hover:text-white dark:hover:text-white dark:hover:bg-cyan-600 md:p-3 md:px-6 transform-transition duration-300 hover:shadow-lg">
                  <Link href="#skills" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="flex justify-center items-center p-6 m-2">
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <nav>
      <Link href="#About"> About</Link>
      <Link href="#Projects"> Projects</Link>
      <Link href="#Skills"> Skills</Link>
      <Link href="#Contact"> Contact</Link>
    </nav>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark:text-white">
      <div className="flex flex-[2] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:block">
          <NavLinks />
        </div>
        <div className="w-[75px]">
          <ThemeToggle />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full gap-4 flex-col items-center">
          <NavLinks />
        </div>
      )}
    </div>
  );
}

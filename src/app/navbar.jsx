"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoGruen from "../assets/HNEE_Logo_Dt_gruen.svg"; // Ensure this path is correct
import { navLinks as defaultNavLinks } from "@/constant";

const Navbar = ({ navLinks = defaultNavLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav.id);
    // Additional logic for handling the click can be added here
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <LogoGruen alt="HNEE Logo" />

      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav) =>
          nav.href ? (
            <li key={nav.id}>
              <Link href={nav.href}>
                <a
                  className={`${
                    activeIdLink === nav.id ? "active-id-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick(nav)}
                >
                  {nav.title}
                </a>
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoWeiss from "../../public/assets/svg/logo-de.svg";
import close from "../../public/assets/svg/close.svg";
import menu from "../../public/assets/svg/menu.svg";
import { navLinks } from "@/types/global";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState<string | null>(null);

  const handleNavLinkClick = (nav: { id: string; title: string }) => {
    setActiveIdLink(nav.id);
    setToggle(false); // Close the mobile menu
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div>
        <Link href="/">
          <Image src={LogoWeiss} alt="logo" className="mr-16" width={450} height={150} />
        </Link>
      </div>
      <div>
        <ul className="list-none sm:flex hidden justify-start items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`mr-10 ${activeIdLink === nav.id ? "text-active" : "text-inactive"}`}
              onClick={() => handleNavLinkClick(nav)}
            >
              <Link href={nav.link}>
                <span>{nav.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain fill-white"
          onClick={() => setToggle(!toggle)}
          width={28}
          height={28}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-medium cursor-pointer text-[16px] mb-4 text-white"
                onClick={() => handleNavLinkClick(nav)}
              >
                <Link href={nav.link}>
                  <span className={`${activeIdLink === nav.id ? "active-id-link" : ""}`}>{nav.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
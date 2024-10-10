import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoWeiss from "@/assets/logo-de.svg";
import close from "@/assets/close.svg";
import menu from "@/assets/menu.svg";
import { navLinks } from "@/types/global"; 


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);

  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav.id);
    setToggle(false); // Close the mobile menu
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div>
        <Link href="/">
          <LogoWeiss alt="logo" className=" 2xl:ml-[-100px] mr-20" width={450} height={150} />
        </Link>
      </div>
     <div>
        <ul className="list-none sm:flex hidden justify-start items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              <Link href={nav.id}>
                <span
                  className={`${activeIdLink === nav.id ? "active-id-link" : ""}`}
                  onClick={() => handleNavLinkClick(nav)}
                >
                  {nav.title}
                </span>
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
              >
                <Link href={nav.id}>
                  <span
                    className={`${activeIdLink === nav.id ? "active-id-link" : ""}`}
                    onClick={() => handleNavLinkClick(nav)}
                  >
                    {nav.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
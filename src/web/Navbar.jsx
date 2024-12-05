import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { logo , menu, close } from "../assets";
import { navLinks } from "../types";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);

  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav.id);
    setToggle(false); // Close the mobile menu
  };

  const formatPath = (id) => {
    // Remove the '/xxx' segment if present and only keep the hash part
    const cleanPath = id.replace("/wetter", "");
    return cleanPath.startsWith("#") ? `/${cleanPath}` : `/${cleanPath}`;
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <NavLink href="/">
        <img src={logo} alt="logo" className=" w-60 h-32 mr-20" />
      </NavLink>
      

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] hover:text-gray-300 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            {nav.id.startsWith("#") ? (
              <NavLink
                to={formatPath(nav.id)}
                smooth
                className={`${activeIdLink === nav.id ? "active-id-link" : ""}`}
                onClick={() => handleNavLinkClick(nav)}
              >
                {nav.title}
              </NavLink>
            ) : (
              <RouterNavLink
                to={formatPath(nav.id)}
                activeClassName="active"
                className={`${activeIdLink === nav.id ? "active-id-link" : ""}`}
                onClick={() => handleNavLinkClick(nav)}
              >
                {nav.title}
              </RouterNavLink>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          style={{ zIndex: 1000 }}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                {nav.id.startsWith("#") ? (
                  <NavLink
                    to={formatPath(nav.id)}
                    smooth
                    className={`${
                      activeIdLink === nav.id ? "active-id-link" : ""
                    }`}
                    onClick={() => handleNavLinkClick(nav)}
                  >
                    {nav.title}
                  </NavLink>
                ) : (
                  <RouterNavLink
                    to={formatPath(nav.id)}
                    activeClassName="active"
                    className={`${
                      activeIdLink === nav.id ? "active-id-link" : ""
                    }`}
                    onClick={() => handleNavLinkClick(nav)}
                  >
                    {nav.title}
                  </RouterNavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

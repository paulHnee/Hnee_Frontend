import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { logo, menu, close } from "../assets";
import { navLinks } from "../types";
import { useNavigate } from "react-router-dom"; // For navigation

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in based on token or session (e.g., localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
  }, []);

  // Mobile menu toggle
  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav.id);
    setToggle(false); // Close the mobile menu
  };

  const formatPath = (id) => {
    const cleanPath = id.replace("/wetter", "");
    return cleanPath.startsWith("#") ? `/${cleanPath}` : `/${cleanPath}`;
  };

  //Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear session
    setIsLoggedIn(false); // Update login state
    navigate("/login"); // Redirect to login page
  };

  //Login function
  const handleLogin = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <RouterNavLink to="/">
        <img src={logo} alt="logo" className="w-60 h-32 mr-20" />
      </RouterNavLink>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] hover:text-gray-300 ${
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
        {/* Display Logout/Login button based on login state */}
        <li className="">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-5 px-6 py-2 bg-green-950 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300 hover:bg-modernGreen-button"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="ml-5 px-6 py-2 bg-green-950 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300 hover:bg-modernGreen-button"
            >
              Login
            </button>
          )}
        </li>
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
          } p-6 bg-gradient-to-b from-gray-800 to-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
            {/* Mobile Logout/Login Button */}
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

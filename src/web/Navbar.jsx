import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { logo, menu, close } from "../assets";
import { navLinks } from "../types";
import { useNavigate } from "react-router-dom"; // For navigation on logout

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIdLink, setActiveIdLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in based on token or session (e.g., localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavLinkClick = (nav) => {
    setActiveIdLink(nav.id);
    setToggle(false); // Close the mobile menu
  };

  const formatPath = (id) => {
    const cleanPath = id.replace("/wetter", "");
    return cleanPath.startsWith("#") ? `/${cleanPath}` : `/${cleanPath}`;
  };

  const handleLogout = () => {
    // Clear the user's session (remove token from localStorage)
    localStorage.removeItem("token");

    // Update the login state
    setIsLoggedIn(false);

    // Redirect to login page (or any other page you prefer)
    navigate("/login");
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
        {/* Display Logout button if logged in */}
        {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-green-950 text-white rounded-md hover:bg-green-900"
            >
              Logout
            </button>
          ) : (
            <RouterNavLink
              to="/login"
              className="ml-4 px-4 py-2 bg-green-950 text-white rounded-md hover:bg-green-900"
            >
              Login
            </RouterNavLink>
          )}
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
            {/* Mobile Logout Button */}
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

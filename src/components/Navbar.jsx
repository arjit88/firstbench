import React, { useEffect, useRef, useState } from "react";
import { BiSolidBell } from "react-icons/bi";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiCastleTurretFill } from "react-icons/pi";
import { TbHomeFilled } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Profile");
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const navigate = useNavigate();

  const handleNavigation = (link, path) => {
    setActiveLink(link);
    navigate(path);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white font-semibold sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-1">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 bg-transparent" />
          <span className="hidden md:block">Firstbench</span>
        </Link>

        {/* Menu Icon for Small Screens */}
        <button
          className="block md:hidden text-2xl"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>

        {/* Navigation Links for Medium and Large Screens */}
        <div className="hidden md:flex md:space-x-6">
          {[
            { name: "Dashboard", icon: <TbHomeFilled /> },
            { name: "FirstGuru", icon: <HiSparkles /> },
            { name: "TownHall", icon: <PiCastleTurretFill /> },
            { name: "AI Evaluation", icon: <GiDiamonds /> },
            { name: "Performance", icon: <VscGraphLine /> },
            { name: "Mock Test", icon: <LuFileSpreadsheet /> },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer ${
                activeLink === item.name
                  ? "text-green-300"
                  : "hover:text-gray-300"
              }`}
              onClick={() =>
                handleNavigation(
                  item.name,
                  `/${item.name.toLowerCase().replace(" ", "-")}`
                )
              }
            >
              {item.icon}
              <span className="hidden lg:block">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Notifications and Profile Dropdown */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Notifications */}
          <div className="relative cursor-pointer hover:text-gray-300">
            <BiSolidBell size={22} />
            <div className="absolute -top-1.5 -right-1.5 text-xs bg-red-600 w-5 h-5 rounded-full flex items-center justify-center">
              3
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 bg-gray-950 px-3 py-1 rounded-md hover:bg-gray-900 focus:outline-none"
            >
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center font-bold text-sm rounded-md">
                P
              </div>
              <span className="text-gray-200">{selectedOption}</span>
              <FaChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-950 border border-gray-900 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {["Profile", "Settings", "Logout"].map((option) => (
                    <li key={option}>
                      <button
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-800 w-full text-left"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-3 bg-gray-800 shadow-lg z-40">
          {/* Links */}
          {[
            { name: "Dashboard", icon: <TbHomeFilled /> },
            { name: "FirstGuru", icon: <HiSparkles /> },
            { name: "TownHall", icon: <PiCastleTurretFill /> },
            { name: "AI Evaluation", icon: <GiDiamonds /> },
            { name: "Performance", icon: <VscGraphLine /> },
            { name: "Mock Test", icon: <LuFileSpreadsheet /> },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer ${
                activeLink === item.name
                  ? "text-green-300"
                  : "hover:text-gray-300"
              }`}
              onClick={() =>
                handleNavigation(
                  item.name,
                  `/${item.name.toLowerCase().replace(" ", "-")}`
                )
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}

          {/* Notifications */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <BiSolidBell size={22} />
            <span>Notifications</span>
            <div className="bg-red-600 text-xs rounded-full px-2 py-0.5">3</div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 bg-gray-950 px-3 py-1 rounded-md hover:bg-gray-900 focus:outline-none"
            >
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center font-bold text-sm rounded-md">
                P
              </div>
              <span>{selectedOption}</span>
              <FaChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-gray-950 border border-gray-900 rounded-md shadow-lg">
                <ul className="py-1">
                  {["Profile", "Settings", "Logout"].map((option) => (
                    <li key={option}>
                      <button
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-800 w-full text-left"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

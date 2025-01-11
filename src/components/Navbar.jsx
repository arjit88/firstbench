import React, { useEffect, useRef, useState } from "react";
import { BiSolidBell } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
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
  const [activeLink, setActiveLink] = useState("Dashboard");
  const navigate = useNavigate();

  const handleNavigation = (link, path) => {
    setActiveLink(link);
    navigate(path);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between py-8 px-20 bg-gray-800 h-14 text-white font-semibold sticky top-0 z-50">
      {/* Logo Section */}
      <Link to={"/"} className="flex items-center space-x-1">
        <img src={"/logo.png"} alt="Logo" className="w-8 h-8 bg-transparent" />
        <span>Firstbench</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "Dashboard"
              ? "text-green-300"
              : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("Dashboard", "/dashboard")}
        >
          <TbHomeFilled />
          <span>Dashboard</span>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "FirstGuru"
              ? "text-green-300"
              : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("FirstGuru", "/firstguru")}
        >
          <HiSparkles />
          <span>FirstGuru</span>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "TownHall" ? "text-green-300" : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("TownHall", "/townhall")}
        >
          <PiCastleTurretFill />
          <span>TownHall</span>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "AI Evaluation"
              ? "text-green-300"
              : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("AI Evaluation", "/ai-evaluation")}
        >
          <GiDiamonds />
          <span>AI Evaluation</span>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "Performance"
              ? "text-green-300"
              : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("Performance", "/Performance")}
        >
          <VscGraphLine />
          <span>Performance</span>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeLink === "Mock Test"
              ? "text-green-300"
              : "hover:text-gray-300"
          }`}
          onClick={() => handleNavigation("Mock Test", "/mock-test")}
        >
          <LuFileSpreadsheet />
          <span>Mock Test</span>
        </div>
      </div>

      {/* Notifications and Profile Dropdown */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="flex items-center justify-center cursor-pointer hover:text-gray-300 relative">
          {/* Bell Icon */}
          <BiSolidBell size={22} />

          {/* Notification Count */}
          <div className="absolute -top-1.5 -right-1.5 text-xs text-white bg-red-600 w-5 h-5 rounded-full flex items-center justify-center">
            3
          </div>
        </div>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-gray-950 px-3 py-1 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            {/* Avatar */}
            <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center font-bold text-sm rounded-md">
              P
            </div>
            {/* Selected Option */}
            <span className="text-gray-200">{selectedOption}</span>
            {/* Arrow */}
            <FaChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-950 border border-gray-900 rounded-md shadow-lg z-10">
              <ul className="py-1">
                {["Profile", "Settings", "Logout"].map((option) => (
                  <li key={option}>
                    <button
                      className={`block px-4 py-2 text-gray-200 hover:bg-gray-800 w-full text-left ${
                        selectedOption === option ? "bg-gray-800" : ""
                      }`}
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
  );
};

export default Navbar;

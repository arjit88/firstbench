import React, { useState, useEffect, useRef } from "react";
import { BiTimer } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaArrowUpLong,
  FaCodeCompare,
  FaCodePullRequest,
} from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { TbSparkles, TbStairsUp } from "react-icons/tb";

const Hero = () => {
  // State for each dropdown's selected option
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: "Compare Accuracy",
    dropdown2: "Compare Accuracy",
    dropdown3: "Compare Accuracy",
  });

  // State to handle visibility of each dropdown
  const [dropdownVisible, setDropdownVisible] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });

  // Options for the dropdowns
  const options = ["Your Marks", "Try Your Question", "Compete Again"];

  // Refs for dropdowns to detect outside clicks
  const dropdownRefs = {
    dropdown1: useRef(null),
    dropdown2: useRef(null),
    dropdown3: useRef(null),
  };

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Handle selecting an option from a dropdown
  const handleSelectOption = (dropdown, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [dropdown]: option,
    }));
    setDropdownVisible((prev) => ({
      ...prev,
      [dropdown]: false,
    }));
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs).forEach((key) => {
        if (
          dropdownRefs[key].current &&
          !dropdownRefs[key].current.contains(event.target)
        ) {
          setDropdownVisible((prev) => ({
            ...prev,
            [key]: false,
          }));
        }
      });
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 mx-4 my-4">
      <div className="flex w-full gap-4 relative">
        {/* First Dropdown */}
        <div className="rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80 flex relative">
          <div
            className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md hover:bg-gray-300 cursor-pointer"
            onClick={() => toggleDropdown("dropdown1")}
          >
            <MdKeyboardArrowDown />
          </div>

          <p className="my-2 text-gray-400">{selectedOptions.dropdown1}</p>

          {/* Dropdown menu */}
          {dropdownVisible.dropdown1 && (
            <div
              ref={dropdownRefs.dropdown1}
              className="absolute bg-gray-50 border border-gray-300 shadow-md rounded-md mt-2 w-[90%] z-10 mx-4"
            >
              <ul className="py-2">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectOption("dropdown1", option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Second Dropdown */}
        <div className="rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80 flex relative">
          <div
            className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md hover:bg-gray-300 cursor-pointer"
            onClick={() => toggleDropdown("dropdown2")}
          >
            <MdKeyboardArrowDown />
          </div>

          <p className="my-2 text-gray-400">{selectedOptions.dropdown2}</p>

          {/* Dropdown menu */}
          {dropdownVisible.dropdown2 && (
            <div
              ref={dropdownRefs.dropdown2}
              className="absolute bg-white border border-gray-300 shadow-md rounded-md mt-2 w-[90%] z-10 mx-4"
            >
              <ul className="py-2">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectOption("dropdown2", option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Third Dropdown */}
        <div className="rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80 flex relative">
          <div
            className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md hover:bg-gray-300 cursor-pointer"
            onClick={() => toggleDropdown("dropdown3")}
          >
            <MdKeyboardArrowDown />
          </div>

          <p className="my-2 text-gray-400">{selectedOptions.dropdown3}</p>

          {/* Dropdown menu */}
          {dropdownVisible.dropdown3 && (
            <div
              ref={dropdownRefs.dropdown3}
              className="absolute bg-white border border-gray-300 shadow-md rounded-md mt-2 w-[90%] z-10 mx-4"
            >
              <ul className="py-2">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectOption("dropdown3", option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-5 mt-3">
        <div className="flex flex-col rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md">
              <BsGraphUpArrow />
            </div>
            <p className="my-2 text-gray-400">Improvements</p>
          </div>

          <p className="mx-2 font-semibold text-gray-700">
            Subject Understanding
          </p>

          <div className="grid grid-cols-3 gap-4 mt-3">
            <p className="bg-cyan-800 text-white py-3 text-[10px] font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center ml-1">
              Geography
            </p>
            <p className="bg-yellow-600 text-white py-3 text-[10px] font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
              Politics
            </p>
            <p className="bg-cyan-800 text-white py-3 text-[8px] font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center mr-1">
              Current Affairs
            </p>

            <div className="grid grid-cols-2 col-span-3 gap-4 mt-1 ml-1 mr-1">
              <p className="bg-red-700 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                General Studies
              </p>
              <p className="bg-cyan-800 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                Mathematics
              </p>
              <p className="bg-gray-600 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-gray-500 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                Social Studies
              </p>
              <p className="bg-red-700 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                English Literature
              </p>
              <p className="bg-yellow-600 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                Indian History
              </p>
              <p className="bg-cyan-800 text-white px-6 py-4 text-xs font-semibold whitespace-nowrap rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 flex justify-center items-center overflow-hidden flex-grow text-center">
                Economics
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md">
              <BiTimer />
            </div>

            <p className="my-2 text-gray-400">Response Time</p>
          </div>
          <div className="flex ml-2 mt-3">
            <button className="flex items-center justify-center mr-6 gap-2 py-2 px-6 mt-2 bg-violet-900 rounded-lg text-white font-medium">
              STD Time - 2min
            </button>
          </div>

          <div className="flex ml-2 mt-3">
            <div className="flex items-center border-2 border-dotted border-violet-400 bg-violet-100 w-[96%] h-16 rounded-md">
              <p className="text-cyan-600 text-4xl font-semibold">
                60{" "}
                <span className="text-gray-500 text-2xl font-semibold">%</span>
                <span className="text-gray-500 text-xl font-semibold">
                  Ans Took
                </span>
              </p>

              <FaArrowUpLong className="text-red-600 ml-2 mt-2" size={24} />
              <p className="text-purple-600 mt-4 font-semibold">2min</p>
            </div>
          </div>

          <div className="border-t-2 border-b-2 border-gray-300 w-[90%] box-border rounded-sm mt-6 ml-3"></div>

          <div className="flex items-center justify-center mt-6">
            <p className="text-4xl font-semibold">
              You are <span className="text-red-600">slow</span>!
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="flex w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 justify-center items-center rounded-md">
              <TbStairsUp className="w-full" />
            </div>

            <p className="my-2 text-gray-400">Approach Data</p>
          </div>

          <div className="flex items-center ml-1 mb-2 border-1 border-gray-300 bg-gray-100 w-[96%] h-16 rounded-md">
            <div className="w-12 h-12 ml-2 rounded-md bg-violet-300 flex items-center justify-center">
              <p className="text-violet-600 text-lg font-semibold">25%</p>
            </div>
            <p className="ml-2 text-lg font-semibold">
              Based on <span className="text-violet-600">Facts</span>
            </p>
          </div>

          <div className="flex items-center ml-1 mb-2 border-1 border-gray-300 bg-gray-100 w-[96%] h-16 rounded-md">
            <div className="w-12 h-12 ml-2 rounded-md bg-violet-300 flex items-center justify-center">
              <p className="text-violet-600 text-lg font-semibold">32%</p>
            </div>
            <p className="ml-2 text-lg font-semibold">
              Based on <span className="text-violet-600">Analysis</span>
            </p>
          </div>

          <div className="flex items-center ml-1 mb-2 border-1 border-gray-300 bg-gray-100 w-[96%] h-16 rounded-md">
            <div className="w-12 h-12 ml-2 rounded-md bg-violet-300 flex items-center justify-center">
              <p className="text-violet-600 text-lg font-semibold">19%</p>
            </div>
            <p className="ml-2 text-lg font-semibold whitespace-nowrap">
              Based on <span className="text-violet-600">Elimination</span>
            </p>
          </div>

          <div className="flex items-center ml-1 mb-2 border-1 border-gray-300 bg-gray-100 w-[96%] h-16 rounded-md">
            <div className="w-12 h-12 ml-2 rounded-md bg-violet-300 flex items-center justify-center">
              <p className="text-violet-600 text-lg font-semibold">24%</p>
            </div>
            <p className="ml-2 text-lg font-semibold">
              Based on <span className="text-violet-600">Guess</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md">
              <TbSparkles />
            </div>
            <p className="my-2 text-gray-400">Suggestions</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 ml-2 mr-2">
            <p className="flex items-center justify-center py-1 px-6 bg-violet-900 rounded-lg text-white font-medium whitespace-nowrap">
              Q. 1-12
            </p>
            <p className="flex items-center justify-center py-1 px-6 bg-violet-900 rounded-lg text-white font-medium whitespace-nowrap">
              Q. 12-32
            </p>
            <p className="flex items-center justify-center py-1 px-6 bg-violet-900 rounded-lg text-white font-medium whitespace-nowrap">
              Q. 32-40
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 ml-2 mr-2">
            <div className="flex items-center border-2 border-dotted border-violet-400 bg-violet-100 w-16 h-12 rounded-md">
              <p className="ml-1 text-2xl font-semibold">
                40<span className="font-semibold text-sm">sec</span>
              </p>
            </div>

            <div className="flex items-center border-2 border-dotted border-violet-400 bg-violet-100 w-16 h-12 rounded-md">
              <p className="ml-1 text-2xl font-semibold">
                1.5<span className="font-semibold text-sm">min</span>
              </p>
            </div>

            <div className="flex items-center border-2 border-dotted border-violet-400 bg-violet-100 w-16 h-12 rounded-md">
              <p className="ml-3 text-2xl font-semibold">
                3<span className="font-semibold text-sm">min</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 ml-2 mt-6">
            <p className="text-xl ml-4 font-semibold text-cyan-500">Easy</p>
            <p className="text-lg ml-1 font-semibold text-yellow-500">Medium</p>
            <p className="text-xl ml-4 font-semibold text-red-500">Hard</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col px-4 rounded-xl shadow-md border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md">
              <FaCodeCompare className="text-gray-700" />
            </div>
            <p className="my-2 text-gray-400">Compare Accuracy</p>
          </div>

          <div className="flex justify-center items-center mt-2 mr-2">
            <img
              src={"/graph.png"}
              alt="Graph"
              className="overflow-hidden w-full"
            />
          </div>
        </div>

        <div className="flex flex-col rounded-xl shadow-md px-4 border border-gray-300 w-[90%] min-h-80">
          <div className="flex">
            <div className="w-6 h-6 shadow-md border border-gray-200 my-2 mx-2 flex justify-center items-center rounded-md">
              <PiProjectorScreenChartBold className="text-gray-700" />
            </div>
            <p className="my-2 text-gray-400">Time Taken</p>
          </div>

          <div className="flex flex-col gap-2">
            <img src={"/scale1.png"} alt="Ruler_Scale_Img" />
            <p className="text-gray-400 text-sm ml-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              officia ad adipisci voluptate accusamus aperiam.
            </p>

            <img src={"/scale2.png"} alt="Ruler_Scale_Img" />
            <p className="text-gray-400 text-sm pb-4 ml-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              officia ad adipisci voluptate accusamus aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuFileInput } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 h-auto lg:h-[97%] bg-gray-50 rounded-lg shadow-md border border-gray-200 mx-4 lg:ml-16 my-4 p-4">
      <div className="w-full h-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src={"/sidebar.png"}
            alt="Sidebar Logo"
            className="w-32 lg:w-64 lg:mt-2"
          />
          <p className="text-violet-900 text-2xl lg:text-5xl font-medium mt-2 lg:mt-4">
            Your Result!
          </p>
          <p className="text-gray-400 text-sm lg:text-xl font-medium mt-2 lg:mt-4 mb-4">
            All your insights & details in one place
          </p>
        </div>

        {/* Score Box */}
        <div className="flex justify-center mt-2">
          <div className="rounded-xl shadow-md border border-gray-200 w-full lg:w-[90%] p-4">
            <div className="flex items-center border border-gray-200 bg-gray-100 w-full h-auto rounded-md p-3">
              <div className="w-10 h-10 bg-purple-100 flex items-center justify-center">
                <BsBagCheck className="text-purple-950" />
              </div>
              <div className="flex flex-col ml-4">
                <p className="bg-purple-800 text-white px-2 text-xs py-1 font-semibold rounded-full">
                  YOU'VE PASSED
                </p>
                <p className="text-black text-lg lg:text-2xl font-medium">
                  136 <span className="text-gray-400 text-xs">/240</span>
                </p>
              </div>
              <div className="hidden lg:block border-r-2 border-gray-300 h-[60%] mx-4"></div>
              <div className="flex items-center flex-col ml-4">
                <div className="h-6 w-12 bg-green-600 rounded-md flex items-center justify-center">
                  <p className="text-white text-sm font-semibold">76%</p>
                </div>
                <p className="text-xs text-green-600 font-semibold">Accuracy</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-100 border border-gray-200 rounded-md p-3 mt-4">
              <div className="flex items-center">
                <img
                  src={"/profile.png"}
                  alt="Profile Logo"
                  className="w-10 h-10 rounded-md"
                />
                <div className="flex flex-col ml-4">
                  <p className="text-purple-800 text-sm font-semibold">
                    Top Score
                  </p>
                  <p className="text-black text-lg lg:text-2xl font-medium">
                    230 <span className="text-gray-400 text-xs">/240</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end ml-auto">
                <Link to="https://github.com/arjit88">
                  <p className="text-gray-400 text-sm">
                    By{" "}
                    <span className="text-black font-semibold hover:text-purple-800">
                      Arjit Anand
                    </span>
                  </p>
                </Link>
                <p className="bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded-full mt-2">
                  92% Accuracy
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-black text-lg lg:text-xl font-semibold">
                Improve your Marks
              </p>
              <p className="text-gray-400 text-sm">
                Improve your score by practicing more
              </p>
              <button className="flex items-center justify-center gap-2 py-2 mt-2 bg-violet-900 rounded-lg text-white font-medium w-full">
                Practice More
              </button>
            </div>
          </div>
        </div>

        {/* Revisit Paper Section */}
        <div className="flex justify-center mt-8 mb-2">
          <div className="rounded-xl shadow-md border border-gray-200 w-full lg:w-[90%] p-4">
            <p className="text-black font-bold text-lg">Revisit Paper</p>
            <p className="text-gray-400 text-sm mt-2">
              Challenge your friends by simply sharing a link to this test
            </p>
            <button className="flex items-center justify-center gap-2 py-2 mt-4 bg-violet-900 rounded-lg text-white font-medium w-full">
              <LuFileInput className="text-white" />
              Visit
            </button>
            <div className="mt-4 flex items-start gap-2">
              <IoMdInformationCircleOutline
                className="text-gray-400"
                size={20}
              />
              <p className="text-sm text-gray-400">
                Instructions for how to upload your handwritten material are
                given
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

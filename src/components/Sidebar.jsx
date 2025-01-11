import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuFileInput } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-[97%] bg-gray-50 rounded-lg shadow-md border border-gray-200 ml-16 my-4">
      <div className="w-full h-full">
        <div className="flex items-center justify-center flex-col">
          <img src={"/sidebar.png"} alt="Sidebar Logo" className="w-40" />
          <p className="text-violet-900 text-4xl font-medium">Your Result!</p>
          <p className="text-gray-400 text-xl font-medium mt-1">
            All your insights & details in one place
          </p>
        </div>

        {/* Score Box */}
        <div className="flex items-center justify-center mt-2">
          <div className="rounded-xl shadow-md border border-gray-200 w-[90%] min-h-[340px]">
            <div className="flex items-center border border-gray-200 bg-gray-100 w-[90%] h-16 rounded-md mt-4 ml-3">
              <div className="w-10 h-10 bg-purple-100 mx-2 flex items-center justify-center">
                <BsBagCheck className="text-purple-950" />
              </div>
              <div className="flex flex-col mt-2">
                <p className="bg-purple-800 text-white px-2 text-xs py-1 font-semibold whitespace-nowrap rounded-full">
                  YOU'VE PASSED
                </p>
                <p className="text-black text-2xl ml-1 font-medium">
                  136 <span className="text-gray-400 text-xs">/240</span>
                </p>
              </div>

              <div className="border-r-2 border-gray-300 h-[60%] ml-10"></div>
              <div className="flex justify-center items-center flex-col ml-2">
                <div className="h-6 w-10 ml-[2px] bg-green-600 rounded-md flex justify-center items-center">
                  <p className="text-white text-sm font-semibold">76%</p>
                </div>
                <p className="text-xs text-green-600 font-semibold">Accuracy</p>
              </div>
            </div>
            <div className="flex items-center border border-gray-200 bg-gray-100 w-[90%] h-32 rounded-md mt-3 ml-3 px-2">
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <div className="w-10 h-12 flex items-center flex-row justify-center">
                    <img
                      src={"/profile.png"}
                      alt="Profile Logo"
                      className="rounded-md mt-2"
                    />
                  </div>
                  <div className="flex flex-col mt-1">
                    <p className="text-purple-800 px-2 mt-1 text-sm font-semibold whitespace-nowrap rounded-full">
                      Top Score
                    </p>
                    <p className="text-black text-2xl ml-1 font-medium">
                      230 <span className="text-gray-400 text-xs">/240</span>
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-b-2 border-gray-300 w-full box-border rounded-sm mt-1"></div>
                <div className="flex mt-2 mb-3">
                  <Link to={"https://github.com/arjit88"}>
                    <p className="text-gray-400">
                      By{" "}
                      <span className="text-black hover:text-purple-800">
                        Arjit Anand
                      </span>
                    </p>
                  </Link>
                  <div className="bg-green-600 text-white px-2 mt-1 text-sm font-semibold whitespace-nowrap rounded-full ml-14">
                    92% Accuracy
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-black text-xl font-semibold">
                Improve your Marks
              </p>
              <p className="text-gray-400 text-sm font-semibold">
                Improve your score by practicing more
              </p>
              <button className="flex items-center justify-center mr-6 gap-2 py-2 mt-2 bg-violet-900 rounded-lg text-white font-medium">
                Practice More
              </button>
            </div>
          </div>
        </div>

        {/* Revisit Paper Section */}
        <div className="flex items-center justify-center mt-3 mb-3">
          <div className="rounded-xl shadow-md border border-gray-200 w-[90%] h-56">
            <p className="text-black font-semibold text-xl mx-3 pt-3">
              Revisit Paper
            </p>
            <p className="text-gray-400 text-sm mx-3 py-1 w-60">
              Challenge your friends by simply sharing a link to this test
            </p>
            <div className="flex items-center justify-center mt-4">
              <button className="flex items-center justify-center gap-2 py-2 px-20 bg-violet-900 rounded-lg text-white font-medium">
                <LuFileInput className="text-white" />
                Visit
              </button>
            </div>
            <div className="mt-4 mx-3 flex gap-2">
              <IoMdInformationCircleOutline
                className="text-gray-400"
                size={24}
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

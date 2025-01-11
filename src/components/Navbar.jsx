import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 bg-gray-800 h-14 text-white font-semibold">
      <div className="flex items-center">
        <img
          src={"/logo.png"}
          alt="Logo"
          className="w-8 bg-transparent mr-[-1px] pt-[1px]"
        />
        Firstbench
      </div>

      <div className="flex space-x-14 font-semibold">
        <div>Dashboard</div>

        <div>FirstGuru</div>

        <div>TownHall</div>

        <div>AllEvaluation</div>

        <div>Performance</div>

        <div>Mock Test</div>
      </div>

      <div className="flex font-semibold">
        <div>Bell</div>

        <div>Avatar</div>
      </div>
    </div>
  );
};

export default Navbar;

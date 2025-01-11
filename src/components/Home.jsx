import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-300">
      {/* Navbar */}
      <Navbar className="w-full" />

      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar */}
        <Sidebar className="w-full sm:w-1/4 bg-gray-800 text-white" />

        {/* Hero Section */}
        <Hero className="w-full sm:flex-1 bg-gray-100" />
      </div>
    </div>
  );
};

export default Home;

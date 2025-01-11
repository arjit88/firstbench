import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar className="w-full" />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar className="w-1/4 bg-gray-800 text-white" />

        {/* Hero Section */}
        <Hero className="flex-1 bg-gray-100" />
      </div>
    </div>
  );
};

export default App;

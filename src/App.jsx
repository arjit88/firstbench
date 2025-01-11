import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { Dashboard } from "./pages/Dashboard";
import FirstGuru from "./pages/FirstGuru";
import TownHall from "./pages/TownHall";
import AiEvaluation from "./pages/AiEvaluation";
import MockTest from "./pages/MockTest";
import Performance from "./pages/Performance";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <Navbar className="w-full" />

        {/* Main Content */}
        <div className="flex flex-1 flex-col sm:flex-row">
          {/* Sidebar */}
          <Sidebar className="w-full sm:w-1/4 bg-gray-800 text-white sm:block hidden" />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<Hero />} />
              {/* Hero is the default for '/' */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/firstguru" element={<FirstGuru />} />
              <Route path="/townhall" element={<TownHall />} />
              <Route path="/ai-evaluation" element={<AiEvaluation />} />
              <Route path="/ai-evaluation" element={<Performance />} />
              <Route path="/mock-test" element={<MockTest />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

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
import Performance from "./pages/pERFORMANCE.JSX";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-300">
        {/* Navbar */}
        <Navbar className="w-full" />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar className="w-1/4 bg-gray-800 text-white" />

          {/* Content Area */}
          <div className="flex-1 bg-gray-100">
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<Hero />} />
              {/* Hero is the default for '/' */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/firstguru" element={<FirstGuru />} />
              <Route path="/townhall" element={<TownHall />} />
              <Route path="/ai-evaluation" element={<AiEvaluation />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/mock-test" element={<MockTest />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

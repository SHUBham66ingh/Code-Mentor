
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewChat from "./pages/NewChat";
import Explore from "./pages/Explore";
import Header from "./components/Header";
import DashBoard  from "./pages/DashBoard";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-gray-800 text-white m-4 rounded fixed top-4 left-4 z-50"
      >

        <div className="space-y-1">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </button>

      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Main Content — Shrinks When Sidebar Opens */}
      <div
  className={`flex-1 min-h-screen bg-gray-900 p-10 transition-all duration-300
  ${open ? "ml-80" : "ml-0"}`}
         >

        <Routes>
          <Route path="/" element={<DashBoard></DashBoard>}></Route>
          <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>
    </div>
  );
}




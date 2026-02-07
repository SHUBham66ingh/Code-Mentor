import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  BookOpen,
  Settings,
  Info
} from "lucide-react";

export default function Sidebar({ open }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white p-8 
        transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Heading */}
     
      <ul className="flex flex-col justify-center h-full space-y-8 text-xl font-semibold">
        
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/dashboard" className="flex items-center gap-4">
            <LayoutDashboard size={26} />
            Dashboard
          </Link>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/saved" className="flex items-center gap-4">
            <History size={26} />
            History
          </Link>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/history" className="flex items-center gap-4">
            <BookOpen size={26} />
            Tutorials
          </Link>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/explore" className="flex items-center gap-4">
            <Settings size={26} />
            Settings
          </Link>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/settings" className="flex items-center gap-4">
            <Info size={26} />
            About Us
          </Link>
        </li>

      </ul>
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  Settings,
  Info
} from "lucide-react";

export default function Sidebar({ open }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white p-8 
        transition-transform duration-300 z-40
        flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Menu */}
      <ul className="flex flex-col justify-center flex-1 space-y-8 text-xl font-semibold">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/dashboard" className="flex items-center gap-4">
            <LayoutDashboard size={26} />
            Dashboard
          </Link>
        </li>

  
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/setting" className="flex items-center gap-4">
            <Settings size={26} />
            Settings
          </Link>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/about" className="flex items-center gap-4">
            <Info size={26} />
            About Us
          </Link>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto text-center text-sm text-gray-400">
        Made with ❤️ by Shubham
      </div>
    </div>
  );
}


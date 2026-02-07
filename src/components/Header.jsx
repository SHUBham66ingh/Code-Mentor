import React from "react";
import { Bell } from "lucide-react";

export default function Header({ open, setOpen }) {
  return (
    <header
      className={`w- mt-11  h-20 bg-gray-800 flex items-center justify-between px-6 shadow-md 
      transition-all duration-300`}
    >
     
      {/* Center Heading */}
      <h1 className=" pl-6 text-3xl font-bold text-white">
        AI ChatBox
      </h1>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6 text-white">

        {/* Notification Icon */}
        <Bell size={26} className="hover:text-blue-400 cursor-pointer" />

        {/* Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold cursor-pointer">
          S
        </div>
      </div>
    </header>
  );
}

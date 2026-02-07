import React from "react";

export default function Explore() {
  return (
    <div className="min-h-screen p-12 bg-gray-50 overflow-y-auto">

      {/* Page Heading */}
      <h1 className="text-5xl font-bold mb-6 text-gray-900">About Us</h1>

      {/* Subtitle */}
      <p className="text-gray-700 text-xl mb-12 max-w-4xl leading-relaxed">
        Learn more about the vision behind ChatAI and the creator who built it
        with passion, dedication, and the goal of making intelligent tools accessible to everyone.
      </p>

      {/* Mission */}
      <div className="bg-white shadow-md border rounded-xl p-10 mb-12 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-8">
          ChatAI was created to bring the power of artificial intelligence into everyday life.
          The mission is simple—build an intelligent, fast, and reliable digital assistant 
          that enhances productivity, creativity, and learning for people around the world.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-md border rounded-xl p-10 mb-12 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-8">
          The vision behind ChatAI is to create a future where AI effortlessly supports human work,
          simplifies complex tasks, and opens new paths for innovation. This project aims to evolve
          with technology and continuously deliver smarter experiences.
        </p>
      </div>

      {/* Creator Section */}
      <div className="bg-white shadow-md border rounded-xl p-10 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Creator</h2>

        <div className="bg-gray-100 p-10 rounded-xl shadow-sm text-center max-w-md mx-auto">
          <div className="w-28 h-28 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <h3 className="text-3xl font-semibold text-gray-900">Shubham Singh</h3>
          <p className="text-gray-700 text-lg mt-3">
            Developer & Creator of ChatAI  
          </p>
        </div>
      </div>
    </div>
  );
}


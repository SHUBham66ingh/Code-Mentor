import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setSolution("");

    try {
      const result = await model.generateContent(input);
      const response = result.response.text();

      setSolution(response);
    } catch (error) {
      setSolution("Something went wrong while generating the solution.");
    }

    setLoading(false);
    setInput("");
  };
     
   const handleAsk = async () => {
  if (!input.trim()) return;

  try {
    setLoading(true);
    const result = await model.generateContent(input);
    const response = await result.response;
    setSolution(response.text());
  } catch (error) {
    setSolution("Error generating response. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* HEADER — unchanged */}

      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 px-10 py-10 flex items-center justify-center">
        <h1 className="text-5xl font-bold tracking-wide text-white">
          Code Mentor
        </h1>
      </header>

      <main className="relative flex-1 px-16 py-20 bg-slate-900 min-h-screen">
        <div className="grid grid-rows-2 gap-8">
          {/* ROW 1 — TWO COLUMNS */}
          <div className="grid grid-cols-2 gap-8 h-[40vh]">


            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

               <div className="space-y-4">
    <h2 className="text-4xl font-extrabold text-white leading-tight">
      Welcome back
    </h2>
    <p className="text-slate-300 text-lg font-medium max-w-xl">
      Continue your coding journey and sharpen your problem-solving skills to
      become a top-tier developer.
    </p>
  </div>

  {/* 2️⃣ Quick Stats Section */}
  <div className="mt-10 grid grid-cols-2 gap-6">
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm font-semibold uppercase tracking-wide">
        Problems Solved
      </p>
      <h3 className="text-white text-3xl font-extrabold mt-2">350+</h3>
    </div>

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm font-semibold uppercase tracking-wide">
        Projects Built
      </p>
      <h3 className="text-white text-3xl font-extrabold mt-2">6+</h3>
    </div>
  </div>

              
             
            </div>

          
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
  <h2 className="text-2xl font-semibold text-white mb-4">
    Trending Topics
  </h2>

  <ul className="space-y-5 text-lg font-semibold">
  <li className="flex items-center justify-between text-slate-200 hover:text-blue-400 cursor-pointer transition duration-200">
    <span className="tracking-wide">→ React Performance Optimization</span>
  </li>

  <li className="flex items-center justify-between text-slate-200 hover:text-blue-400 cursor-pointer transition duration-200">
    <span className="tracking-wide">→ System Design for Beginners</span>
  </li>

  <li className="flex items-center justify-between text-slate-200 hover:text-blue-400 cursor-pointer transition duration-200">
    <span className="tracking-wide">→ DSA Patterns for Interviews</span>
  </li>

  <li className="flex items-center justify-between text-slate-200 hover:text-blue-400 cursor-pointer transition duration-200">
    <span className="tracking-wide">→ Node.js API Security</span>
  </li>

  <li className="flex items-center justify-between text-slate-200 hover:text-blue-400 cursor-pointer transition duration-200">
    <span className="tracking-wide">→ AI Tools for Developers</span>
  </li>
</ul>

</div>

                   
          </div>

          {/* ROW 2 — SINGLE FULL-WIDTH COLUMN */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold text-white mb-3">
    AI Solution
  </h2>

  {/* Question Input */}
  <div className="mb-4">
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask your question here..."
      className="w-full bg-slate-900 text-white border border-slate-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
    />
    <button
  onClick={handleAsk}
  disabled={loading || !input.trim()}
  className="mt-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-medium px-4 py-2 rounded-lg transition-all"
>
  {loading ? "Generating..." : "Ask AI"}
</button>
  </div>

  {/* Response Section */}
  <div className="flex-1 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl p-4">
    {loading ? (
      <p className="text-slate-400 text-sm animate-pulse">
        Generating response...
      </p>
    ) : solution ? (
      <p className="text-slate-200 text-sm whitespace-pre-wrap">
        {solution}
      </p>
    ) : (
      <p className="text-slate-500 text-sm">
        Your AI answer will appear here...
      </p>
    )}
  </div>
          </div>




        </div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-700 py-4 text-center">
  <p className="text-slate-400 text-sm font-medium tracking-wide">
    © {new Date().getFullYear()} All rights reserved to Shubham Singh
  </p>
</footer>
    </>
  );
}

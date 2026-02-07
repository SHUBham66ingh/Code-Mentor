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
              <h2 className="text-xl font-semibold text-white mb-3">
                Input / Problem
              </h2>
              <p className="text-slate-400 text-sm">
                User question or pasted code.
              </p>
            </div>

          
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
  <h2 className="text-xl font-semibold text-white mb-4">
    🔥 Trending Topics
  </h2>

  <ul className="space-y-3 text-sm">
    <li className="flex items-center justify-between text-slate-300 hover:text-blue-400 cursor-pointer transition">
      <span>React Performance Optimization</span>
      <span className="text-xs text-slate-500">#react</span>
    </li>

    <li className="flex items-center justify-between text-slate-300 hover:text-blue-400 cursor-pointer transition">
      <span>System Design for Beginners</span>
      <span className="text-xs text-slate-500">#systemdesign</span>
    </li>

    <li className="flex items-center justify-between text-slate-300 hover:text-blue-400 cursor-pointer transition">
      <span>DSA Patterns for Interviews</span>
      <span className="text-xs text-slate-500">#dsa</span>
    </li>

    <li className="flex items-center justify-between text-slate-300 hover:text-blue-400 cursor-pointer transition">
      <span>Node.js API Security</span>
      <span className="text-xs text-slate-500">#backend</span>
    </li>

    <li className="flex items-center justify-between text-slate-300 hover:text-blue-400 cursor-pointer transition">
      <span>AI Tools for Developers</span>
      <span className="text-xs text-slate-500">#ai</span>
    </li>
  </ul>
</div>

           

            


            



            
          </div>

          {/* ROW 2 — SINGLE FULL-WIDTH COLUMN */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold text-white mb-3">
              AI Solution
            </h2>
            <p className="text-slate-400 text-sm whitespace-pre-wrap">
              {loading ? "Generating response..." : solution}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

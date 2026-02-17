import React from "react";
import { Sparkles, Brain, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-500">ChatMentor</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          ChatAI is an intelligent conversational assistant designed to help
          users solve problems, generate ideas, and learn faster. Built with
          advanced AI technology, it delivers accurate, real-time responses
          in a simple and interactive way.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to make artificial intelligence accessible to everyone.
            Whether you're a student, developer, entrepreneur, or professional,
            ChatAI is built to enhance productivity, creativity, and learning.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
          <Sparkles className="text-blue-500 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Smart & Adaptive</h3>
          <p className="text-gray-400 text-sm">
            ChatAI continuously adapts to user queries and provides intelligent,
            context-aware responses in seconds.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
            <Brain className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Responses</h3>
            <p className="text-gray-400 text-sm">
              Get intelligent and meaningful answers powered by advanced AI models.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
            <Zap className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">Fast & Real-Time</h3>
            <p className="text-gray-400 text-sm">
              Experience lightning-fast responses with minimal latency.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
            <ShieldCheck className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-400 text-sm">
              Your interactions are handled securely with reliable AI systems.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-blue-500 text-3xl font-bold mb-4">01</div>
            <h3 className="font-semibold mb-2">Ask Your Question</h3>
            <p className="text-gray-400 text-sm">
              Type your query in the chat input box.
            </p>
          </div>

          <div>
            <div className="text-blue-500 text-3xl font-bold mb-4">02</div>
            <h3 className="font-semibold mb-2">AI Processes It</h3>
            <p className="text-gray-400 text-sm">
              Our AI model analyzes your question instantly.
            </p>
          </div>

          <div>
            <div className="text-blue-500 text-3xl font-bold mb-4">03</div>
            <h3 className="font-semibold mb-2">Get Smart Response</h3>
            <p className="text-gray-400 text-sm">
              Receive a helpful and detailed answer within seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900 rounded-2xl p-10 border border-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose ChatAI?
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          ChatAI combines cutting-edge artificial intelligence with a clean,
          distraction-free interface. Designed for speed, accuracy, and simplicity,
          it helps users focus on what truly matters — getting answers and building ideas.
        </p>
      </div>

      <footer className="bg-slate-900 border-t border-slate-700 py-4 text-center">
  <p className="text-slate-400 text-sm font-medium tracking-wide">
    © {new Date().getFullYear()} All rights reserved to Shubham Singh
  </p>
</footer>
    </div>
       
  );
}

import React from "react";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-6 text-center">Hello, I'm Harsh Malik</h1>

      {/* About Me Section */}
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a frontend developer who loves building responsive and interactive web applications.
          I specialize in React and Tailwind CSS. Always eager to learn and explore new technologies.
        </p>
      </section>

      {/* You can add more sections below */}
    </div>
  );
}

export default App;

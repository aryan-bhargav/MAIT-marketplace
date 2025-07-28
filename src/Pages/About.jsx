import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-6 text-center">
          About MAIT Marketplace
        </h1>

        <p className="text-lg mb-6">
          <span className="text-blue-500 font-semibold">MAIT Marketplace</span> is a student-driven platform built exclusively for students of
          <span className="text-orange-500 font-semibold"> Maharaja Agrasen Institute of Technology (MAIT)</span>.
          It allows you to buy and sell used academic essentials such as calculators, drafters,
          sheet holders, lab coats, books, and more — easily and securely.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-orange-400 font-semibold mb-2">🎯 Our Goal</h2>
            <p>
              To promote sustainable sharing, affordability, and peer-to-peer convenience
              in our campus community by reducing waste and reusing valuable resources.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-orange-400 font-semibold mb-2">🔒 Why Only MAIT?</h2>
            <p>
              The marketplace is limited to MAIT students only — making it safer, easier to trust, and quicker to transact within our college ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-inner border border-gray-700">
          <h2 className="text-xl text-orange-400 font-semibold mb-3">💡 Built By Students, For Students</h2>
          <p>
            This project is built by passionate developers from MAIT. If you want to contribute, improve or help grow this platform — we welcome collaboration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

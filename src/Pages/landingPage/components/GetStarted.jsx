import React from "react";

const GetStarted = () => {
  return (
    <section className="flex justify-center items-center px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Get Started
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Deploy OpenChatHub with Docker in minutes.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto">
            Deploy with Docker
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      {/* Spinning UI */}
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Fitness-themed loading text */}
      <h2 className="mt-6 text-xl font-semibold text-gray-700 animate-pulse">
        Warming up...
      </h2>
      <p className="text-gray-500 mt-2">
        Fetching your exercises. Get ready to sweat!
      </p>
    </div>
  );
}

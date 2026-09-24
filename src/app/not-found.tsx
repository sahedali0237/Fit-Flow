import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-sm">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-6">
        Looks like you wandered off the trail!
      </h2>
      <p className="text-gray-600 mt-4 max-w-md mx-auto">
        We couldn&apos;t find the page you&apos;re looking for. It may have been
        moved, or you just took a wrong turn during your workout.
      </p>

      <Link
        href="/"
        className="mt-8 mx-auto px-6 py-3 w-max bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}

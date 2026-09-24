"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiCheck, FiX } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
import { gymTs } from "@/types";

interface PlanCardProps {
  exercise: gymTs;
  onDelete?: (id?: string | number) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ exercise, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between rounded-xl border border-[#252a33] bg-[#13161c] p-4 gap-4">
      {/* Left side: Image and Info */}
      <div className="flex w-full items-center gap-4 sm:w-auto">
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={100}
          height={64}
          className="h-16 w-25 rounded-lg bg-[#20242b] object-cover"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-extrabold uppercase tracking-wide">
            {exercise.name}
          </h3>
          <p className="mb-2 text-[11px] text-gray-500">
            {exercise.difficulty || "Equipment Not Specified"}
          </p>

          <div className="flex items-center gap-4 text-[10px] font-medium text-gray-400">
            {/* Time / Clock Icon */}
            <span className="flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5 text-[#c8ff00]" />
              {exercise.duration}
            </span>

            {/* Calories / Fire Icon */}
            <span className="flex items-center gap-1">
              <FaFire className="h-3.5 w-3.5 text-[#c8ff00]" />
              {exercise.caloriesBurned}
            </span>

            {/* Rating / Star Icon */}
            {exercise.rating && (
              <span className="flex items-center gap-1">
                <FaStar className="h-3.5 w-3.5 text-[#c8ff00]" />
                {exercise.rating}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
        <button className="rounded-full border border-[#252a33] px-4 py-2 text-[10px] font-medium text-gray-300 transition-colors hover:bg-[#20242b]">
          View Details
        </button>

        {/* Mark as Done / Check Icon */}
        <button className="flex items-center gap-1.5 rounded-full bg-[#c8ff00] px-4 py-2 text-[10px] font-extrabold text-black transition-colors hover:bg-[#b5eb00]">
          <FiCheck className="h-3.5 w-3.5 stroke-[3px]" />
          Mark as Done
        </button>

        {/* Delete / X Icon */}
        <button
          onClick={() => {
            if (onDelete) onDelete(exercise.id);
            else console.log("Delete clicked for", exercise.id);
          }}
          className="ml-1 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-[#20242b] hover:text-white"
          title="Remove"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

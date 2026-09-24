"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiCheck, FiX } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
import { gymTs } from "@/types/page";
import { toast } from "react-toastify";
import Link from "next/link";
import WorkoutCard from "../workout/workoutCard";

interface PlanCardProps {
  exercise: gymTs;
  onDelete?: (id: string | number) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ exercise, onDelete }) => {
  const handleDelete = (id: string | number) => {
    toast.success(`${exercise.name} removed from your plan`);
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#252a33] bg-[#13161c] p-4 sm:flex-row">
      {/* Left */}
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
            <span className="flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5 text-[#c8ff00]" />
              {exercise.duration}
            </span>

            <span className="flex items-center gap-1">
              <FaFire className="h-3.5 w-3.5 text-[#c8ff00]" />
              {exercise.caloriesBurned}
            </span>

            {exercise.rating && (
              <span className="flex items-center gap-1">
                <FaStar className="h-3.5 w-3.5 text-[#c8ff00]" />
                {exercise.rating}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
        <Link
          href={`/workout/${exercise.id}`}
          type="button"
          className="rounded-full border border-[#252a33] px-4 py-2 text-[10px] font-medium text-gray-300 hover:bg-[#20242b]"
        >
          View Details
        </Link>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-[#c8ff00] px-4 py-2 text-[10px] font-extrabold text-black hover:bg-[#b5eb00]"
        >
          <FiCheck className="h-3.5 w-3.5 stroke-[3px]" />
          Mark as Done
        </button>

        {/* Delete */}
        <button
          onClick={() => handleDelete(exercise.id)}
          className="relative z-50 ml-1 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-[#20242b] hover:text-red-400"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

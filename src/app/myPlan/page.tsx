"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { gymContext } from "@/context/page";
import PlanCard from "@/app/myPlan/planCard";
import { gymTs } from "@/types/page";

type Tab = "today" | "saved";

const MyPlan = () => {
  const context = useContext(gymContext);
  const [activeTab, setActiveTab] = useState<Tab>("today");

  const myPlan = context?.myPlan ?? [];
  const savedLater = context?.savedLater ?? [];

  const normalizeExercise = (exercise: gymTs) => ({
    ...exercise,
    duration:
      typeof exercise.duration === "number"
        ? `${exercise.duration} min`
        : String(exercise.duration ?? ""),
    caloriesBurned:
      typeof exercise.caloriesBurned === "number"
        ? `${exercise.caloriesBurned} kcal`
        : String(exercise.caloriesBurned ?? ""),
  });

  const activeExercises = (activeTab === "today" ? myPlan : savedLater).map(
    normalizeExercise,
  );

  const stats = useMemo(() => {
    const exercises = activeExercises.length;

    const minutes = activeExercises.reduce((total, exercise) => {
      const value = Number(
        String(exercise.duration ?? "").match(/\d+(\.\d+)?/)?.[0] ?? 0,
      );
      return total + value;
    }, 0);

    const calories = activeExercises.reduce((total, exercise) => {
      const value = Number(
        String(exercise.caloriesBurned ?? "").match(/\d+(\.\d+)?/)?.[0] ?? 0,
      );
      return total + value;
    }, 0);

    return {
      exercises,
      minutes,
      calories,
    };
  }, [activeExercises]);

  const handleDelete = (id?: string | number) => {
    console.log(`Removing exercise ${id} from ${activeTab}`);
  };

  if (!context) {
    return null;
  }

  return (
    <section className="min-h-screen bg-[#0f1115] px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div>
          <h1 className="text-[24px] font-extrabold uppercase tracking-tight">
            MY PLAN
          </h1>
          <p className="mt-1 text-[11px] text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5 grid min-h-23 grid-cols-3 rounded-xl border border-[#252a33] bg-[#13161c]">
          <div className="flex flex-col justify-center border-r border-[#20242b] px-5 sm:px-8">
            <span className="text-[9px] font-medium uppercase text-gray-500">
              Exercises
            </span>
            <span className="mt-1 text-[29px] font-extrabold leading-none text-[#c8ff00]">
              {stats.exercises}
            </span>
          </div>
          <div className="flex flex-col justify-center border-r border-[#20242b] px-5 sm:px-8">
            <span className="text-[9px] font-medium uppercase text-gray-500">
              Minutes
            </span>
            <span className="mt-1 text-[29px] font-extrabold leading-none">
              {stats.minutes}
            </span>
          </div>
          <div className="flex flex-col justify-center px-5 sm:px-8">
            <span className="text-[9px] font-medium uppercase text-gray-500">
              Calories
            </span>
            <span className="mt-1 text-[29px] font-extrabold leading-none">
              {stats.calories}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex rounded-lg border border-[#252a33] bg-[#13161c] p-0.5">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-[10px] transition ${
                activeTab === "today"
                  ? "bg-[#1c2129] font-semibold text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Today&apos;s Plan
              {myPlan.length > 0 && (
                <span className="ml-1 text-[#c8ff00]">({myPlan.length})</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-5 py-2 text-[10px] transition ${
                activeTab === "saved"
                  ? "bg-[#1c2129] font-semibold text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Saved
              {savedLater.length > 0 && (
                <span className="ml-1 text-[#c8ff00]">
                  ({savedLater.length})
                </span>
              )}
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] text-gray-500 sm:block">
              Sort By
            </span>
            <select className="rounded-lg border border-[#252a33] bg-[#13161c] px-3 py-2 text-[10px] text-gray-300 outline-none">
              <option>Duration</option>
              <option>Calories</option>
              <option>Name</option>
            </select>
          </div>
        </div>

        {/* Content Area */}
        {activeExercises.length === 0 ? (
          <div className="mt-4 flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-dotted border-[#282d35] bg-[#0d0f12] text-center">
            <h2 className="text-[16px] font-extrabold uppercase tracking-wide">
              NOTHING HERE YET
            </h2>
            <p className="mt-2 text-[11px] text-gray-500">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save an exercise and it will appear here."}
            </p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-[#c8ff00] px-6 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#b5eb00]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {activeExercises.map((exercise) => (
              <PlanCard
                key={exercise.id || exercise.name}
                exercise={exercise}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlan;

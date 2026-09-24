"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { gymTs } from "@/types/page";
import { gymContext } from "@/context/page";

const TodayPlan = ({ gym }: { gym: gymTs }) => {
  const context = useContext(gymContext);

  if (!context) {
    return null;
  }

  const { myPlan, setMyPlan } = context;

  const handleAddToPlan = () => {
    // Prevent duplicate exercises
    if (myPlan.some((item) => item.id === gym.id)) {
      toast.info(`${gym.name} is already in today's plan!`);
      return;
    }

    setMyPlan((prevPlan) => [...prevPlan, gym]);

    toast.success(`${gym.name} added to today's plan!`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="flex items-center gap-2 rounded-lg bg-[#c8ff00] px-5 py-2.5 text-[12px] font-bold text-black transition hover:bg-[#b5eb00]"
    >
      <span>▣</span>
      Add to today&apos;s plan
    </button>
  );
};

export default TodayPlan;

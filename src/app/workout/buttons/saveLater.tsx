"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { gymTs } from "@/types/page";
import { gymContext } from "@/context/page";

const SaveLater = ({ gym }: { gym: gymTs }) => {
  const context = useContext(gymContext);

  if (!context) {
    return null;
  }

  const { savedLater, setSavedLater } = context;

  const handleSaveForLater = () => {
    // Prevent duplicate exercises
    if (savedLater.some((item) => item.id === gym.id)) {
      toast.info(`${gym.name} is already saved for later!`);
      return;
    }

    setSavedLater((prevList) => [...prevList, gym]);

    toast.success(`${gym.name} saved for later!`);
  };

  return (
    <button
      type="button"
      onClick={handleSaveForLater}
      className="flex items-center gap-2 rounded-lg border border-[#303640] px-5 py-2.5 text-[12px] font-medium text-gray-300 transition hover:bg-[#171a20]"
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default SaveLater;

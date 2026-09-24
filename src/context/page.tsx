"use client";

import { gymTs } from "@/types/page";
import React, { createContext, useState } from "react";

export const gymContext = createContext<{
  myPlan: gymTs[];
  setMyPlan: React.Dispatch<React.SetStateAction<gymTs[]>>;
  savedLater: gymTs[];
  setSavedLater: React.Dispatch<React.SetStateAction<gymTs[]>>;
} | null>(null);

const ContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [myPlan, setMyPlan] = useState<gymTs[]>([]);
  const [savedLater, setSavedLater] = useState<gymTs[]>([]);

  const allState = {
    myPlan,
    setMyPlan,
    savedLater,
    setSavedLater,
  };

  return (
    <gymContext.Provider value={allState}>{children}</gymContext.Provider>
  );
};

export default ContextProvider;

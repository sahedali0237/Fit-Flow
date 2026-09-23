"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CenterButton = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
          pathname === "/"
            ? "bg-[#ccff00] text-black"
            : "text-[#85858c] hover:text-white"
        }`}
      >
        Workouts
      </Link>

      <Link
        href="/myPlan"
        className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
          pathname === "/myPlan"
            ? "bg-[#ccff00] text-black"
            : "text-[#85858c] hover:text-white"
        }`}
      >
        My Plan
      </Link>
    </>
  );
};

export default CenterButton;

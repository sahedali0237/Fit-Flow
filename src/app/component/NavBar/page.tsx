"use client";

import Image from "next/image";
import Link from "next/link";
import CenterButton from "./centerButton";
import { useContext } from "react";
import { gymContext } from "@/context/page";

const Navbar = () => {
  const context = useContext(gymContext);
  const planCount = context?.myPlan?.length || 0;
  const savedCount = context?.savedLater?.length || 0;

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-white/5 bg-[#0b0c0f]">
      <nav className="relative mx-auto flex h-full max-w-360 items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/favicon.png"
            width={10}
            height={10}
            alt="FitFlow"
            className="h-6 w-6 object-contain"
          />

          <span className="text-[15px] font-extrabold tracking-wide text-white">
            Fit Flow
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 text-[15px] md:flex">
          <CenterButton />
        </div>

        <div className="flex items-center gap-5 text-[15px]">
          <Link
            href="/myPlan"
            className="flex items-center gap-2 text-[#b5b5bb] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[15px] font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/myPlan"
            className="flex items-center gap-2 text-[#b5b5bb] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#4a4b50] text-[15px] text-[#b5b5bb]">
              {savedCount}
            </span>
          </Link>
        </div>

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-1 mt-3 w-52 rounded-box border border-[#252a33] bg-[#13161c] p-2 text-white shadow"
          >
            <li>
              <Link href="/">Workouts</Link>
            </li>
            <li>
              <Link href="/myPlan">My Plan</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

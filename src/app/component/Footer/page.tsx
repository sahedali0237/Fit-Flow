import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0b0c0f]">
      <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/favicon.png"
            width={24}
            height={24}
            alt="FitFlow"
            className="h-6 w-6 object-contain"
          />

          <span className="text-[15px] font-extrabold tracking-wide text-white">
            Fit Flow
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-right text-xs text-[#85858c]">
          © 2026 Fit Flow — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

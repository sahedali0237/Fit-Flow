import Image from "next/image";
import Link from "next/link";
import RightButton from "./rightButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-white/5 bg-[#0b0c0f]">
      <nav className="mx-auto flex h-full max-w-360 items-center justify-between px-6 lg:px-10">
        {/* Logo */}
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

        {/* Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center text-[15px] gap-1 md:flex">
          <RightButton></RightButton>
        </div>

        {/* Plan & Saved */}
        <div className="flex items-center gap-5 text-[15px]">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#b5b5bb] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#b5b5bb] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#4a4b50] text-[9px] text-[#b5b5bb]">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

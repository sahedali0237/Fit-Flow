import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="bg-[#18191c] rounded-4xl p-10 md:p-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start space-y-6">
          <p className="text-[#d1ff00] font-bold tracking-widest text-xs md:text-sm uppercase">
            Workout Library
          </p>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="bg-[#d1ff00] hover:bg-[#b8e600] text-black font-bold text-sm uppercase py-4 px-8 rounded-md transition-colors duration-200 mt-2">
            Browse Workouts
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <Image
            src="/assets/banner.png"
            width={600}
            height={600}
            alt="Anatomical workout figure on preacher curl machine"
            className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

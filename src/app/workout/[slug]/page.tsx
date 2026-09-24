import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gymTs } from "@/types/page";
import TodayPlan from "../buttons/todayPlan";
import SaveLater from "../buttons/saveLater";

interface ParamsType {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: ParamsType) => {
  const { slug } = await params;

  let gym: gymTs | undefined;

  try {
    const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (!rsc.ok) {
      throw new Error(`Failed to fetch: ${rsc.status}`);
    }

    const data: gymTs[] = await rsc.json();

    gym = data.find((item) => item.id.toString() === slug);
  } catch (error) {
    console.error("Failed to load exercise:", error);
  }

  if (!gym) {
    return (
      <main className="min-h-screen bg-[#0d0f12] px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-[#101216] p-10 text-center">
          <h1 className="text-xl font-bold">Exercise not found</h1>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-[#c8ff00] px-5 py-2.5 text-sm font-bold text-black"
          >
            Back to exercises
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-300 bg-[#0d0f12] p-3">
        <div className="grid gap-10 p-0 sm:p-0 lg:grid-cols-[435px_1fr] lg:gap-10">
          <div className="relative h-130 w-full overflow-hidden rounded-xl lg:h-136.25">
            <Image
              src={gym.image}
              alt={gym.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col py-0 pr-5 lg:py-1">
            <div>
              <h1 className="text-[27px] font-extrabold uppercase leading-none tracking-tight sm:text-[30px]">
                {gym.name}
              </h1>

              <p className="mt-3 max-w-162.5 text-[13px] leading-5 text-gray-400">
                {gym.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {gym.muscleGroups?.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#252a33] bg-[#15181e]">
              <InfoRow label="EQUIPMENT" value={gym.equipment} />
              <InfoRow label="DIFFICULTY" value={gym.difficulty} />
              <InfoRow label="SETS" value={gym.sets} />
              <InfoRow label="REPS" value={gym.reps} />
              <InfoRow label="DURATION" value={gym.duration} />
              <InfoRow label="CALORIES" value={gym.caloriesBurned} />
              <InfoRow label="RATING" value={gym.rating} last />
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-[13px] font-extrabold tracking-wide">
                INSTRUCTIONS
              </h2>

              <ol className="mt-3 space-y-3">
                {gym.instructions?.map((instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[12px] leading-5 text-gray-400"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 pb-1">
              <TodayPlan gym={gym} />
              <SaveLater gym={gym} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  last?: boolean;
}

const InfoRow = ({ label, value, last }: InfoRowProps) => {
  return (
    <div
      className={`flex min-h-9 items-center justify-between px-4 py-2.5 ${
        !last ? "border-b border-[#252a33]" : ""
      }`}
    >
      <span className="text-[9px] font-bold tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-[11px] text-gray-200">{value}</span>
    </div>
  );
};

export default page;

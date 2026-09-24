import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gymTs } from "@/types/page";

interface ParamsType {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: ParamsType) => {
  const { slug } = await params;

  let book: gymTs | undefined;

  try {
    const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (!rsc.ok) {
      throw new Error(`Failed to fetch: ${rsc.status}`);
    }

    const data: gymTs[] = await rsc.json();

    book = data.find((item) => item.id.toString() === slug);
  } catch (error) {
    console.error("Failed to load exercise:", error);
  }

  if (!book) {
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
          {/* Image */}
          <div className="relative h-130 w-full overflow-hidden rounded-xl lg:h-136.25">
            <Image
              src={book.image}
              alt={book.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col py-0 pr-5 lg:py-1">
            {/* Title */}
            <div>
              <h1 className="text-[27px] font-extrabold uppercase leading-none tracking-tight sm:text-[30px]">
                {book.name}
              </h1>

              <p className="mt-3 max-w-162.5 text-[13px] leading-5 text-gray-400">
                {book.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.muscleGroups?.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#252a33] bg-[#15181e]">
              <InfoRow label="EQUIPMENT" value={book.equipment} />
              <InfoRow label="DIFFICULTY" value={book.difficulty} />
              <InfoRow label="SETS" value={book.sets} />
              <InfoRow label="REPS" value={book.reps} />
              <InfoRow label="DURATION" value={book.duration} />
              <InfoRow label="CALORIES" value={book.caloriesBurned} />
              <InfoRow label="RATING" value={book.rating} last />
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-[13px] font-extrabold tracking-wide">
                INSTRUCTIONS
              </h2>

              <ol className="mt-3 space-y-3">
                {book.instructions?.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[12px] leading-5 text-gray-400"
                    >
                      <span className="text-gray-500">{index + 1}.</span>

                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 pb-1">
              <button className="flex items-center gap-2 rounded-lg bg-[#c8ff00] px-5 py-2.5 text-[12px] font-bold text-black transition hover:bg-[#b5eb00]">
                <span>▣</span>
                Add to today&apos;s plan
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-[#303640] px-5 py-2.5 text-[12px] font-medium text-gray-300 transition hover:bg-[#171a20]">
                <span>♡</span>
                Save for later
              </button>
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

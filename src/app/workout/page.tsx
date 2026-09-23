import { gymTs } from "@/types/page";
import WorkoutCard from "./workoutCard";

const getData = async (): Promise<gymTs[]> => {
  const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  const data: gymTs[] = await rsc.json();

  return data;
};

const Page = async () => {
  const gymData = await getData();

  return (
    <main className="min-h-screen bg-[#0a0b0d] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            The Library
          </h1>
          <p className="text-[#8b8d93] text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

import { gymTs } from "@/types/page";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa";

const WorkoutCard = ({ workout }: { workout: gymTs }) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div
        className="bg-[#18191c] rounded-xl overflow-hidden border border-[#2a2c32] shadow-lg hover:border-[#40434b] 
    transition-colors duration-300"
      >
        <div className="relative w-full h-56 bg-gray-800">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="bg-[#d1ff00] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          <h2 className="text-white text-lg font-black uppercase tracking-wide mb-1">
            {workout.name}
          </h2>
          <p className="text-[#8b8d93] text-sm mb-6 font-medium">
            {workout.equipment}
          </p>

          <div className="flex items-center gap-6 text-[#8b8d93] text-sm font-medium">
            <div className="flex items-center">
              <FaRegClock className="w-4 h-4 mr-1.5" />
              {workout.duration} min
            </div>
            <div className="flex items-center">
              <FaFire className="w-4 h-4 mr-1.5" />
              {workout.caloriesBurned} kcal
            </div>
            <div className="flex items-center">
              <FaStar className="w-4 h-4 mr-1.5" />
              {workout.rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;

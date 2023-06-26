'use client';

import FeaturedMoviesB from "@/components/movieComponents/FeaturedMovies";
import PopularMovies from "@/components/movieComponents/popularMovies";

export default function DashboardHome() {
  return (
    <>
      <div className= " bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-24">
        <FeaturedMoviesB/>
        <PopularMovies/>
      </div>
    </>
  );
}

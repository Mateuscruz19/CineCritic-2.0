'use client';

import Banner from "@/components/dashboard/Banner";
import Trendings from "@/components/dashboard/Trendings";
import Top from "@/components/utils/Top";
import FeaturedMoviesB from "@/components/utils/FeaturedMovies";
import PopularMovies from "@/components/utils/popularMovies";

export default function DashboardHome() {
  return (
    <>
      <div className= " bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-24">
        <FeaturedMoviesB/>
        <PopularMovies/>
        {/* <div className="flex flex-col items-start w-full mt-[2rem] bg-opacity-40 bg-white rounded-lg h-[100rem]">
        
        </div> */}
        {/* <div className="flex justify-between w-full mt-[2rem] h-full">
          <Trendings/>
          <Top/>
        </div> */}
      </div>
    </>
  );
}

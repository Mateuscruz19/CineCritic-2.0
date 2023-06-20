import Banner from "@/components/dashboard/Banner";
import Trendings from "@/components/dashboard/Trendings";
import Top from "@/components/utils/Top";

export default function DashboardHome() {
  return (
    <>
      <div className= "flex flex-col w-full h-screen  rounded-lg bg-gray-800 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-24">
        <Banner/>
        <div className="flex justify-between w-full mt-[2rem] h-full">
          <Trendings/>
          <Top/>
        </div>
      </div>
    </>
  );
}

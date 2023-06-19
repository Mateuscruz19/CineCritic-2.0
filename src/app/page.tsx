"use client";

//React
import "animate.css";
import { useState } from "react";

//Components
import { BiChevronsDown } from "react-icons/bi";
import FooterInicial from "@/components/ui/Footer";
import Title from "@/components/home/Title";
import Nav from "@/components/home/Nav";
import Cascate from "@/components/home/Cascate";

export default function Home() {
  const [state, setState] = useState(true);

  setInterval(() => {
    if (state === true) {
      setState(false);
    } else if (state === false) {
      setState(true);
    }
  }, 4000);

  return (
    <>
      <div className="h-screen">
        <div className="relative h-full bg-[url('/images/morales.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full h-full lg:bg-opacity-60">
         <Nav/>
            <div className="flex justify-around">
              <Title/>
              </div>
            <div className="px-8 py-8 object-bottom flex justify-center flex-col items-center mt-24 ">
              <div  className={`box ${
              state
                ? "animate__animated animate__bounce animate__slower flex justify-center flex-col items-center"
                : "animate__animated animate__bounceIn animate__slower flex justify-center flex-col items-center"
            }`}>
              <p className="text-white animate__animated animate__slower animate__fadeInDown">
                Role pra baixo!
              </p>
              <BiChevronsDown
                size={62}
                className="animate__animated animate__fadeInDown animate__slower text-white"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full flex flex-col items-center">
          <h1 className="text-5xl text-white mt-10 animate__animated animate__fadeInDown
          animate__slower font-semibold capitalize">Os maiores sucessos <span className="text-[#FF5757]">cinematográficos!</span></h1>
          <Cascate/>
            <FooterInicial/>
        </div>
      </div>
      
    </>
  );
}

"use client";

//React
import "animate.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

//Components
import Footer from "@/components/footers/Footer";
import Nav from "@/components/navbars/IndexNavegationbar";
import Title from "@/components/titleComponents/AuthTitle";
import Form from "@/components/forms/Form";

//Hooks
import { toast } from 'react-toastify';

const Auth = () => {

  const [variant, setVariant] = useState("login");
  const [clicked, setClicked] = useState(false);


  return (
    <>
      <div className="xl:h-screen max-xl:min-h-screen">
      <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/spiderverveback.jpg')]">
      <div className="bg-black w-full h-full bg-opacity-40 flex flex-col justify-between">
      <Nav variant={variant}/>
      <div className="flex justify-around">
              <Title variant={variant} />
              <Form
                variant={variant}
                setVariant={setVariant}
                clicked={clicked}
                setClicked={setClicked}
              />
            </div>
      <Footer />
      </div>
      </div>
      </div>
    </>
  );
};

export default Auth;

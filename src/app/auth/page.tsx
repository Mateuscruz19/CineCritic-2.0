"use client";

//React
import "animate.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

//Components
import Footer from "@/components/ui/Footer";
import Nav from "@/components/auth/Nav";
import Title from "@/components/auth/Title";
import Form from "@/components/auth/Form";

//Hooks
import { toast } from 'react-toastify';

const Auth = () => {

  const [variant, setVariant] = useState("login");
  const [clicked, setClicked] = useState(false);

  // const router = useRouter();
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session && session.user) {
  //     toast('Você já esta logado!');
  //     redirect("/dashboard/home");
  //   }
  // }, [router, session]);

  return (
    <>
      <div className="xl:h-screen max-xl:min-h-screen">
      <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/spiderverveback.jpg')]">
      <div className="bg-black w-full h-full bg-opacity-40 flex flex-col justify-between">
      <Nav variant={variant} />
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

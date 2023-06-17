"use client";

//React
import "animate.css";
import { useState,useCallback,useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

//Components
import Footer from "@/components/ui/FooterInitial";
import Nav from "@/components/auth/Nav";
import Title from "@/components/auth/Title";
import Form from "@/components/auth/Form";
import { toast } from 'react-toastify';
import { setCookie } from 'cookies-next';

const Auth = () => {

  const router = useRouter()
  const [variant, setVariant] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  const login = useCallback(async () => {

  }, []);

  const register = useCallback(async () => {
  }, []);

  function Tes() {
  }

  return (
    <>
      <div className="h-screen">
        <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/spiderverveback.jpg')]">
          <div className="bg-black w-full h-full lg:bg-opacity-60">
            <Nav variant={variant} />
            <div className="flex justify-around">
              <Title variant={variant} />
              <Form
                variant={variant}
                setVariant={setVariant}
                clicked={clicked}
                setClicked={setClicked}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                login={login}
                register={register}
                Tes={Tes}
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

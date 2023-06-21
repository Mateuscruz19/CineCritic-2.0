"use client";

//React
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

//Components
import Input from "@/components/auth/Input";
import Button from "@/components/auth/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

//Hooks
import { toast } from 'react-toastify';

export default function Form(props: any) {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    props.setVariant((currentVariant: string) =>
      currentVariant === "login" ? "register" : "login"
    );
    props.setClicked(props.clicked ? false : true);
  }, [props]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push('/dashboard/home')
    } catch (error) {
      toast('Erro, verique os campos inseridos!');
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      toast('Registrado com sucesso!');
      login();
    } catch (error) {
      toast('Erro, verique os campos inseridos!');
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div
      className={`o-3 animate__animated bg-black bg-opacity-70 px-16 py-16
    self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full 
    ${props.variant === "login" ? "animate__fadeInDown" : "animate__fadeInUp"}`}
    >
      <h2 className="text-white text-4xl mb-8 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {props.variant === "login" ? "Login" : "Registro"}
      </h2>

      <div className="flex flex-col gap-4">
        {props.variant === "register" && (
          <Input
            id="username"
            type="text"
            label="Username"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <Button variant={props.variant} login={login} register={register} />
      <div className="flex flex-row items-center gap-4 mt-8 justify-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FcGoogle size={32} />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FaGithub size={32} />
        </div>
      </div>
      <p className="text-neutral-500 mt-12">
        {props.variant === "login"
          ? "Primeira vez ao site?"
          : "Já tem uma conta?"}
        <span
          onClick={toggleVariant}
          className="text-[#C20808] ml-1 hover:underline cursor-pointer"
        >
          {props.variant === "login" ? "Crie uma conta!" : "Logue!"}
        </span>
      </p>
    </div>
  );
}

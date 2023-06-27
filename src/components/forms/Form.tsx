"use client";

//React
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

//Components
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/LoginButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

//Hooks
import { toast } from "react-hot-toast";

export default function Form(props: any) {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    props.setVariant((currentVariant: string) =>
      currentVariant === "login" ? "register" : "login"
    );
    props.setClicked(props.clicked ? false : true);
  }, [props]);

  const login = useCallback(async () => {
    setIsLoading(true);
    
    signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      })
      .then((callback) => {
        setIsLoading(false);
         
        if (callback?.ok) {
          toast.success('Logado!');
          router.push('/dashboard/home')
        }
        if (callback?.error) {
          toast.error(callback.error);
        }
      })
  }, [email, password, router]);

  const register = useCallback(async () => {
    setIsLoading(true);

      axios.post("/api/register", {
        email,
        name,
        password,
      })
      .then(() => {
        toast.success("Conta criada com sucesso!");
        login();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
      setIsLoading(false);
    })
    
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
          disabled={isLoading}
            id="username"
            type="text"
            label="Username"
            value={name}
            
            onChange={(e: any) => setName(e.target.value)}
          />
        )}
        <Input
        disabled={isLoading}
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
        disabled={isLoading}
          type="password"
          id="password"
          label="Senha"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <Button variant={props.variant} login={login} register={register} disabled={isLoading}/>
      <div className="flex flex-row items-center gap-4 mt-8 justify-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FcGoogle size={32}  onClick={() => signIn('google')}/>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FaGithub size={32} onClick={() => signIn('github')}/>
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

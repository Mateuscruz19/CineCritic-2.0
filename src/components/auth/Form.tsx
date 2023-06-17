import Input from "@/components/auth/Input";
import Button from "@/components/auth/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useCallback } from "react";

export default function Form(props: any) {

  const toggleVariant = useCallback(() => {
    props.setVariant((currentVariant: string) =>
      currentVariant === "login" ? "register" : "login"
    );
    props.setClicked(props.clicked ? false : true);
  }, [props]);

  return (
    <div
      className={`animate__animated bg-black bg-opacity-70 px-16 py-16
    self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full
    ${props.variant === "login" ? "animate__fadeInDown" : "animate__fadeInUp"}`}
    >
      <h2 className="text-white text-4xl mb-8 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {props.variant === "login" ? "Login" : "Registro"}
      </h2>

      <div className="flex flex-col gap-4">
        {props.variant === "register" && (
          <Input
            id="name"
            type="text"
            label="Username"
            value={props.name}
            onChange={(e: any) => props.setName(e.target.value)}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          value={props.email}
          onChange={(e: any) => props.setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          value={props.password}
          onChange={(e: any) => props.setPassword(e.target.value)}
        />
        {props.variant === "register" && (
        <Input
          type="password"
          id="password"
          label="Confirme a senha"
          value={props.confirmPassword}
          onChange={(e: any) => props.setConfirmPassword(e.target.value)}
        />
        )}
      </div>
      <Button variant={props.variant} login={props.login} register={props.register} Tes={props.Tes}/>
      <div className="flex flex-row items-center gap-4 mt-8 justify-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FcGoogle size={32} />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <FaGithub size={32} />
        </div>
      </div>
      <p className="text-neutral-500 mt-12">
        {props.variant === "login" ? "Primeira vez ao site?" : "Já tem uma conta?"}
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

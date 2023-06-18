"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Button(props: any) {

  return (
     <button  onClick={props.variant === 'login' ? props.login : props.register}
      className="bg-[#FF5757] py-3 text-white rounded-md w-full mt-10 hover:bg-[#C20808] transition"
    >
      {props.variant === "login" ? "Login" : "Registrar"}
    </button>
  );
}

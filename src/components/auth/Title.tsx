export default function Title(props: any) {
  return (
    <div className="px-16 py-16 mt-10">
      <h1
        className={`animate__animated text-white  text-8xl font-bold mb-5 tracking-tight capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${
            props.variant === "login"
            ? "animate__fadeInDown animate__slower"
            : "animate__fadeInUp animate__slower"
        }`}
      >
        {props.variant === "login" ? "Entre já e mostre" : "Registre-se agora"}
      </h1>
      <h1
        className={` animate__animated
         text-white
          text-8xl
           font-bold
            mb-5
             tracking-tight
              capitalize
               drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
               ${
                props.variant === "login"
                   ? "animate__fadeInDown animate__slower"
                   : "animate__fadeInUp animate__slower"
               } `}
      >
        {props.variant === "login" ? "as suas novidades!" : "e de sua opinião!"}
      </h1>
      <h1
        className={`animate__animated
       
         text-2xl
          mt-8
           font-semibold
            drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            ${
                props.variant === "login"
                ? "animate__fadeInDown animate__slower"
                : "animate__fadeInUp animate__slower"
            } `}
      >
        {" "}
        <span className="text-orange-400 ">
          {" "}
          Acompanhe os filmes que você assistiu.{" "}
        </span>
        <br />
        <span
          className="animate__animated
         animate__fadeInDown
          text-green-600"
        >
          {" "}
          Salve aqueles que você deseja ver.{" "}
        </span>{" "}
        <br />
        <span
          className="animate__animated
         animate__fadeInDown
          text-blue-400"
        >
          {" "}
          Diga a seus amigos o que é bom.{" "}
        </span>{" "}
      </h1>
    </div>
  );
}

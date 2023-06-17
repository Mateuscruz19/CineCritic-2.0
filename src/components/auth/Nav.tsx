import Link from "next/link";
import Image from "next/image";

export default function Nav(props: any) {
  return (
    <nav className="px-12 py-5" >
        <Link href={"/"}>
      <Image
        src="/images/logos/logo2.png"
        width={240}
        height={130}
        
        alt="Logo"
        className={`animate__animated animate__fadeInDown animate__slower
      ${
        props.variant === "login"
          ? "animate__fadeInDown animate__slower"
          : "animate__fadeInUp animate__slower"
      } `}
      />
      </Link>
    </nav>
  );
}

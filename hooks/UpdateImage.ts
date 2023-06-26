import { useSession } from "next-auth/react";

 


export default async function UpdateImage(newImage: string) {

    const { data: session } = useSession();
    const user = session?.user;

        const res = await fetch("http://localhost:3000/api/updateimage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user?.email,
                newImage: newImage,
            }),
          });
  
          const Response = await res.json();

        if (Response) {
          console.log(Response)
          return Response;
        } else {
          return null
        }
      }
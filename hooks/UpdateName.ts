 
interface User {
    accessToken: string;
    createdAt: string;
    email: string;
    exp: number;
    iat: number;
    icon: string;
    id: number;
    jti: string;
    name: string;
    sub: string;
  };

export default async function updateName(user: User,newName: string) {

        const res = await fetch("http://localhost:3000/api/updateName", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                newName: newName,
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
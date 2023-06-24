import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: body.username,
  //   },
  // });

  return new Response(JSON.stringify(accessToken));
}
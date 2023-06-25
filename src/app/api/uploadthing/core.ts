import { createUploadthing, type FileRouter } from "uploadthing/next";
import prisma from "@/lib/prisma";
import updateImage from "hooks/UpdateImage";

const f = createUploadthing();

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

const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new Error("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      updateImage(file.url)
      

      
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
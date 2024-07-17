import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "./db";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";



export const {handlers,auth,signIn,signOut}=NextAuth({
    trustHost:true,
    adapter:PrismaAdapter(db),
    providers:[
        GitHub({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,
        }),
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    // secret:process.env.NEXTAUTH_SECRET as string,
    callbacks:{
        async session({session,user}) {
            // console.log(session);
            // console.log(user);
            return session;
        }
    }
})
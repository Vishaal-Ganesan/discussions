'use server'
import { signIn } from "@/auth";

export async function sign_in(authType:string) {
    console.log("Sign in called");
    
    await signIn(authType);
}

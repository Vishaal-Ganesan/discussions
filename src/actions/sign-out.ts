'use server'
import {  signOut } from "@/auth";


export async function sign_out(){
    await signOut();
}
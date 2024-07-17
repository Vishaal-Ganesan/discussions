'use client'
import { auth } from '@/auth';
import { useSession } from 'next-auth/react'
import React from 'react'

const Profile =() => {
    const session =useSession();
    console.log("client side useSession hook: ",session);
   if(session.data?.user){
    return <h4>signed in client side</h4>
   }
   return <h4>client side signed out</h4>
}

export default Profile
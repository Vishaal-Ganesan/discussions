'use client'
import { sign_in } from '@/actions/sign-in';
import { Button, Icon } from '@mui/material';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import UserProfileImage from './UserProfileImage';
import LoginIcon from '@mui/icons-material/Login';
import AuthDialog from './AuthDialog';

const ClientAuth = () => {
 const session = useSession();
//  console.log("session data:",session?.data?.user);
 
 const [authDialog,setAuthDialog] = useState<boolean>(false);
 let authContext:React.ReactNode;
 const closeDialog = ()=>{
    setAuthDialog(false);
 }
 if(session.status ==='loading'){
    authContext = <div></div>;
 }
    else if (session?.data?.user) {
        authContext =(
            <div className='flex items-center justify-between'>
                {session.data?.user?.name}
            <UserProfileImage sessionObj = {session}/>
            </div>
        )
    }else{     
        authContext=(
        <div>       
         <Button variant='contained' onClick={()=>setAuthDialog(true)} className='rounded-full bg-red-500 hover:bg-red-800'>Sign in</Button>
         <AuthDialog open={authDialog} close={closeDialog}/>
         </div>)        
    }

    return authContext;

}

export default ClientAuth
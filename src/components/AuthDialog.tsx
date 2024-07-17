import { sign_in } from '@/actions/sign-in';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';

type authDialogProps ={
    open:boolean,
    close:()=>void,
}
const buttonStyles='rounded-full border border-slate-3 bg-slate-900 ml-12 w-4/5 p-3';
const AuthDialog = (props:authDialogProps) => {
    const{open,close} = props;
    if(open){
  return (
    <div>
        <Dialog open={open} onClose={close} fullWidth maxWidth='sm' >
        <DialogTitle className='font-bold text-xl'>Log in</DialogTitle>
        <DialogContent className='text-sm'>
        By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
        </DialogContent>
        <div className='flex flex-col  gap-4 p-10'>
        <form action={()=>sign_in('google')}>
        <Button className={buttonStyles} variant='contained' type='submit' startIcon={<GoogleIcon/>}>
          Login with Google
          
          </Button>

        </form>
        <form action={()=>sign_in('apple')}>
        <Button className={buttonStyles} variant='contained' type='submit' 
        startIcon={<AppleIcon/>}>Login with Apple</Button>
        </form>
      <form action={()=>sign_in('github')}>
        <Button className={buttonStyles} variant='contained' type='submit' startIcon={<GitHubIcon/>}>Login with Github</Button>
      </form>
        </div>
        </Dialog>
    </div>
  )
}
}

export default AuthDialog
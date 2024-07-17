import { sign_in } from '@/actions/sign-in'
import { sign_out } from '@/actions/sign-out'
import { auth } from '@/auth'
import { AppBar, Avatar, Button, TextField, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import UserProfileImage from './UserProfileImage'
import ClientAuth from './ClientAuth'
import AuthDialog from './AuthDialog'

const AppHeader = async() => {
    // const session = await auth();
  return (
        <AppBar component='nav' color='default'>
            <Toolbar className='flex items-center justify-between'>
                <Typography className='font-bold text-2xl'>Discussions</Typography>
                <TextField className='hidden sm:flex ' placeholder='Search bar to implement'/>
                <ClientAuth/>
            </Toolbar>
        </AppBar>

  )
}

export default AppHeader
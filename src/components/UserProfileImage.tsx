'use client'
import { Avatar, Button, Icon, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { Session, User } from 'next-auth'
import React, { useState } from 'react'
import { sign_out } from '@/actions/sign-out';
import { SessionProviderProps, UpdateSession } from 'next-auth/react';

type sessionProps= {
  update: UpdateSession;
  data: Session;
  status: string;
}
const UserProfileImage = ({sessionObj}:{sessionObj:sessionProps|any}) => {
    console.log(sessionObj,"sessionOBJ");
    
    const [anchorEl,setAnchorEl] = useState<null|HTMLElement>(null)
  return (
    <div>
    <IconButton onClick={(ev)=>{setAnchorEl(ev.currentTarget)}}>
    <Avatar src={sessionObj.data?.user?.image||''}/>
    </IconButton>
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} anchorOrigin={{
        horizontal:'right',
        vertical:'bottom'
    }}
    onClose={()=>setAnchorEl(null)} style={{borderRadius:'5px'}}>
         <form action={sign_out}>
        {/* <MenuItem className='flex items-center justify-between flex-column'> */}
                <Button color='inherit' type='submit' startIcon={<LogoutIcon/>}>Sign out</Button>    
        {/* </MenuItem> */}
        
        </form>
        
    </Menu>
    </div>
  )
}

export default UserProfileImage
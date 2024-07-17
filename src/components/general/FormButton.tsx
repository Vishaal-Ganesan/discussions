'use client'
import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormButton = ({buttonName}:{buttonName:string}) => {
  const {pending} = useFormStatus();
  return (
    <Button  variant='contained' color='primary' type='submit'>{pending && <CircularProgress/>}{buttonName}</Button>                 
  )
}

export default FormButton
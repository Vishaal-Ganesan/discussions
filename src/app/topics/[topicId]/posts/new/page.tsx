'use client'
import { createPost } from '@/actions/create-post'
import FormButton from '@/components/general/FormButton'
import { FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormState } from 'react-dom'

type topicShowProps ={
  params:{
    topicId:string
  }
}
const NewPost = ({params}:topicShowProps) => {
  const [initialState, createPostAction] = useFormState(createPost.bind(null,params.topicId),{errors:{}})
  return (
    <div className='flex flex-col'>
      <Typography variant='h5'>New Post for {params.topicId}</Typography>
      <div className='w-3/4 p-20  ml-20 mt-20'> 
      <form action={createPostAction}>
                        <Stack gap={1}>
                            <FormLabel className='font-bold' htmlFor='title'>Title</FormLabel>
                            <FormHelperText>Be specific about your title or question.Minimum 10 characters</FormHelperText>
                        <TextField id='title' name='title' placeholder='Enter title' error={initialState.errors.title?true:false} helperText={initialState.errors.title}/>
                        <FormLabel className='font-bold' htmlFor='description'>Description</FormLabel>
                        <FormHelperText>Add detailed description if necessary.Minimum 20 characters</FormHelperText>
                            <TextField multiline rows='5' name="description" id="description" error={initialState.errors.description?true:false} helperText={initialState.errors.description}/>
                            <FormHelperText className='text-lg font-bold'></FormHelperText>
                            <FormHelperText className='text-lg font-bold' error={initialState.errors.formError?true:false}>{initialState.errors.formError}</FormHelperText>
                           
                            <div>
                            <FormButton buttonName='Submit'/>
                            </div>
                        </Stack>
                    </form>
    </div>
    </div>
  )
}

export default NewPost
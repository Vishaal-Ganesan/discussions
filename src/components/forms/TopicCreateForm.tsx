'use client'
import { createTopic } from '@/actions/create-topic';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormHelperText, FormLabel,  Modal, Popover, Stack, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useFormState } from 'react-dom';
import FormButton from '../general/FormButton';

const TopicCreateForm = () => {
    const [openModal,setOpenModal] = useState<boolean>(false);
    const [state,createTopicAction] = useFormState(createTopic,{errors:{}})
    console.log(state);
    
    
  return (
    <div>
        <Button variant='contained' className='bg-red-500' onClick={(ev)=>setOpenModal(true)}>Create Topic</Button>
        <Dialog open={openModal} onClose={()=>setOpenModal(false)} fullWidth maxWidth='sm'>
                <DialogTitle>
                    Create Topic
                </DialogTitle>
                <DialogContent>
                    <form action={createTopicAction}>
                        <Stack gap={1}>
                            <FormLabel>Topic</FormLabel>
                        <TextField id='topic' name='topic' placeholder='Enter topic' error={state.errors.name?true:false} helperText={state.errors.name} />
                        <FormLabel>Description</FormLabel>
                            <TextField multiline name="description" id="description" error={state.errors.description?true:false} helperText={state.errors.description}/>
                            <FormHelperText className='text-lg font-bold' error={state.errors.formError?true:false}>{state.errors.formError}</FormHelperText>
                            <FormButton buttonName='Save'/>
                           
                        </Stack>
                    </form>
                </DialogContent>
        </Dialog>
       
    </div>
  )
}

export default TopicCreateForm
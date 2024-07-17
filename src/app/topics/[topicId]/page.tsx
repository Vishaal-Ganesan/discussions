import ListPosts from '@/components/ListPosts'
import TopicList from '@/components/TopicList'
import TopicCreateForm from '@/components/forms/TopicCreateForm'
import { db } from '@/db'
import { fetchPostsForTopic } from '@/db/dbQuery'
import routePaths from '@/pathHelper'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
type topicShowProps ={
    params:{
      topicId:string
    }
}
const ShowTopic =async({params}:topicShowProps) => {
  
  return (
    <div 
    className="grid grid-cols-4 gird-rows-4 gap-8 mt-5"
    // style={{display:'grid', gridTemplateColumns:'3fr 1fr'}}
    >
     
        <div 
        className="col-span-3 gap-10"
        >
            <h1 className="text-xl m-2">{params.topicId}</h1>
        </div>
        <div className="p-5">
         <Link className='border bg-sky-600 text-white px-4 py-3 rounded-lg' href={routePaths.postCreate(params.topicId)}>Create Post</Link>
        </div>
        <div 
        className="row-span-4 col-span-3   h-screen 
         ">
         <ListPosts fetchData={()=>fetchPostsForTopic(params.topicId)}/>
        </div>
        <TopicList/>
    </div>
  )
}

export default ShowTopic;
import { db } from '@/db';
import routePaths from '@/pathHelper';
import { Card, Chip } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const TopicList = async() => {
  const topics = await db.topic.findMany();
  // console.log("Topics: ",topics);
  
  const displayTopics={
    
  }
  return (
    <div className='flex flex-col'>
        <h4 className='text-lg font-bold ml-5'>Popular Topics</h4>
        <div className='row-span-5 flex gap-3 p-4 flex-wrap'>
            {topics.map((topic)=>(
              <Link href={routePaths.topicShow(topic.slug)} key={topic.id}>
                <Chip color="default" label={topic.slug} className='sm'/>
                </Link>
            ))}
            </div>
        </div>
  )
}

export default TopicList
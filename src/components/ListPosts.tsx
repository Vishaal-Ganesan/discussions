import routePaths from '@/pathHelper';
import { listPostProps } from '@/types/type';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const ListPosts = async({fetchData}:{fetchData:()=>Promise<listPostProps[]>}) => {
    const data = await fetchData();
    
  return (
    <div>
        {data.map((post)=>(
            <Link href={`${routePaths.postShow(post.topic.slug,post.id)}`} key={post.id}>
                    <Card className='flex flex-col border border-slate-3 rounded p-2 ml-1 mb-2'>
                    <CardContent className='gap-4'>
                            <Typography variant='h5' className='mb-2 text-bold'>{post.title}</Typography>
                            <Typography variant='body2'>{`by ${post.user?.name}`}</Typography>
                    {/* </div> */}
                    </CardContent>
            </Card>
            </Link>
        ))}
    
    </div>
  )
}

export default ListPosts
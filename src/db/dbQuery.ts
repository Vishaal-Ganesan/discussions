import { listPostProps } from "@/types/type";
import { db } from "."




export const fetchPostsForTopic = async(slug:string):Promise<listPostProps[]>=>{
    const data =await db.post.findMany({
        where:{topic:{slug:slug}},
        include:{
          user:{select:{name:true}},
          topic:{select:{slug:true}}

        }}
)
console.log(data);

 return data;       
}


export const fetchPosts = async():Promise<listPostProps[]>=>{
    const data = await db.post.findMany({
        include:{
            topic:{select:{slug:true}},
            user:{select:{name:true}}
        }
    });
    
    return data;
    
}
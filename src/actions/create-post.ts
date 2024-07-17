'use server'

import { auth } from "@/auth";
import { db } from "@/db";
import routePaths from "@/pathHelper";
import { createPostSchema } from "@/zodSchema";
import { Post, Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type createPostProps={
    errors:{
        title?:string[],
        description?:string[],
        formError?:string[],
    }
}

export const createPost = async(topicName:string,prevState:createPostProps,formData:FormData):Promise<createPostProps>=>{
// revalidate("/topics/posts")
// revalidate("/")
const session = await auth();
if(!session || !session.user){
    return {
        errors:{
            formError:['Please sign in to create posts']
        }
    }
}
    const title = formData.get('title');
    const description = formData.get('description');
    console.log(title,description);
    const validationResult = createPostSchema.safeParse({title,description});
    console.log("result: ",validationResult);
    if(!validationResult.success){
        return {
            errors:validationResult.error?.flatten().fieldErrors
        }
    }
    console.log(topicName);
    
    const topic = await db.topic.findFirst({
        where:{slug:topicName}
    })
    if(!topic){
        return{
            errors:{
                formError:['Cannot find topic']
            }
        }
    }
    
    let post:Post
    try {
        post = await db.post.create({
            data:{
                title: validationResult.data.title,
                content: validationResult.data.description,
                userId: session.user.id as string,
                topicId: topic.id.trim(),

            }
        })
    } catch (error) {
        if(error instanceof Error){
            return{
                errors:{
                    formError:[error.message],
                }
            }
        }else{
            return{
                errors:{
                    formError:['Some error occured']
                }
            }
        }
    }
    // const storePost = await db.post.
    
    revalidatePath(routePaths.topicShow(topicName));
    // return {errors:{}}
    revalidatePath(routePaths.home())
    redirect(routePaths.topicShow(topicName));

}
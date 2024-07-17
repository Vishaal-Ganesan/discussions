'use server'

import { auth } from "@/auth";
import { db } from "@/db";
import routePaths from "@/pathHelper";
import { createTopicSchema } from "@/zodSchema";
import { Topic } from "@prisma/client";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type formState = {
    errors:{
        name?: string[],
        description?: string[],
        formError?: string[],
    }
}

export const createTopic = async(prevState:formState,formData:FormData):Promise<formState>=>{
    await new Promise(resolve=>setTimeout(resolve,4000));
    // revalidate ("/"); 
    const session = await auth();
    if(!session || !session?.user){
        console.log(true);
        
        return {
            errors:{
                formError : ['Sign in to create topics']
            }
        }
    }
    const result = createTopicSchema.safeParse({
        name :formData.get('topic'),
        description : formData.get('description'),
    });
    console.log("Result: ",result);
    if(!result.success){
        console.log(result.error.flatten().fieldErrors);
        return{
            errors:result.error.flatten().fieldErrors
        }
          
    }
    let topic : Topic;
    try {
       topic = await db.topic.create({
            data:{
                slug:result.data.name,
                description:result.data.description,
            }
        })
    } catch (error) {
        if (error instanceof Error) {
                return {
                    errors:{
                        formError:[error.message]
                    }
                }
        }
        else{
            return{
                errors:{
                    formError:['Some error occured']
                }
            }
        }
    };
    console.log("TOPIC: ",topic);
    
    revalidatePath("/");
    redirect(routePaths.topicShow(result.data.name));
    
}
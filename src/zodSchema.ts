import {z} from 'zod';
export const createTopicSchema = z.object({
    name:z.string().min(3,{message:'Topic must be atleast 3 characters.'}).regex(/[a-z-]/,{message:'Must be lowercase letters or dashes without space'}),
    description:z.string().min(10,{message:'Description must be atleast 10 characters'})
})



export const createPostSchema = z.object({
    title:z.string().min(10,{message:'Title must be atleast of 10 characters'}).regex(/[a-z-]/),
    description:z.string().min(10,{message:'Description must be atleast 10 characters'})
})
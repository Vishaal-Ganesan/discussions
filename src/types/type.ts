import { Post } from "@prisma/client";

export  type listPostProps = Post &{
    topic:{slug:string},
    user:{name:string|null},
}
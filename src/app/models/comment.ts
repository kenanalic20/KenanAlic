import { User } from "./user";

export interface Comment {
    id:number,
    body:string,
    user:User
}

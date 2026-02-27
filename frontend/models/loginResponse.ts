import {User} from "@/models/user";

export interface LoginResponse {
    message: string
    name?: string
    email?: string
    role?: string
    ok?: boolean
    user?: User
}
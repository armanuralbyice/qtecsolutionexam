import { LoginModel } from "@/models/login"
import {LoginResponse} from "@/models/loginResponse";
import {User} from "@/models/user";


export const loginUser = async (data: LoginModel): Promise<LoginResponse> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        })

        const result = await res.json()
        debugger
        if (res.ok) {
            return { ...result, ok: true }
        } else {
            return { message: result.message || "Login failed", ok: false }
        }
    } catch (error: unknown) {
        let message = "Network Error"
        if (error instanceof Error) message = error.message
        return { message, ok: false }
    }
}

export const getUser = async (): Promise<User | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            method: "GET",
            credentials: "include",
            cache: "no-store",
        })

        if (!res.ok) return null

        const data = await res.json()
        return data.user as User
    } catch {
        return null
    }
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value
    const path = request.nextUrl.pathname

    if (!token && path.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (token && path === "/login") {
        return NextResponse.redirect(new URL("/admin", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
}
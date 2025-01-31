/*
    app/middleware.js

    Purpose is to redirect unauthenticated users from the admin page to the admin login page on the server side before rendering any of the protected admin page
*/

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    console.log("Middleware triggered for:", req.url);
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//         // Allow access to the /admin/login route without checking authentication
//     if (req.url.includes("/admin/login")) {
//         return NextResponse.next();
//     }

//     if (!token) {
//         return NextResponse.redirect(new URL("/admin/login", req.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: "/admin/:path*"
}

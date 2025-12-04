import { NextRequest, NextResponse } from "next/server"

export default function proxy(request: NextRequest){
    // console.log("server value",process.env.NEXT_API_URL);
    console.log("MIDDLEWARE RUNNING!")
    if (new URL(request.url).pathname == "/") {
        return NextResponse.redirect(new URL("/home",request.url))
    }
}
export const config = {
  matcher: ['/:path*'],
}
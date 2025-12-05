import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest){
    // console.log("server value",process.env.NEXT_API_URL);
    console.log("MIDDLEWARE RUNNING!")
    if (new URL(request.url).pathname == "/") {
        if(process.env.NODE_ENV === "development"){
          return NextResponse.redirect(new URL("/web",request.url))
        }else{
          return NextResponse.redirect(new URL("/login",request.url))
        }
    }
}

export const config = {
  matcher: ['/:path*'],
}
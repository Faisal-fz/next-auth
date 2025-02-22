import { NextRequest, NextResponse } from "next/server";

export async function GET (){
    try {
        const response = NextResponse.json({
            message : "logout successfully",
            success : true
        }, {status: 201})
        response.cookies.set("token", " ",{httpOnly:true , expires: new Date(0)});
        return response;
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
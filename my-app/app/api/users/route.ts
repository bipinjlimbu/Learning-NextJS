import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("POST request received");
    const user = await req.json();
    return NextResponse.json(
        { message: "POST request received", user: user },
        { status: 200 }
    );
}
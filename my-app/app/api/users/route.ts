import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function POST(req: NextRequest) {
    const user = await req.json();

    await db.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [user.username, user.email, user.password]
    );

    return NextResponse.json(
        { message: "POST request received", user: user },
        { status: 200 }
    );
}
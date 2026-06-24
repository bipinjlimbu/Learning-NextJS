import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function POST(req: NextRequest) {
    try {
        const user = await req.json();
        await db.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [user.username, user.email, user.password]
        );

        return NextResponse.json(
            { message: "POST request received", user: user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error inserting user:", error);
        return NextResponse.json(
            { message: "Error inserting user", error: error },
            { status: 500 }
        );
    }
}
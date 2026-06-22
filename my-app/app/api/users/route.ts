import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const cookie_get = req.cookies.get("noice");

    const cookie = await cookies();

    cookie.set("noice", "user");
    return Response.json({ message: "Hello, World!" });
}

export async function POST(request: Request) {
    const { name } = await request.json();
    return Response.json({ message: `Hello, ${name}!` });
}

import { FakeStoreData } from "@/data/FakeStoreData";

export async function GET() {
    const data = await FakeStoreData;
    return Response.json(data);
}
import { FakeStoreData } from "@/data/FakeStoreData";

export async function GET(
    req: Request,
    ctx: RouteContext<"/api/products/[id]">
) {
    const { id } = await ctx.params;

    const foundProduct = FakeStoreData.find((product) => product.id === Number(id));

    if (!foundProduct) {
        return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(foundProduct);
}
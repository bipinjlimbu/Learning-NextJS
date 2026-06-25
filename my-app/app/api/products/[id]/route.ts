import { getProductByIdFromDB, updateProductInDB, deleteProductFromDB } from "@/services/productServices";

export async function GET(req: Request, ctx: RouteContext<"/api/products/[id]">) {
    const { id } = await ctx.params;

    try {
        const product = await getProductByIdFromDB(Number(id));
        return Response.json(product);
    } catch (error) {
        return Response.json({ message: "Product not found" }, { status: 404 });
    }
}

export async function PUT(req: Request, ctx: RouteContext<"/api/products/[id]">) {
    const { id } = await ctx.params;
    const updatedProduct = await req.json();

    try {
        await updateProductInDB(Number(id), updatedProduct);
        return Response.json({ message: "Product updated successfully" });
    } catch (error) {
        return Response.json({ message: "Error updating product" }, { status: 500 });
    }
}

export async function DELETE(req: Request, ctx: RouteContext<"/api/products/[id]">) {
    const { id } = await ctx.params;

    try {
        await deleteProductFromDB(Number(id));
        return Response.json({ message: "Product deleted successfully" });
    } catch (error) {
        return Response.json({ message: "Error deleting product" }, { status: 500 });
    }
}
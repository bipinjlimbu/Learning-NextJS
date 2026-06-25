import { getProductFromDB, createProductInDB } from "@/services/productServices"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const products = await getProductFromDB();

        return NextResponse.json({
            msg: "products fetched!!",
            products
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            msg: "error during fetching products from database",
            error
        }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const product = await req.json();

        await createProductInDB(product);

        return NextResponse.json({
            msg: "product created successfully",
            product
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            msg: "error in creating product",
            error
        }, { status: 500 })
    }
}
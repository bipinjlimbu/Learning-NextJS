import getFakeStoreData from "@/lib/getFakeStoreData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
    const products: TypeProducts[] | null = await getFakeStoreData("/products");
    if (!products) return notFound();

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Products
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
                    >
                        <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
                        <h2 className="text-lg font-semibold text-center">{product.title}</h2>
                        <p className="text-green-600 font-bold mt-2">${product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
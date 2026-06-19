import { notFound } from "next/navigation";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export default async function ProductDetail({ params }: PageProps<"/products/[id]">) {
    const { id } = await params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json() as Product | null;

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">
                <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <p className="text-gray-600 mt-4">{product.description}</p>

                <p className="text-green-600 text-2xl font-bold mt-6">
                    ${product.price}
                </p>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
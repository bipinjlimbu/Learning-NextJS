import { notFound } from "next/navigation";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const products = [
        {
            id: "1",
            name: "Nike Air Max",
            price: 120,
            description: "Comfortable running shoes for daily use",
        },
        {
            id: "2",
            name: "Apple Watch",
            price: 399,
            description: "Smart watch with fitness tracking",
        },
        {
            id: "3",
            name: "Sony Headphones",
            price: 199,
            description: "Noise cancelling premium sound",
        },
        {
            id: "4",
            name: "MacBook Pro",
            price: 1999,
            description: "High performance laptop",
        },
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold">{product.name}</h1>

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
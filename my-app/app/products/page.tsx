import Link from "next/link";

export default function ProductsPage() {
    const products = [
        {
            id: "1",
            name: "Nike Air Max",
            price: 120,
            description: "Comfortable running shoes",
        },
        {
            id: "2",
            name: "Apple Watch",
            price: 399,
            description: "Smart watch with health tracking",
        },
        {
            id: "3",
            name: "Sony Headphones",
            price: 199,
            description: "Noise cancelling headphones",
        },
        {
            id: "4",
            name: "MacBook Pro",
            price: 1999,
            description: "High performance laptop",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Products
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold">
                            {product.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {product.description}
                        </p>

                        <p className="text-green-600 font-bold mt-3">
                            ${product.price}
                        </p>

                        <Link
                            href={`/products/${product.id}`}
                            className="inline-block mt-4 text-blue-600 hover:underline"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
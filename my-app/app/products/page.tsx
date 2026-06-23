import getFakeStoreData from "@/lib/getFakeStoreData";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default async function ProductsPage() {
    const products: TypeProducts[] | null = await getFakeStoreData("/products");
    if (!products) return notFound();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
                    >
                        <img src={product.image} alt={product.title} width={128} height={128} className="w-32 h-32 object-contain mb-4" />
                        <CardTitle>{product.title}</CardTitle>
                        <CardDescription>${product.price}</CardDescription>
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
}
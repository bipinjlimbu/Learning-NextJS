import { db } from "@/db";

export async function getProductFromDB() {
    try {
        const [products] = await db.execute("select * from products");
        return products;
    } catch (error) {
        throw error;
    }

}

export async function createProductInDB(newProduct: NewTypeProducts) {
    try {
        await db.execute
            ("insert into products (title, price, description, category, image, rating_rate, rating_count) values (?,?,?,?,?,?,?)",
                [newProduct.title, newProduct.price, newProduct.description, newProduct.category, newProduct.image, newProduct.rating_rate, newProduct.rating_count]
            )
    } catch (error) {
        throw error;
    }
}
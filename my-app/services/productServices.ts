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

export async function getProductByIdFromDB(id: number) {
    try {
        const [product] = await db.execute("select * from products where id = ?", [id]);
        return product;
    } catch (error) {
        throw error;
    }
}

export async function updateProductInDB(id: number, updatedProduct: NewTypeProducts) {
    try {
        await db.execute
            ("update products set title = ?, price = ?, description = ?, category = ?, image = ?, rating_rate = ?, rating_count = ? where id = ?",
                [updatedProduct.title, updatedProduct.price, updatedProduct.description, updatedProduct.category, updatedProduct.image, updatedProduct.rating_rate, updatedProduct.rating_count, id]
            )
    } catch (error) {
        throw error;
    }
}

export async function deleteProductFromDB(id: number) {
    try {
        await db.execute("delete from products where id = ?", [id]);
    } catch (error) {
        throw error;
    }
}
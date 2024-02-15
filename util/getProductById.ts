import { shop } from "@/assets/data/shop";

export const getProductById = (id: number) => {
    const products = shop.products.flatMap((category) => category.items);
    return products.find((product) => product.id === id);
};

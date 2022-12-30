import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const savedCard = getStoredCart();
    const previousCart = [];

    for (const id in savedCard) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            addedProduct.quantity = savedCard[id];
            previousCart.push(addedProduct);
        }
    }
    return { products, previousCart };
}
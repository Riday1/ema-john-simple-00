
export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();



    return products;
}
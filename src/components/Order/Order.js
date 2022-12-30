import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>Total Products : {products.length}</h1>
        </div>
    );
};

export default Order;
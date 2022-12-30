import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleDelete = (id) => {

        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb(id);

    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();

    }
    return (
        <div className='shop-container'>
            <div className='reviewItem-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No product Found , <Link to='/'>plase shop</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
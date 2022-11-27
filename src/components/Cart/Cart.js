import React from 'react';

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = total * 0.1;
    tax = parseFloat(tax.toFixed(2));
    const grandTotal = total + shipping + tax;
    // console.log(cart)
    return (
        <div>
            <h2>Order summary</h2>
            <p>selected items : {cart.length} </p>
            <p>Total Price : {total} </p>
            <p>Total Shipping Charge :{shipping} </p>
            <p>Tax : {tax} </p>
            <h3>Grand total  : {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;
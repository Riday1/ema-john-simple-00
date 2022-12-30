import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleDelete }) => {
    const { id, name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-info'>
                <div className="review-item-details">
                    <p>{name}</p>
                    <p><small>Price : $ {price}</small></p>
                    <p><small>Shipping : $ {shipping}</small></p>
                    <p><small>Quantity : $ {quantity}</small></p>
                </div>
                <button onClick={() => handleDelete(id)} className='remove-btn'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>

            </div>



        </div >
    );
};

export default ReviewItem;
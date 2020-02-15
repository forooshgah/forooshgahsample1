import React from 'react'
import './productInGrid.css'

const ProductInGrid = (props) => {

    return (
        <div className="product-grid-item-container">
            <div className="product-grid-item">
                <img className="product-grid-img" src={props.data.imagePath || '/images/default.png'} />
                <div className="product-grid-name">{props.data.name}</div>
                <div className="product-grid-price">{props.data.price}</div>
            </div>
        </div>

    );
}

export default ProductInGrid
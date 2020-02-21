import React from 'react'
import { Button } from '@material-ui/core';


const ProductTileAddToCart = (props) => {

    const addToCart = () => {
        console.log(props.product.name)
    }

    return (
        <div className="product-tile-addcart">
            <Button  variant="outlined" color="primary" onClick={addToCart}>
                <i className="fa fa-cart"></i>
                Add to cart
            </Button>
        </div>
    );
}

export default ProductTileAddToCart;
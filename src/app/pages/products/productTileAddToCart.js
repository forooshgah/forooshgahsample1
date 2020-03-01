import React from 'react'
import { Button } from '@material-ui/core';


const ProductTileAddToCart = (props) => {

    const addToCart = () => {
        console.log(props.product.name)
    }

    return (
        <div className="prod-tile-addCart">
            <Button  variant="contained" color="primary" fullWidth={true} onClick={addToCart}>
                <i className="fa fa-cart"></i>
                Add to cart
            </Button>
        </div>
    );
}

export default ProductTileAddToCart;
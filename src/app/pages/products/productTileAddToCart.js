import React from 'react'
import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/ducks/cart.duck';


const ProductTileAddToCart = (props) => {

    const dispatch = useDispatch();

    const addToCart = () => dispatch(cartActions.addToCart(props.product));

    return (
        <div className="prod-tile-addCart">
            <Button  variant="contained" color="primary" size="large" fullWidth={true} onClick={addToCart}>
                <i className="fa fa-cart-plus fa-2x"> </i> &nbsp;
                Add to cart
            </Button>
        </div>
    );
}

export default ProductTileAddToCart;
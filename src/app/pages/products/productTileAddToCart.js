import React from 'react'
import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/ducks/cart.duck';


const ProductTileAddToCart = (props) => {

    const dispatch = useDispatch();

    const addToCart = () => dispatch(cartActions.addToCart(props.product));

    return (
        <Button variant="contained" color="primary" fullWidth={true} onClick={addToCart}>
            <i className="fa fa-cart-plus fa-lg"> </i> &nbsp;
            Add to cart
            </Button>
    );
}

export default ProductTileAddToCart;
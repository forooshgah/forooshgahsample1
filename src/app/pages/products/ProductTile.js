import React from "react"
import ProductTileImage from "./productTileImage"
import ProductTileAddToCart from "./productTileAddToCart";
// TODO: must move to right folder
//
const ProductTile = (props) => {
    return (
        <div className="card" key={props.product.id}>
            <div className="card-image">
                <ProductTileImage product={props.product} />
            </div>

            <div className="card-content">
                <p>{props.product.name}</p>
                <p><b>Price: {props.product.price}$</b></p>
                <ProductTileAddToCart product={props.product} />
            </div>
        </div>
    );
}

export default ProductTile;
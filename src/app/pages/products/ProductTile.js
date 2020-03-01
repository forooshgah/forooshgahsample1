import React from "react"
import ProductTileImage from "./productTileImage"
import ProductTileAddToCart from "./productTileAddToCart";
// TODO: must move to right folder
//
const ProductTile = (props) => {
    return (
        <div className="prod-tile" key={props.product.id}>
            <ProductTileImage product={props.product} />
            <div className="prod-tile-name">
                {props.product.name}
            </div>
            <div className="prod-tile-brand">
                {props.product.brandName}
            </div>
            <div className="prod-tile-attrs"></div>
            <div className="prod-tile-price">{props.product.price}</div>
            <div className="prod-tile-addCart">
                <ProductTileAddToCart product={props.product} />
            </div>
        </div>
    );
}

export default ProductTile;
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
            <div className="prod-tile-desc">
                {props.product.brandName}
            </div>
            <div className="prod-tile-attrs">
                <ul>
                    <li>Lorem Ipsum placeholder text for use in your graphic</li>
                    <li>placeholder text for use in your graphic</li>
                    <li>text for use</li>
                </ul>
            </div>
            <div className="prod-tile-price">{props.product.price.toLocaleString()} $</div>
            <ProductTileAddToCart product={props.product} />
        </div>
    );
}

export default ProductTile;
import React from "react"
import ProductTileImage from "./productTileImage"
import ProductTileAddToCart from "./productTileAddToCart";
import { Link } from "react-router-dom";
// TODO: must move to right folder
//
const ProductTile = (props) => {

    let price
    if (props.product.priceAfterDiscount > 0) {
        price = (<>
            <span style={{ textDecorationLine: "line-through", color: "#bbbbbb" }}>{props.product.price.toLocaleString()} $</span>
            <span >{props.product.priceAfterDiscount.toLocaleString()} $</span>
        </>
        );
    } else {
        price = (<>
            <span>{props.product.price.toLocaleString()} $</span>
        </>
        );
    }



    return (
        <Link to={"/Product/"+ props.product.id} className="prod-tile" key={props.product.id}>
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
            <div className="prod-tile-price">
                {price}
            </div>
            <ProductTileAddToCart product={props.product} />
        </Link>
    );
}

export default ProductTile;
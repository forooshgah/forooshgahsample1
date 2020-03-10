import React from "react"
import ProductTileImage from "./productTileImage"
import ProductTileAddToCart from "./productTileAddToCart";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
// TODO: must move to right folder
//
const ProductTile = (props) => {

    const { product } = props
    
    let price
    if (product.discount > 0) {
        price = (<>
            <span style={{ textDecorationLine: "line-through", color: "#bbbbbb" }}>{product.price.toLocaleString()} $</span>
            <span >{product.finalPrice.toLocaleString()} $</span>
        </>
        );
    } else {
        price = (<>
            <span>{product.finalPrice.toLocaleString()} $</span>
        </>
        );
    }




    return (
        <div className="prod-tile">
            <Link to={"/Product/" + product.id}  key={product.id}>
                <ProductTileImage product={product} />
                <div className="prod-tile-name">
                    {product.name}
                </div>
                <div className="prod-tile-desc">
                    {product.brandName}
                </div>
                <div className="prod-tile-attrs">
                    <ul>
                        <li className={product.shortDesc1 ? '' : 'hidden'}>{product.shortDesc1}</li>
                        <li className={product.shortDesc2 ? '' : 'hidden'}>{product.shortDesc2}</li>
                        <li className={product.shortDesc3 ? '' : 'hidden'}>{product.shortDesc3}</li>
                    </ul>
                </div>
                <div className="prod-tile-price">
                    {price}
                </div>
            </Link>
            <ProductTileAddToCart product={product} />

        </div>
    );
}

const useStyle = makeStyles({


});

export default ProductTile;
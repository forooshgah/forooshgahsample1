import React from 'react'


const ProductTileImage = (props) =>{
    const defaultImagePath = "/media/products/product4.jpg";
    const mystyle = {
        width: "100%"
      };
    return (
        <div className="product-tile-image">
            <img src={props.product.imgPath? props.product.imgPath : defaultImagePath} style={mystyle}/>
        </div>
    );
}

export default ProductTileImage;
import React from 'react'


const ProductTileImage = (props) => {
    const mystyle = {
        width: "100%"
    };
    let mainImagePath = "/media/products/product4.jpg";
    let baseUrl = "http://185.2.14.80:8094"; //TODO : from env


    if (props.product.productImages.length > 0) {
        let main = props.product.productImages
            .filter(x => {
                return x.isMain == true
            })[0];

        if(!main){
            main = props.product.productImages[0];
        }
        mainImagePath = main.filePath;
    }

    return (
            <img src={baseUrl + mainImagePath} style={mystyle} className="prod-tile-image" />
    );
}

export default ProductTileImage;
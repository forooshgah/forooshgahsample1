import React, { useEffect, useState, useCallback } from "react"
import { Grid, CircularProgress, makeStyles, Button, colors } from "@material-ui/core";
import { getProduct } from "../../services/product.service"
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages"
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/ducks/cart.duck";
const ProductDetail = props => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getProduct(parseInt(id)).then(result => {
            setLoading(false);
            setProduct(result);
        })
    }, [])

    const addToCartHandler = () =>dispatch(cartActions.addToCart(product));



    let content
    if (loading) {
        content = <CircularProgress />
    } else if (product) {
        let price = 0;
        if (product.priceAfterDiscount > 0) {
            price = (<>
                <span style={{ textDecorationLine: "line-through", color: "#bbbbbb" }}>{product.price.toLocaleString()} $</span>
                <span >{product.priceAfterDiscount.toLocaleString()} $</span>
            </>
            );
        } else {
            price = (<>
                <span>{product.price.toLocaleString()} $</span>
            </>
            );
        }

        content = (<Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <ProductImages images={product.productImages} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <div className="prod-detail-data">
                    <div className={classes.title}>{product.name}</div>
                    <div className={classes.desc}>{product.brandDesc}</div>
                    <div className={classes.price}>{price}</div>
                    <div className="">
                        <Button className={classes.addToCart} onClick={() => addToCartHandler()}>
                            <i className="fa fa-cart-plus fa-lg"></i> &nbsp;
                            Add To Cart
                            </Button>
                    </div>
                </div>
            </Grid>
        </Grid>)
    } else {
        content = <div>Nothing to do here</div>
    }


    return (
        <div className="prod-detail-page">
            <div>
                {/* bread crum>?! */}
            </div>
            {content}
        </div>
    );
}

const useStyles = makeStyles({
    title: {
        fontSize: "3rem",
        fontFamily: "sans-serif",
    },
    desc: {
        color: "#bbb"
    },
    addToCart: {
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
    }
});


export default ProductDetail
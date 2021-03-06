import React, { useEffect, useState } from "react"
import { Grid, CircularProgress, makeStyles, Button, colors, Paper, ListItem, List, ListItemIcon, ListItemText, LinearProgress } from "@material-ui/core";
import { getProduct, getProductDesc } from "../../services/product.service"
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages"
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/ducks/cart.duck";
import { LayoutSubheader } from "../../../_metronic";
import DoneIcon from '@material-ui/icons/Done';
import { Badge, ListGroup, Button as BButton } from "react-bootstrap";
import { Portlet, PortletHeader, PortletBody } from "../../partials/content/Portlet";
const ProductDetail = props => {

    const [product, setProduct] = useState(null);
    const [productDesc, setProductDesc] = useState(null);
    const [loading, setLoading] = useState({ main: false, desc: false });

    const { id } = useParams();
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading({ main: true, desc: true });
        getProduct(parseInt(id)).then(result => {
            setLoading({ loading, main: false });
            setProduct(result);

            if (result.productDescriptionId) {
                getProductDesc(result.productDescriptionId).then(resultdesc => {
                    setLoading({ loading, desc: false });
                    setProductDesc(resultdesc);
                })
            }

        })


    }, [])

    const addToCartHandler = () => dispatch(cartActions.addToCart(product));

    LayoutSubheader({ title: "Product ", breadcrumb: [{ page: "/", title: "Electronic" }, { page: "/", title: "Mobile" }] });

    let content
    let htmlContent
    if (loading.main) {
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

        content = (
            <Grid container spacing={1}>
                <Grid item xs={12} sm={9}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className={classes.title}>{product.name}</div>
                            <div className="prod-tile-desc">
                                <BButton variant="outline-dark">{product.categoryName}</BButton>
                                <BButton variant="outline-dark">{product.brandName}</BButton>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <div className={classes.desc}>
                                <List dense={true}>
                                    {[1, 2, 3, 4, 5].map(i => {
                                        if (product["shortDesc" + i] == null) {
                                            return null;
                                        }
                                        return (
                                            <ListItem key={i}>
                                                <ListItemIcon><DoneIcon /></ListItemIcon>
                                                <ListItemText disableTypography={true} className={classes.attrs} primary={product["shortDesc" + i]} />
                                            </ListItem>);
                                    })}

                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <ProductImages images={product.productImages} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.actions}>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className={classes.instock}>
                                <i className="fa fa-check fa-lg"></i>
                                <span>
                                    In Stock
                                </span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            something
                        </ListGroup.Item>
                        <ListGroup.Item>
                            something
                        </ListGroup.Item>
                        <ListGroup.Item>
                            something
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className={classes.price}>{price}</div>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className={classes.addToCart} onClick={() => addToCartHandler()}>
                                <i className="fa fa-cart-plus fa-lg"></i> &nbsp;
                                Add To Cart
                        </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Grid>
            </Grid>
        )
    } else {
        content = <div>Nothing to do here</div>
    }

    if (loading.desc) {
        htmlContent = (<LinearProgress />)
    } else if (productDesc) {
        htmlContent = (<div dangerouslySetInnerHTML={{
            __html: productDesc.content
        }}></div>
        );
    } else {
        htmlContent = (<>No Html Content available</>)
    }


    return (
        <>
            <Paper className={classes.root} >
                {content}
            </Paper>

            <Portlet fluidHeight={true} className={classes.descContainer} >
                <PortletHeader
                    title="Product Description"
                />

                <PortletBody>
                    {htmlContent}
                </PortletBody>
            </Portlet>
        </>

    );
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    descContainer: {
        marginTop: theme.spacing(2)
    },
    title: {
        fontSize: "2rem",
        fontFamily: "sans-serif",
    },
    attrs: {
        fontSize: "1.1rem !important",
    },
    price: {
        color: "red",
        fontSize: "3rem",
        marginTop: "100px;"
    },
    actions: {
        textAlign: "center"
    },
    instock: {
        textAlign: "center",
        paddingTop: "20px",
        "& i": {
            color: "green",
            margin: "5px"
        },
        "& span": {

        }
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
}));


export default ProductDetail
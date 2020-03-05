import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/ducks/cart.duck";
import { Table, TableHead, TableRow, TableBody, TableCell, Link } from "@material-ui/core";
import baseService from "../../services/base.service"
import { makeStyles } from "@material-ui/styles";


const CartItems = () => {
    const classes = useStyles();

    let dispatch = useDispatch();
    let products = useSelector(state => state.cart.products);

    const onPlus = prod => dispatch(cartActions.addToCart(prod));
    const onMinus = prod => dispatch(cartActions.removeFromCart(prod.id));

    let count = 0;
    let subTotal = 0;
    let tax = 0;
    products.forEach(p => {
        count += p.count;
        subTotal += p.count * p.finalPrice;
        tax += 1;
    });



    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2}>Product</TableCell>
                    <TableCell>In stocke</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map(prod => (
                    <TableRow key={prod.id}>
                        <TableCell>
                            <Link to={"/Product/" + prod.id}>
                                <img
                                    className={classes.pic}
                                    src={baseService.baseUrl + prod.mainImagePath}
                                    alt="product"
                                />
                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className={classes.prodName}>{prod.name}</div>
                            <div className={classes.prodDet}>{prod.brandName}</div>

                        </TableCell>
                        <TableCell>
                            <i className="fa fa-check fa-lg"></i>
                        </TableCell>
                        <TableCell>
                            <span className={"btn btn-sm btn-warning btn-icon " + classes.btnAddMinus} cl onClick={() => onMinus(prod)}>-</span>
                            <span className={classes.count}>
                                {prod.count}
                            </span>
                            <span className={"btn btn-sm btn-success btn-icon "+ classes.btnAddMinus} onClick={() => onPlus(prod)}>+</span>
                        </TableCell>
                        <TableCell >{prod.count * prod.finalPrice}</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell rowSpan={3} colSpan={2} />
                    <TableCell >Subtotal</TableCell>
                    <TableCell >{subTotal}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell >{tax}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">{tax + subTotal}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}


const useStyles = makeStyles({
    pic: {
        width: "5rem",
        height: "5rem",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "4px"
    },
    prodName: {
        fontSize: "1.5rem",
    },
    prodDet: {
        fontSize: ".9rem",
        color: "#bbb"
    },
    btnAddMinus: {
        fontSize: "1.4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0.5rem",
        width: "19px !important",
        height: "19px !important",
        paddingTop: "0.1rem",
    },
    count: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        paddingLeft:"5px",
        paddingRight:"5px",
        textAlign:"center"
    }
});

export default CartItems
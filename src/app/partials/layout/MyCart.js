import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Dropdown } from "react-bootstrap";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";
import { ReactComponent as CartNum3Icon } from "../../../_metronic/layout/assets/layout-svg-icons/CartNum3.svg";
import { useSelector, useDispatch } from "react-redux";
import baseService from "../../services/base.service"
import { cartActions } from "../../store/ducks/cart.duck";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false
};

const MyCart = (props) => {

  const { bgImage, useSVG, icon, iconType } = props;

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

  let prodList
  let summary
  if (count == 0) {
    prodList = (
      <div className="kt-mycart__item">
        <div className="kt-mycart__container">
          <div className="kt-mycart__info">
            your cart is empty
            </div>
        </div>
      </div>
    )
  } else {
    prodList = (
      products.map(prod => (
        <div className="kt-mycart__item" key={prod.id}>
          <div className="kt-mycart__container">
            <div className="kt-mycart__info">
              <Link to="cart-item" className="kt-mycart__title">
                {prod.name}
              </Link>
              <span className="kt-mycart__desc">
                {prod.brandName}
              </span>

              <div className="kt-mycart__action">
                <span className="kt-mycart__price">$ {prod.price}</span>
                <span className="btn btn-warning btn-icon" onClick={() => onMinus(prod)}>
                  −
                </span>
                <span className="kt-mycart__text">
                  &nbsp;&nbsp;<strong>{prod.count}</strong>&nbsp;
                </span>
                <span className="btn btn-info btn-icon" onClick={() => onPlus(prod)}>
                  +
                </span>
              </div>
            </div>

            <Link to={"/Product/" + prod.id} className="kt-mycart__pic">
              <img
                src={baseService.baseUrl + prod.mainImagePath}
                alt="product"
              />
            </Link>
          </div>
        </div>
      ))
    )

    summary = (
      <div className="kt-mycart__footer">
        <div className="kt-mycart__section">
          <div className="kt-mycart__subtitel">
            <span>Sub Total</span>
            <span>Taxes</span>
            <span>Total</span>
          </div>

          <div className="kt-mycart__prices">
            <span>$ {subTotal}</span>
            <span>$ {tax}</span>
            <span className="kt-font-danger">$ {subTotal + tax}</span>
          </div>
        </div>
        <div className="kt-mycart__button kt-align-right">
          <Link
                to="/checkout"
                className="btn btn-primary btn-sm"
              >
                Checkout
              </Link>
        </div>
      </div>
    )
  }




  return (
    <Dropdown className="kt-header__topbar-item" drop="down" alignRight>
      <Dropdown.Toggle as={HeaderDropdownToggle} id="dropdown-toggle-my-cart">
        <span
          className={clsx("kt-header__topbar-icon", {
            "kt-header__topbar-icon--brand": iconType === "brand"
          })}
        >
          {!useSVG && <i className={icon} />}

          {useSVG && (
            <span
              className={clsx("kt-svg-icon", {
                "kt-svg-icon-brand": iconType === "brand"
              })}
            >
              <CartNum3Icon className="kt-svg-icon kt-svg-icon--primary" />
            </span>
          )}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
        <form className="flex-column p-0">
          <div className="kt-mycart">
            <div
              className="kt-mycart__head kt-head"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="kt-mycart__info">
                <span className="kt-mycart__icon">
                  <i className="flaticon2-shopping-cart-1 kt-font-success" />
                </span>
                <h3 className="kt-mycart__title">My Cart</h3>
              </div>
              <div className="kt-mycart__button">
                <button type="button" className="btn btn-success btn-sm">
                  {count} Items
                  </button>
              </div>
            </div>

            <PerfectScrollbar
              options={perfectScrollbarOptions}
              style={{ maxHeight: "35vh", position: "relative" }}
            >
              <div className="kt-mycart__body">
                {prodList}
              </div>
            </PerfectScrollbar>

            {summary}
          </div>
        </form>
      </Dropdown.Menu>
    </Dropdown>
  );

}


export default MyCart;
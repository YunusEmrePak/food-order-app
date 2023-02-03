import React from "react";
import Item from "./Item";
import TotalAmount from "../TotalAmount/TotalAmount";

import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div className={classes.carts}>
        <Item />
        <Item />
        <Item />
        <Item />
        <TotalAmount />
      </div>
    </React.Fragment>
  );
};

export default Cart;

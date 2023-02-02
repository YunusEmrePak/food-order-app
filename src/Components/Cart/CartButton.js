import React from "react";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button}>
        🛒 Your Cart <div className={classes.cartCounter}>0</div>
      </button>
    </React.Fragment>
  );
};

export default CartButton;

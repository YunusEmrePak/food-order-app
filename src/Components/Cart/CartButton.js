import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <button className={`${classes.button}`} onClick={AuthCtx.openCartHandler}>
        🛒 Your Cart
        <div className={classes.cartCounter}>{AuthCtx.itemCounter}</div>
      </button>
    </React.Fragment>
  );
};

export default CartButton;

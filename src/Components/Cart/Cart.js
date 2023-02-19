import React, { useContext } from "react";
import Item from "./Item";
import TotalAmount from "../TotalAmount/TotalAmount";
import AuthContext from "../../store/auth-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const AuthCtx = useContext(AuthContext);

  // Keep JSX simplier.
  const data = AuthCtx.newData.map((data) => {
    if (data.isAdded === true) {
      return (
        <Item
          key={data.id}
          title={data.mealName}
          total={data.total}
          totalAmount={data.totalAmount}
        />
      );
    }
  });
  

  return (
    <React.Fragment>
      <div className={classes.carts}>
       {data}
        <TotalAmount />
      </div>
    </React.Fragment>
  );
};

export default Cart;

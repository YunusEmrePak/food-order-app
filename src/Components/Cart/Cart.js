import React, { useContext } from "react";
import Item from "./Item";
import TotalAmount from "../TotalAmount/TotalAmount";
import AuthContext from "../../store/auth-context";

import classes from "./Cart.module.css";

const Cart = (props) => {  
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={classes.carts}>
        {AuthCtx.transferredData.map(data => {
          return <Item key={data.id} title={data.mealName} />
        })}
        <TotalAmount />
      </div>
    </React.Fragment>
  );
};

export default Cart;

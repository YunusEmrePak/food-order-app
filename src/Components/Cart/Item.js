import React, { useContext } from "react";
import Button from "../../UI/Button";
import AuthContext from "../../store/auth-context";

import classes from "./Item.module.css";

const Item = (props) => {
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={classes.cart}>
        <div className={classes.information}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.ttl}>
            <div className={classes.price}>
              ${parseFloat(props.totalAmount).toFixed(2)}
            </div>
            <div className={classes.totalMeal}>x {props.total}</div>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button type="button" buttonName="+" className="button" />
          <Button type="button" buttonName="-" className="button" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;

import React, { useContext } from "react";
import AmountInput from "../Input/AmountInput";
import Button from "../../UI/Button";
import AuthContext from "../../store/auth-context";

import classes from "./Meal.module.css";

const Meal = (props) => {
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={classes.meal}>
        <div className={classes.information}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.inf}>{props.information}</div>
          <div className={classes.price}>${props.price}</div>
        </div>
        <div className={classes.amountButton}>
          <div className={classes.amount}>
            <label>Amount</label>
            <AmountInput />
          </div>
          <Button
            onClick={AuthCtx.increaseHandler}
            buttonName="+ Add"
            type="button"
            className="button"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meal;

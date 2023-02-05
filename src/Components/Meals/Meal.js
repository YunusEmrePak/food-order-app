import React, { useState, useContext } from "react";
import AmountInput from "../Input/AmountInput";
import Button from "../../UI/Button";
import AuthContext from "../../store/auth-context";

import classes from "./Meal.module.css";

const Meal = (props) => {
  const AuthCtx = useContext(AuthContext);

  const addItemHandler = () => {
    props.item.map((item) => {
      if (item.id === props.id) {
        item.isAdded = true;
        item.total += AuthCtx.total;
        item.totalAmount += +parseFloat(
          +(AuthCtx.total * item.mealPrice)
        ).toFixed(2);

        AuthCtx.total = 0;
      }
    });

    AuthCtx.transferData(props.item, props.price);
  };

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
            onClick={() => {
              AuthCtx.increaseHandler();
              addItemHandler();
            }}
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

import React from "react";
import Button from "../../UI/Button";

import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <React.Fragment>
      <div className={classes.cart}>
        <div className={classes.information}>
          <div className={classes.title}>Sushi</div>
          <div className={classes.ttl}>
            <div className={classes.price}>$22.99</div>
            <div className={classes.totalMeal}>x 1</div>
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

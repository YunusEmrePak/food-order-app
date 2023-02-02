import React from "react";

import classes from "./Main.module.css";
import background from "../../Images/meals.jpg";

const Main = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.mainImg}>
          <img src={background} />
        </div>
        <div className={classes.explanation}>
            <div className={classes.expTitle}>Delicious Food, Delivered To You</div>
            <div className={classes.expParag}>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

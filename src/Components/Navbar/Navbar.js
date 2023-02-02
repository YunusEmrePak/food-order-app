import React from "react";
import CartButton from "../Cart/CartButton";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <div className={classes["title-app"]}>ReactMeals</div>
        <CartButton />
      </div>
    </React.Fragment>
  );
};

export default Navbar;

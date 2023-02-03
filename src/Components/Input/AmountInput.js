import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./AmountInput.module.css";

const AmountInput = (props) => {
  const AuthCtx = useContext(AuthContext);

  const inputValueHandler = (event) => {
    const inputVal = +event.target.value;
    AuthCtx.changeAmountHandler(inputVal);
  };

  return (
    <input
      type="number"
      className={classes.inp}
      defaultValue={1}
      onChange={inputValueHandler}
      min={0}
    />
  );
};

export default AmountInput;

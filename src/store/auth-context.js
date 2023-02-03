import React, { useState } from "react";

const AuthContext = React.createContext({
  increaseHandler: () => {},
  itemCounter: 0,
  changeAmount: () => {},
  openCartHandler: () => {},
  closeCartHandler: () => {},
  isLoggedCart: false
});

export const AuthContextProvider = (props) => {
  const [itemCounter, setItemCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [isLoggedCart, setIsLoggedCart] = useState(false);

  const increaseCounterHandler = () => {
    setItemCounter((prev) => {
      return prev = prev + inputValue;
    });
  };

  const changeAmountHandler = (inputVal) => {
    setInputValue(inputVal)
  }

  const openCartHandler = () => {
    setIsLoggedCart(true);
  }

  const closeCartHandler = () => {
    setIsLoggedCart(false);
  }

  return (
    <AuthContext.Provider
      value={{
        increaseHandler: increaseCounterHandler,
        itemCounter: itemCounter,
        changeAmountHandler: changeAmountHandler,
        openCartHandler: openCartHandler,
        closeCartHandler: closeCartHandler,
        isLoggedCart: isLoggedCart
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

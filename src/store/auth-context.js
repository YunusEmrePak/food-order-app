import React, { useState } from "react";

const AuthContext = React.createContext({
  increaseHandler: () => {},
  itemCounter: 0,
  changeAmount: () => {},
  openCartHandler: () => {},
  closeCartHandler: () => {},
  transferData: () => {},
  isLoggedCart: false,
  transferredData: {},
  total: 0,
  totalAmount: 0
});

export const AuthContextProvider = (props) => {
  const [itemCounter, setItemCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [isLoggedCart, setIsLoggedCart] = useState(false);
  const [transferredData, setTransferredData] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

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

  const transferData = (data, price) => {
    setTransferredData(prev => {
      if (data.mealName !== prev.mealName) {
        return [...prev, data];
      }
    });

    setTotal(prev => {
      return prev + inputValue;
    });

    setTotalAmount(prev => {
      return +parseFloat(prev + (+price) * inputValue).toFixed(2);
    });

  }

  return (
    <AuthContext.Provider
      value={{
        increaseHandler: increaseCounterHandler,
        itemCounter: itemCounter,
        changeAmountHandler: changeAmountHandler,
        openCartHandler: openCartHandler,
        closeCartHandler: closeCartHandler,
        transferData: transferData,
        isLoggedCart: isLoggedCart,
        transferredData: transferredData,
        total: inputValue,
        totalAmount: totalAmount
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

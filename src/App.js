import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import AuthContext from "./store/auth-context";

import classes from './App.module.css';

const App = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={AuthCtx.isLoggedCart && (classes.blank)}>
        <Navbar />
        <Main />
        {AuthCtx.isLoggedCart && <Cart />}
      </div>
    </React.Fragment>
  );
};

export default App;

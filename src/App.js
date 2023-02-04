import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import AuthContext from "./store/auth-context";

const App = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Navbar />
      <Main />
      {AuthCtx.isLoggedCart && <Cart />}
    </React.Fragment>
  );
};

export default App;

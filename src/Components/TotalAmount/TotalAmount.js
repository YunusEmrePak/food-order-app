import React, { useContext } from 'react';
import Button from '../../UI/Button';
import AuthContext from '../../store/auth-context';

import classes from './TotalAmount.module.css';

const TotalAmount = () => {
  const AuthCtx = useContext(AuthContext);

  return (
        <React.Fragment>
            <div className={classes.totalAmount}>
                <label>Total Amount</label>
                <div className={classes.totalPrice}>$55.78</div>
            </div>
            <div className={classes.buttons}>
                <Button className="button" type="button" buttonName="Close" onClick={AuthCtx.closeCartHandler} />
                <Button className="button" type="submit" buttonName="Order" />
            </div>
        </React.Fragment>
    );
};

export default TotalAmount;
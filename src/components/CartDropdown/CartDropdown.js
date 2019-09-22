import React from 'react';

import Button from '../Button/Button';

import './CartDropdown.scss';

const CartDropdown = props => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <Button>GO TO CHECKOUT</Button>
    </div>
  </div>
);

export default CartDropdown;

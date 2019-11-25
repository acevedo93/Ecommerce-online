import React from 'react';
import './cart-icon.component.scss';
import  { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
const cartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="'shopping-icon" />
    <span className="item-count">0</span>
  </div>
);


export default cartIcon 
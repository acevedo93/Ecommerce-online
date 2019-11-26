import React from 'react';
import {CustomButton} from '../custom-button/CustomButton.component';
import { connect } from 'react-redux';
import { addItemToCart} from '../../redux/cart/cart.actions'
import './CollectionItem.styles.scss';

const CollectionItem = ({item, addItemToCart }) =>(
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <CustomButton onClick={()=> addItemToCart(item)} className="custom-button" inverted>Add</CustomButton>
  </div>
)

const mapDispatchToProps = ( dispatch) =>({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
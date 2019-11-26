export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )
// si el item que se intenta agregar ya se encuentra se agurega uno mas al cquantity
  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }
// si el item no se encuentra se agrega u aobjeto y el key auqntity
  return [...cartItems, {cartItemToAdd, quantity: 1}]
}
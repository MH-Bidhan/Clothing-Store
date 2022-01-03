const decreaseCartItem = (cartItems, itemToBeDecreased) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeDecreased.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToBeDecreased.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToBeDecreased.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export default decreaseCartItem;

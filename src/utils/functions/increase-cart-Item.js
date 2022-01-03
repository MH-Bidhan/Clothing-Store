const increaseCartItem = (cartItems, itemToBeIncreased) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeIncreased.id
  );

  if (!existingItem) return;

  return cartItems.map((cartItem) =>
    cartItem.id === itemToBeIncreased.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      : cartItem
  );
};

export default increaseCartItem;

export const AddItemToCart = (itemData, amount, cartItems, setCartItems) => {
  const newCartItem = { ...itemData, amount: amount };
  let foundItem = cartItems.find((item) => item.id === itemData.id);
  if (!foundItem) {
    setCartItems([...cartItems, newCartItem]);
  } else {
    let newCartItems = cartItems.map((item) => {
      if (item.id === foundItem.id) {
        return { ...foundItem, amount: foundItem.amount + amount };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  }
};

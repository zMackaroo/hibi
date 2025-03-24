export const initState: any = {
  menu: [],
  cart: [],
};

export const storeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { name, price, quantity } = action.payload;
      const currentItem = state.cart[name] || { quantity: 0, price };

      // Ensure quantity does not go below 0
      const newQuantity = Math.max(0, currentItem.quantity + quantity);

      // If quantity is 0, remove the item from the cart
      const updatedCart = { ...state.cart };
      if (newQuantity === 0) {
        delete updatedCart[name];
      } else {
        updatedCart[name] = { quantity: newQuantity, price };
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "UPDATE_MENU": {
      state.menu = action.payload;
      return state;
    }
    default:
      return state;
  }
};

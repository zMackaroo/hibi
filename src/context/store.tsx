export const initState: any = {
  menu: [
    {
      id: 1,
      name: "Cold Brew",
      description:
        "Steeped for 24 hours to unlock deep, bold flavors with a smooth, nutty finish and a hint of tart fruit. A refreshingly refined pick-me-up.",
      price: 79,
    },
    {
      id: 2,
      name: "Café Latte",
      description:
        "A timeless classic—rich espresso meets perfectly steamed milk for a silky, balanced, and effortlessly elegant coffee experience.",
      price: 99,
    },
    {
      id: 3,
      name: "Spanish Latte",
      description:
        "Bold espresso and velvety, subtly sweetened milk come together in this smooth, indulgent delight with just the right depth and warmth.",
      price: 105,
    },
    {
      id: 4,
      name: "French Vanilla Latte",
      description:
        "Smooth espresso, creamy milk, and a touch of warm vanilla create a luxurious, aromatic coffee that’s as comforting as it is refined.",
      price: 125,
    },
    {
      id: 5,
      name: "Mocha Latte",
      description:
        "Rich espresso, silky milk, and decadent chocolate blend into a perfectly balanced indulgence for those who crave a touch of sweetness.",
      price: 125,
    },
    {
      id: 6,
      name: "Hazelnut Latte",
      description:
        "Bold espresso, smooth milk, and the warm, nutty essence of hazelnut create a rich and aromatic coffee with an irresistibly cozy feel.",
      price: 125,
    },
    {
      id: 7,
      name: "Toffee Nut Latte",
      description:
        "A buttery blend of espresso, creamy milk, and caramelized toffee with a hint of roasted nuts—smooth, indulgent, and utterly satisfying.",
      price: 125,
    },
    {
      id: 8,
      name: "Matcha Latte",
      description:
        "Finely ground green tea whisked into steamed milk for a smooth, earthy, and vibrant drink that’s both refreshing and indulgent.",
      price: 125,
    },
    {
      id: 9,
      name: "Tea Infused Strawberry Lemonade",
      description:
        "A refreshing blend of sweet strawberries, zesty lemon, and soothing tea, perfect for a bright and invigorating drink.",
      price: 135,
    },
    {
      id: 10,
      name: "Strawberry Lemonade with Coconut Milk",
      description:
        "A creamy and refreshing blend of sweet strawberries, tangy lemon, and smooth coconut milk for a tropical twist on a classic drink.",
      price: 140,
    },
    {
      id: 11,
      name: "Bacsilog",
      description:
        "A hearty Filipino breakfast featuring crispy bacon, sinaing (slow-cooked rice), and itlog (egg), offering a perfect balance of savory, smoky, and comforting flavors.",
      price: 105,
    },
    {
      id: 11,
      name: "Tapsilog",
      description:
        "Tapsilog is a classic Filipino breakfast dish featuring tender, marinated beef tapa, garlic fried rice (sinangag), and a fried egg (itlog), served with a side of vinegar for a savory and satisfying meal.",
      price: 105,
    },
    {
      id: 11,
      name: "Bangsilog",
      description:
        "Bangsilog is a Filipino breakfast favorite featuring crispy fried bangus (milkfish), garlic fried rice (sinangag), and a fried egg (itlog), served with a side of vinegar for a flavorful and hearty meal.",
      price: 105,
    },
  ],
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
    default:
      return state;
  }
};

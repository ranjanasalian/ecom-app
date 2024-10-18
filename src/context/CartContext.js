import React, { createContext, useState } from "react";

export const CartContext = createContext(); //creates a context object. You initialize a context that holds data and provide it to components.

export default function CartProvider({ children }) {
  //this children prop is used to wrap all the components that needs access to the CartContext.
  const [cartItem, setCartitem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  function AddtoCart(product) {
    //product is argument that handles adding product to the cart
    const existingProduct = cartItem.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartitem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartitem([...cartItem, { ...product, quantity: 1 }]);
    }
  }
  function toggleCart() {
    console.log("Toggle cart called");
    setIsCartOpen(!isCartOpen);
  }
  const value = {
    cartItem,
    AddtoCart,
    isCartOpen,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

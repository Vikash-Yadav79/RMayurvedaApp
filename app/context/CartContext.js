// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const isItemInCart = cart.some(cartItem => cartItem.id === item.id);
//     if (!isItemInCart) {
//       setCart([...cart, item]);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    const isItemInCart = cart.some(cartItem => cartItem.id === item.id);
    if (isItemInCart) {
      // If item already exists, update the quantity
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        ),
      );
    } else {
      // If item does not exist, add it with quantity 1
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  return (
    <CartContext.Provider value={{cart, addToCart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './app/context/CartContext';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

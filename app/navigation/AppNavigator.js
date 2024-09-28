import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../authentication/LoginScreen';
import OTPScreen from '../authentication/OTPScreen';
import ForgotPasswordScreen from '../authentication/ForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';
import NewLaunchScreen from '../screens/NewLaunchScreen';
import MedicineScreen from '../screens/MedicineScreen';
// import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen'
import CheckoutScreen from '../paymentmethod/CheckoutScreen';
import ProductList from '../product/ProductList';
import ProductDetailScreen from '../product/ProductDetailScreen';
import ComboDetailScreen from '../screens/ComboDetailScreen';
import BestSellerRelatedProduct from '../screens/BestSellerRelatedProduct';
import ComboProductScreen from '../screens/ComboProductScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewLaunchScreen" component={NewLaunchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MedicineScreen" component={MedicineScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductList} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ComboDetail" component={ComboDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BestSellerRelatedProduct" component={BestSellerRelatedProduct} options={{ headerShown: false }} />
      <Stack.Screen name="ComboProductScreen" component={ComboProductScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

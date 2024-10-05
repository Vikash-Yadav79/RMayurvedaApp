import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../authentication/LoginScreen';
import OTPScreen from '../authentication/OTPScreen';
import ForgotPasswordScreen from '../authentication/ForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';
import NewLaunchScreen from '../screens/NewLaunchScreen';
import MedicineScreen from '../screens/MedicineScreen';
// import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../paymentmethod/CheckoutScreen';
import ProductList from '../product/ProductList';
import ProductDetailScreen from '../product/ProductDetailScreen';
import ComboDetailScreen from '../screens/ComboDetailScreen';
import BestSellerRelatedProduct from '../screens/BestSellerRelatedProduct';
import ComboProductScreen from '../screens/ComboProductScreen';
import ProfileScreen from '../ProfileSection/ProfileScreen';
import UserDetailsScreen from '../ProfileSection/profiledetailsScreen/UserDetailsScreen';
import AddressScreen from '../ProfileSection/profiledetailsScreen/AddressScreen';
import AddAddressScreen from '../ProfileSection/profiledetailsScreen/AddAddressScreen';
import OrderScreen from '../ProfileSection/profiledetailsScreen/OrderScreen';
import PrivacyPolicyScreen from '../ProfileSection/profiledetailsScreen/PrivacyPolicyScreen';
import FAQScreen from '../ProfileSection/profiledetailsScreen/FaqScreen';
import ContactUsScreen from '../ProfileSection/profiledetailsScreen/ContactUsScreen';
import OrderDetailsScreen from '../ProfileSection/profiledetailsScreen/OrderDetailsScreen';
import RecentOrder from '../screens/RecentOrder';
import WalletScreen from '../ProfileSection/profiledetailsScreen/WalletScreen';
import ReferFriendScreen from '../ProfileSection/profiledetailsScreen/ReferFriendScreen';
import PaymentMethodScreen from '../ProfileSection/profiledetailsScreen/PaymentMethodScreen';
import NotificationScreen from '../ProfileSection/profiledetailsScreen/NotificationScreen';
import TermsOfServiceScreen from '../ProfileSection/profiledetailsScreen/TermsOfServiceScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewLaunchScreen"
        component={NewLaunchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MedicineScreen"
        component={MedicineScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ComboDetail"
        component={ComboDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BestSellerRelatedProduct"
        component={BestSellerRelatedProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ComboProductScreen"
        component={ComboProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddressScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Faq"
        component={FAQScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Contact"
        component={ContactUsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Recent"
        component={RecentOrder}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Refer"
        component={ReferFriendScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentMethodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfServiceScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

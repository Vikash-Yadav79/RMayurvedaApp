import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
} from '../components/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCart} from '../context/CartContext'; // Adjust the path

const FooterScreen = () => {
  const navigation = useNavigation();
  const {cart} = useCart();

  return (
    <View style={styles.bottomNav}>
      {/* Home Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.navButton}>
        <Ionicons name="home-outline" size={22} color={Colors.text} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Cart Icon */}
      {/* <TouchableOpacity
        // onPress={() => navigation.navigate('CartScreen')}
        style={styles.cartButtonContainer}>
        <View style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#fff" />
        </View>
        <Text style={[styles.navText, styles.cartText]}>Cart</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.cartButtonContainer}
        onPress={() => navigation.navigate('CartScreen')}>
        <MaterialIcons
          name="shopping-cart"
          size={44}
          color="#140F1F"
          style={styles.icon}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.length}</Text>
        </View>
        <Text style={[styles.navText, styles.cartText]}>Cart</Text>
      </TouchableOpacity>

      {/* Shop Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Product')}
        style={styles.navButton}>
        <Ionicons name="bag-handle-outline" size={22} color={Colors.text} />
        <Text style={styles.navText}>Shop</Text>
      </TouchableOpacity>

      {/* profile Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.navButton}>
        <Ionicons name="bag-handle-outline" size={22} color={Colors.text} />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.accent,
    borderTopWidth: 1,
    borderColor: '#ddd',
    height: 60,
  },
  navButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: Colors.text,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: FontFamily.regular,
  },
  cartButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50, // Diameter of the circle
    height: 50, // Diameter of the circle
    borderRadius: 25, // Half of the width/height to make it a circle
    backgroundColor: Colors.accent, // Background color for the cart button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow effect for a modern look
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    marginBottom: 5,
    marginLeft: 70,
  },
  cartText: {
    // marginTop: 40, // Adjust spacing for Cart text
    marginLeft: 60,
    marginBottom: 10,
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -28,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FooterScreen;

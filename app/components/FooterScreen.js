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

const FooterScreen = () => {
  const navigation = useNavigation();

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
      <TouchableOpacity
        // onPress={() => navigation.navigate('CartScreen')}
        style={styles.cartButtonContainer}>
        <View style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#fff" />
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
        onPress={() => navigation.navigate('Product')}
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
  cartButton: {
    width: 50, // Diameter of the circle
    height: 50, // Diameter of the circle
    borderRadius: 25, // Half of the width/height to make it a circle
    backgroundColor: Colors.text, // Background color for the cart button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow effect for a modern look
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    marginBottom: 4,
    marginLeft: 70,
  },
  cartText: {
    // marginTop: 40, // Adjust spacing for Cart text
    marginLeft: 60,
    marginBottom: 10,
  },
});

export default FooterScreen;

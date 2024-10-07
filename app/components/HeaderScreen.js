import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext'; // Adjust the path
import {useNavigation} from '@react-navigation/native';
import {Colors, FontSizes} from '../components/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderScreen = () => {
  const {cart} = useCart();
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>RM Ayurved</Text>
      <TouchableOpacity
        style={styles.cartContainer}
        onPress={() => navigation.navigate('Notification')}>
        <MaterialIcons
          name="notifications"
          size={24}
          color="#333"
          style={styles.icon}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.accent,
  },
  logo: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.text,
  },
  cartContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: FontSizes.large,
    marginRight: 5,
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
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

export default HeaderScreen;

import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../context/CartContext'; 
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cart, setCart } = useCart(); 
  const navigation = useNavigation();

  // Handle menu actions (Add to Favorites or Delete)
  const handleMenuAction = (action, item) => {
    if (action === 'Add to Favorites') {
      Alert.alert('Favorites', `${item.name} added to favorites!`);
    } else if (action === 'Delete') {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  };

  // Update item quantity
  const updateQuantity = (item, amount) => {
    const updatedItems = cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + amount > 0 ? cartItem.quantity + amount : 1 }
        : cartItem
    );
    setCart(updatedItems);
  };

  // Calculate total amount based on updated quantity and price
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Render each item in the cart
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemInfo}>Color: {item.color}  Size: {item.size}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>₹{(item.price * item.quantity).toFixed(2)}</Text>
      <TouchableOpacity onPress={() => showMenu(item)} style={styles.menuButton}>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  // Show action menu
  const showMenu = (item) => {
    Alert.alert(
      'Options',
      'Select an action',
      [
        { text: 'Add to Favorites', onPress: () => handleMenuAction('Add to Favorites', item) },
        { text: 'Delete', onPress: () => handleMenuAction('Delete', item) },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Medicine</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.promoCodeContainer}>
        <TextInput placeholder="Enter your promo code" style={styles.promoCodeInput} />
        <TouchableOpacity style={styles.promoCodeButton}>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total amount:</Text>
        <Text style={styles.totalAmountValue}>₹{totalAmount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14, // Reduced font size for medicine name
    fontWeight: 'bold',
  },
  itemInfo: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F358F',
    padding: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    marginLeft: 10,
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  promoCodeInput: {
    flex: 1,
    fontSize: 16,
  },
  promoCodeButton: {
    backgroundColor: '#FF6F61',
    padding: 10,
    borderRadius: 10,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmountValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F358F',
  },
  checkoutButton: {
    backgroundColor: '#140f1f',
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    height: 50, 
    justifyContent: 'center', 
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CartScreen;

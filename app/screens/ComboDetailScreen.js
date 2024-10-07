import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useCart} from '../context/CartContext'; // Import the useCart hook
import {Colors, ComponentStyles} from '../components/Theme';

const screenWidth = Dimensions.get('window').width;

const ComboDetailScreen = ({route, navigation}) => {
  const {product} = route.params;
  const {addToCart, cartItems} = useCart();

  const productPairs = [];
  for (let i = 0; i < product.medicine.length; i += 2) {
    productPairs.push(product.medicine.slice(i, i + 2));
  }

  // Function to parse price strings and remove currency symbols
  const parsePrice = priceString => {
    const parsedPrice = parseFloat(priceString.replace(/[₹\s$]/g, ''));
    return isNaN(parsedPrice) ? 0 : parsedPrice; // Return 0 if parsing fails
  };

  const productPrice = parsePrice(product.price);
  const originalPrice = parsePrice(product.originalPrice);
  const discount = parseFloat(product.discount) || 0;

  // Check if the product is already in the cart
  const isProductInCart = () => {
    return cartItems ? cartItems.find(item => item.id === product.id) : null;
  };

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    const existingProduct = isProductInCart();

    if (existingProduct) {
      const updatedQuantity = (existingProduct.quantity || 0) + 1;
      addToCart({...existingProduct, quantity: updatedQuantity});
      alert('Quantity increased for this item in the cart.');
    } else {
      const productToAdd = {...product, quantity: 1, price: productPrice}; // Include parsed price
      addToCart(productToAdd);
      alert('Product added to cart successfully.');
    }
  };

  const renderProductPair = ({item}) => (
    <View style={styles.productPairContainer}>
      {item.map(product => (
        <TouchableOpacity
          key={product.id}
          style={styles.productCard}
          onPress={() => navigation.navigate('ProductDetail', {product})}>
          <Image
            source={{uri: product.images[0]}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>
              ${parsePrice(product.price).toFixed(2) || '0.00'}
            </Text>
            {product.originalPrice && (
              <>
                <Text style={styles.originalPrice}>
                  ${parsePrice(product.originalPrice).toFixed(2) || '0.00'}
                </Text>
                <Text style={styles.discount}>{product.discount}</Text>
              </>
            )}
          </View>
          <Text style={styles.reviews}>
            <Icon name="star" size={16} color="#f39c12" /> {product.rating} (
            {product.reviews} Reviews)
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: product.images[0]}}
        style={styles.productImageLarge}
      />

      <View style={styles.productDetailContainer}>
        <Text style={styles.productTitle}>{product.name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>${productPrice.toFixed(2)}</Text>
          {originalPrice > 0 && (
            <>
              <Text style={styles.originalPrice}>
                ${originalPrice.toFixed(2)}
              </Text>
              <Text style={styles.discount}>
                {discount > 0 ? `-${discount}%` : ''}
              </Text>
            </>
          )}
        </View>

        <Text style={styles.reviews}>
          <Icon name="star" size={16} color="#f39c12" /> {product.rating} (
          {product.reviews} Reviews)
        </Text>

        <Text style={styles.sectionHeader}>Product Description:</Text>
        <Text style={styles.productDescription}>
          {product.description || 'No description available.'}
        </Text>

        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.medicinesHeader}>Medicines in this Combo Pack:</Text>
      <FlatList
        data={productPairs}
        renderItem={renderProductPair}
        keyExtractor={(_, index) => index.toString()} // Use index for pair key
        contentContainerStyle={styles.medicineList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  productDetailContainer: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  productImageLarge: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  medicinesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  medicineList: {
    paddingBottom: 20,
  },
  productPairContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ComboDetailScreen;

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you are using FontAwesome for the star icon
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
} from '../Theme';  
import { Product } from './ProductType';  

interface ProductCardProps {
  product: Product; // Un-commented and using the correct type
  onCardPress: (product: Product) => void;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onCardPress,
  addToCart,
}) => {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => onCardPress(product)}
    >
      {/* <Image source={{ uri: product.images }} style={styles.productImage} /> */}
      
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>₹{product.price}</Text>
          <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
          <Text style={styles.discountPercent}>{discountPercent}% OFF</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Text style={styles.reviewText}>({product.reviews} reviews)</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          addToCart(product);
          Alert.alert('Success', `${product.name} added to cart!`);
        }}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    // Define your card styles here or use ComponentStyles
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: FontSizes.large,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  originalPrice: {
    fontSize: FontSizes.small,
    textDecorationLine: 'line-through',
    marginLeft: 10,
    color: Colors.primary,
  },
  discountPercent: {
    fontSize: FontSizes.small,
    color: Colors.success,
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: FontSizes.small,
    color: Colors.primary,
    marginLeft: 5,
  },
  reviewText: {
    fontSize: FontSizes.small,
    color: Colors.primary,
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontSize: FontSizes.medium,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;

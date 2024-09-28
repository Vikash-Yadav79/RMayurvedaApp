import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming React Navigation is used
import { Colors, FontSizes, FontFamily, ComponentStyles, ComboCommonStyles } from '../components/Theme'

const BestSellerRelatedProduct = ({ products }) => {
  const navigation = useNavigation();

  const defaultProducts = [
    {
      id: '1',
      name: 'Biotin Hair Gummies (30N) No Sugar',
      price: '₹499',
      originalPrice: '₹599',
      discount: '16% OFF',
      rating: 4.5,
      images: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
      reviews: 2488,
    },
    {
      id: '2',
      name: 'Anti Hair Fall Shampoo (200ml)',
      price: '₹399',
      originalPrice: '₹499',
      discount: '20% OFF',
      rating: 4.2,
      images: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
      reviews: 786,
    },
    {
      id: '3',
      name: 'Stage 2 Hair Regrowth Kit',
      price: '₹899',
      originalPrice: '₹999',
      discount: '10% OFF',
      rating: 4.8,
      images: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
      reviews: 912,
    },
    {
        id: '4',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹499',
        discount: '20% OFF',
        rating: 4.2,
        images: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        reviews: 786,
      },
      {
        id: '5',
        name: 'Stage 2 Hair Regrowth Kit',
        price: '₹899',
        originalPrice: '₹999',
        discount: '10% OFF',
        rating: 4.8,
        images: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        reviews: 912,
      },
  ];

  const displayProducts = products && products.length > 0 ? products : defaultProducts;

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <ScrollView style={styles.container}>
      {displayProducts.map((product, index) => (
        <TouchableOpacity key={index} onPress={() => handleProductPress(product)} style={styles.productCard}>
          {/* Product Image */}
          <Image
            source={{ uri: product.images }}
            style={styles.productImage}
            resizeMode="cover"
          />

          {/* Product Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.originalPrice}>{product.originalPrice}</Text>
              <Text style={styles.discount}>{product.discount}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.starSymbol}>★</Text>
              <Text style={styles.productRating}>{product.rating}</Text>
              <Text style={styles.productReviews}>{`(${product.reviews} Reviews)`}</Text>
            </View>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  
  infoContainer: {
    paddingVertical: 10,
  },
 
  
 
  
 
 
 


  addToCartButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    position: 'absolute', // Positioned absolutely within the card
    bottom: 15, // Distance from the bottom
    right: 15, // Distance from the right
    width: 100, // Fixed width for the button
  },

  productReviews:ComboCommonStyles.productReviews,
  productReviews:ComboCommonStyles.productReviews,
  productRating:ComboCommonStyles.productRating,
  starSymbol:ComboCommonStyles.starSymbol,
  ratingContainer:ComboCommonStyles.ratingContainer,
  addToCartButtonText:ComponentStyles.addButtonText,
  discount:ComboCommonStyles.discount,
  originalPrice:ComboCommonStyles.originalPrice,
  productPrice:ComboCommonStyles.productPrice,
  priceContainer:ComboCommonStyles.priceContainer,
  productName:ComboCommonStyles.productName,
  productImage:ComboCommonStyles.productImage,
  productCard:ComboCommonStyles.card,
//   container:ComboCommonStyles.container,
});

export default BestSellerRelatedProduct;

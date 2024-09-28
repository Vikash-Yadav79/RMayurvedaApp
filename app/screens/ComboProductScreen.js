import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get screen width to make the product card responsive

import { Colors, FontSizes, FontFamily, ComponentStyles,screenWidth, ComboCommonStyles } from '../components/Theme'
import ProductCard from '../components/types/ProductCard'

const products = [
  {
    id: '1',
    name: 'Biotin Hair Gummies (30N) No Sugar',
    price: '₹499',
    originalPrice: '₹599',
    discount: '16% OFF',
    rating: 4.5,
    image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    reviews: 2488,
    medicine:[ {
            id: '5',
            name: 'Anti Hair Fall Shampoo (200ml)',
            price: '₹399',
            originalPrice: '₹599',
            discount: '16% OFF',
            rating: 4.5,
            image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
            reviews: 786,
          }, {
            id: '6',
            name: 'Anti Hair Fall Shampoo (200ml)',
            price: '₹399',
            originalPrice: '₹599',
            discount: '16% OFF',
            rating: 4.5,
            image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
            reviews: 786,
          }, {
            id: '7',
            name: 'Vitamin C Serum',
            price: '₹399',
            originalPrice: '₹599',
            discount: '16% OFF',
            rating: 4.5,
            image: 'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
            reviews: 500,
          }, {
            id: '8',
            name: 'Stage 2 Hair Regrowth Kit',
            price: '₹899',
            originalPrice: '₹599',
            discount: '16% OFF',
            rating: 4.5,
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
            reviews: 912,
          },]
  },
  {
    id: '2',
    name: 'Anti Hair Fall Shampoo (200ml)',
    price: '₹399',
    originalPrice: '₹499',
    discount: '20% OFF',
    rating: 4.2,
    image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    reviews: 786,
  },
  {
    id: '3',
    name: 'Stage 2 Hair Regrowth Kit',
    price: '₹899',
    originalPrice: '₹999',
    discount: '10% OFF',
    rating: 4.8,
    image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    reviews: 912,
  },
  // Add more products as needed...
];

// const ProductCard = ({ product, onPress }) => (
//   <TouchableOpacity style={styles.card} onPress={onPress}>
//     <Image source={{ uri: product.image }} style={styles.productImage} />
//     <Text style={styles.productName}>{product.name}</Text>
//     <View style={styles.priceContainer}>
//       <Text style={styles.productPrice}>{product.price}</Text>
//       <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//       <Text style={styles.discount}>{product.discount}</Text>
//     </View>
//     <View style={styles.ratingContainer}>
//       <Text style={styles.starSymbol}>★</Text>
//       <Text style={styles.productRating}>{product.rating}</Text>
//       <Text style={styles.productReviews}>{` (${product.reviews} Reviews)`}</Text>
//     </View>
//   </TouchableOpacity>
// );
 
  // Handle card press action
  const handleCardPress = (product) => {
    Alert.alert('Product Selected', `You selected ${product.name}`);
  };

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    // You can integrate with your CartContext here
    console.log(`${product.name} added to the cart`);
    // You can call your addToCart function from CartContext here if needed
  };
const ComboProductScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ComboDetail', { product });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Bestsellers section */}
        <View style={styles.bestsellerHeader}>
          <Text style={styles.sectionTitle}>Bestsellers Combo</Text>
          <TouchableOpacity onPress={() => navigation.navigate('BestSellerRelatedProduct')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Full-Width Product Carousel */}
        <FlatList
          data={products}
          renderItem={({ item }) => (
             <ProductCard
          key={item.id}
          product={item}
          onCardPress={handleCardPress}
          addToCart={handleAddToCart}
        />
            // <ProductCard product={item} onPress={() => handleProductPress(item)} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={screenWidth * 0.8} // Snap to a fraction of the width
          contentContainerStyle={styles.productList}
          style={styles.carousel}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 ...ComboCommonStyles
});

export default ComboProductScreen;

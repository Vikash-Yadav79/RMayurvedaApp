// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const screenWidth = Dimensions.get('window').width;

// const ComboDetailScreen = ({ route, navigation }) => {
//   const { product } = route.params;

//   // Create pairs of medicines to display side by side
//   const productPairs = [];
//   for (let i = 0; i < product.medicine.length; i += 2) {
//     productPairs.push(product.medicine.slice(i, i + 2));
//   }

//   // Render a pair of products (for horizontal display)
//   const renderProductPair = ({ item }) => (
//     <View style={styles.productPair}>
//       {item.map((subItem) => (
//         <TouchableOpacity
//           key={subItem.id}
//           style={styles.productCard}
//           onPress={() => navigation.navigate('ProductListDetails', { product: subItem })}
//         >
//           <Image source={{ uri: subItem.image }} style={styles.productImage} />
//           <Text style={styles.productName}>{subItem.name}</Text>
//           <View style={styles.priceRow}>
//             <Text style={styles.productPrice}>{subItem.price}</Text>
//             <Text style={styles.originalPrice}>{subItem.originalPrice}</Text>
//             <Text style={styles.discount}>{subItem.discount}</Text>
//           </View>
//           <Text style={styles.reviews}>
//             <Icon name="star" size={16} color="#f39c12" /> {subItem.rating} | {subItem.reviews} Reviews
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Product Image */}
//       <Image source={{ uri: product.image }} style={styles.productImageLarge} />

//       {/* Product Details Section */}
//       <View style={styles.productDetailContainer}>
//         <Text style={styles.productTitle}>{product.name}</Text>

//         {/* Price and Discount Section */}
//         <View style={styles.priceRow}>
//           <Text style={styles.productPrice}>{product.price}</Text>
//           {product.originalPrice && (
//             <>
//               <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//               <Text style={styles.discount}>{product.discount}</Text>
//             </>
//           )}
//         </View>

//         {/* Product Reviews */}
//         <Text style={styles.reviews}>
//           <Icon name="star" size={16} color="#f39c12" /> {product.rating} | {product.reviews} Reviews
//         </Text>

//         {/* Product Description */}
//         <Text style={styles.sectionHeader}>Product Description:</Text>
//         <Text style={styles.productDescription}>{product.description || 'No description available.'}</Text>

//         {/* Add to Cart Button */}
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Medicines in this Combo Section */}
//       <Text style={styles.medicinesHeader}>Medicines in this Combo Pack:</Text>
//       <FlatList
//         data={productPairs}
//         renderItem={renderProductPair}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.medicineList}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
//   productDetailContainer: {
//     marginBottom: 20,
//     paddingHorizontal: 8,
//   },
//   productImageLarge: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   productTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
//   priceRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   productPrice: {
//     fontSize: 20,
//     color: '#e74c3c',
//     fontWeight: 'bold',
//     marginRight: 8,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 8,
//   },
//   discount: {
//     fontSize: 16,
//     color: '#27ae60',
//   },
//   reviews: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 10,
//   },
//   addToCartButton: {
//     backgroundColor: '#140f1f',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   addToCartText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   medicinesHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginVertical: 20,
//   },
//   medicineList: {
//     paddingBottom: 20,
//   },
//   productPair: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   productCard: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     width: screenWidth / 2 - 32,
//   },
//   productImage: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   productDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//     marginBottom: 20,
//   },
// });

// export default ComboDetailScreen;



import React from 'react';
import { ScrollView, Alert } from 'react-native';
import ProductCard from '../components/types/ProductCard'

// Example product data
const products = [
  {
    id: 1,
    name: 'Ayurvedic Herbal Tea',
    price: 299,
    originalPrice: 499,
    images: 'https://example.com/product1.jpg',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Natural Aloe Vera Gel',
    price: 199,
    originalPrice: 299,
    images: 'https://example.com/product2.jpg',
    rating: 4.8,
    reviews: 50,
  },
  // Add more products as needed
];

const ProductList = () => {
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

  return (
    <ScrollView>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCardPress={handleCardPress}
          addToCart={handleAddToCart}
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;


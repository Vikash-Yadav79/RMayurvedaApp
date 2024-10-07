// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useCart} from '../context/CartContext'; // Import useCart hook
// import {ComponentStyles, ComboCommonStyles} from '../components/Theme';
// import {ComboProductData} from '../product/FakeProductData';

// const BestSellerRelatedProduct = ({products}) => {
//   const navigation = useNavigation();
//   const {addToCart} = useCart(); // Get the addToCart function from CartContext

//   const displayProducts =
//     products && products.length > 0 ? products : ComboProductData;

//   const handleProductPress = product => {
//     navigation.navigate('ComboDetail', {product});
//   };

//   const handleAddToCart = product => {
//     addToCart(product); // Call the addToCart function
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {displayProducts.map((product, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => handleProductPress(product)}
//           style={styles.productCard}>
//           {/* Product Image */}
//           <Image
//             source={{uri: product.images[0]}}
//             style={styles.productImage}
//             resizeMode="cover"
//           />

//           {/* Product Info */}
//           <View style={styles.infoContainer}>
//             <Text style={styles.productName}>{product.name}</Text>
//             <View style={styles.priceContainer}>
//               <Text style={styles.productPrice}>{product.price}</Text>
//               <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//               <Text style={styles.discount}>{product.discount}% OFF</Text>
//             </View>
//             <View style={styles.ratingContainer}>
//               <Text style={styles.starSymbol}>★</Text>
//               <Text style={styles.productRating}>{product.rating}</Text>
//               <Text
//                 style={
//                   styles.productReviews
//                 }>{`(${product.reviews} Reviews)`}</Text>
//             </View>
//           </View>

//           {/* Add to Cart Button */}
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => handleAddToCart(product)} // Add to cart when pressed
//           >
//             <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//           </TouchableOpacity>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   ...ComboCommonStyles,
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F9F9',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },

//   infoContainer: {
//     paddingVertical: 10,
//   },

//   productReviews: ComboCommonStyles.productReviews,
//   productRating: ComboCommonStyles.productRating,
//   starSymbol: ComboCommonStyles.starSymbol,
//   ratingContainer: ComboCommonStyles.ratingContainer,
//   addToCartButtonText: ComponentStyles.addButtonText,
//   discount: ComboCommonStyles.discount,
//   originalPrice: ComboCommonStyles.originalPrice,
//   productPrice: ComboCommonStyles.productPrice,
//   priceContainer: ComboCommonStyles.priceContainer,
//   productName: ComboCommonStyles.productName,
//   productImage: ComboCommonStyles.productImage,
//   productCard: ComboCommonStyles.card,
// });

// export default BestSellerRelatedProduct;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../context/CartContext'; // Import useCart hook
import {ComponentStyles, ComboCommonStyles} from '../components/Theme';
import {ComboProductData} from '../product/FakeProductData';

// Helper function to clean and parse price strings
const cleanPrice = price => {
  if (typeof price !== 'string') return '0'; // Return '0' if price is not a string
  return price.replace(/[^0-9.-]+/g, ''); // Remove any non-numeric characters except for dot (.) and minus sign (-)
};

const BestSellerRelatedProduct = ({products}) => {
  const navigation = useNavigation();
  const {addToCart} = useCart(); // Get the addToCart function from CartContext

  // Use products if provided, otherwise fallback to ComboProductData
  const displayProducts =
    products && products.length > 0 ? products : ComboProductData;

  // Handle product press to navigate to ComboDetail screen
  const handleProductPress = product => {
    navigation.navigate('ComboDetail', {product});
  };

  // Handle adding a product to the cart
  const handleAddToCart = product => {
    // Clean and parse the price and originalPrice values
    const cleanedPrice = parseFloat(cleanPrice(product.price));
    const cleanedOriginalPrice = parseFloat(cleanPrice(product.originalPrice));

    // Check if cleaned prices are valid numbers before adding to the cart
    if (isNaN(cleanedPrice) || isNaN(cleanedOriginalPrice)) {
      console.error(
        'Invalid price or original price:',
        product.price,
        product.originalPrice,
      );
      return;
    }

    // Create a new product object with cleaned and parsed values
    const parsedProduct = {
      ...product,
      price: cleanedPrice,
      originalPrice: cleanedOriginalPrice,
    };

    // Add the product to the cart
    addToCart(parsedProduct);
    console.log('Product added to cart:', parsedProduct);
  };

  return (
    <ScrollView style={styles.container}>
      {displayProducts.map((product, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleProductPress(product)}
          style={styles.productCard}>
          {/* Product Image */}
          <Image
            source={{uri: product.images[0]}}
            style={styles.productImage}
            resizeMode="cover"
          />

          {/* Product Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>{`₹${parseFloat(
                cleanPrice(product.price),
              )}`}</Text>
              <Text style={styles.originalPrice}>{`₹${parseFloat(
                cleanPrice(product.originalPrice),
              )}`}</Text>
              <Text style={styles.discount}>{`${product.discount}% OFF`}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.starSymbol}>★</Text>
              <Text style={styles.productRating}>{product.rating}</Text>
              <Text
                style={
                  styles.productReviews
                }>{`(${product.reviews} Reviews)`}</Text>
            </View>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(product)} // Add to cart when pressed
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComboCommonStyles,
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  infoContainer: {
    paddingVertical: 10,
  },

  productReviews: ComboCommonStyles.productReviews,
  productRating: ComboCommonStyles.productRating,
  starSymbol: ComboCommonStyles.starSymbol,
  ratingContainer: ComboCommonStyles.ratingContainer,
  addToCartButtonText: ComponentStyles.addButtonText,
  discount: ComboCommonStyles.discount,
  originalPrice: ComboCommonStyles.originalPrice,
  productPrice: ComboCommonStyles.productPrice,
  priceContainer: ComboCommonStyles.priceContainer,
  productName: ComboCommonStyles.productName,
  productImage: ComboCommonStyles.productImage,
  productCard: ComboCommonStyles.card,
});

export default BestSellerRelatedProduct;

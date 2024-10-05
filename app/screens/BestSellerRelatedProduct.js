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
import {ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LargeCard from '../productCards/LargeCard';
import {useCart} from '../context/CartContext';
import {ComboCommonStyles, ComponentStyles} from '../components/Theme';
import {ComboProductData} from '../product/FakeProductData';

const BestSellerRelatedProduct = ({products}) => {
  const navigation = useNavigation();
  const {addToCart} = useCart(); // Get the addToCart function from CartContext

  const displayProducts =
    products && products.length > 0 ? products : ComboProductData;

  const handleProductPress = product => {
    navigation.navigate('ComboDetail', {product});
  };

  const handleAddToCart = product => {
    addToCart(product); // Call the addToCart function
  };

  return (
    <ScrollView style={styles.container}>
      {displayProducts.map((product, index) => (
        <LargeCard
          key={index}
          imageUrl={product.images[0]}
          title={product.name}
          price={`${product.price}`} // Format the price
          originalPrice={`${product.originalPrice}`} // Format the original price
          discount={`${product.discount}% OFF`} // Format the discount
          rating={product.rating}
          reviews={product.reviews}
          buttonText="Add to Cart"
          onPress={() => handleProductPress(product)} // Navigate to the product detail
          onAddToCart={() => handleAddToCart(product)} // Call addToCart function
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComboCommonStyles,
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },

  // infoContainer: {
  //   paddingVertical: 10,
  // },

  // productReviews: ComboCommonStyles.productReviews,
  // productRating: ComboCommonStyles.productRating,
  // starSymbol: ComboCommonStyles.starSymbol,
  // ratingContainer: ComboCommonStyles.ratingContainer,
  // addToCartButtonText: ComponentStyles.addButtonText,
  // discount: ComboCommonStyles.discount,
  // originalPrice: ComboCommonStyles.originalPrice,
  // productPrice: ComboCommonStyles.productPrice,
  // priceContainer: ComboCommonStyles.priceContainer,
  // productName: ComboCommonStyles.productName,
  // productImage: ComboCommonStyles.productImage,
  // productCard: ComboCommonStyles.card,
});

export default BestSellerRelatedProduct;

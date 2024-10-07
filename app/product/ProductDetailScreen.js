// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {Colors, ComboCommonStyles, ComponentStyles} from '../components/Theme';

// const ProductDetailScreen = ({route}) => {
//   const {product} = route.params;
//   console.log('product', product);

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{uri: product.images[0]}} style={styles.productImage} />
//       <Text style={styles.productName}>{product.name}</Text>
//       <View style={styles.priceContainer}>
//         <Text style={styles.productPrice}>₹{product.price}</Text>
//         {/* <Text style={styles.originalPrice}>{product.originalPrice}</Text> */}
//         {/* <Text style={styles.discount}>{product.discount}</Text> */}
//       </View>
//       <View style={styles.ratingContainer}>
//         <Text style={styles.starSymbol}>★</Text>
//         <Text style={styles.productRating}>{product.rating}</Text>
//         <Text style={styles.productReviews}>
//           {` (${product.reviews} Reviews)`}
//         </Text>
//       </View>
//       {/* <TouchableOpacity style={styles.addToCartButton}>
//         <Text style={styles.addButtonText}>Add to Cart</Text>
//       </TouchableOpacity> */}

//       {/* Product Summary */}
//       <Text style={styles.sectionTitle}>Product Summary</Text>
//       {[
//         'Clinically tested for efficacy.',
//         'Suitable for all hair types.',
//         'Contains natural ingredients.',
//         'No side effects reported.',
//         'Results visible in 8 weeks.',
//       ].map((point, index) => (
//         <Text key={index} style={styles.summaryPoint}>
//           {index + 1}. {point}
//         </Text>
//       ))}

//       {/* How to Use Section */}
//       <Text style={styles.sectionTitle}>How to Use</Text>
//       <Text style={styles.subHeading}>Dosage</Text>
//       {[
//         'Apply 2-3 times a week.',
//         'Use on clean, dry hair.',
//         'Massage gently into the scalp.',
//         'Leave for 30 minutes before washing.',
//         'Follow with a mild shampoo.',
//       ].map((point, index) => (
//         <Text key={index} style={styles.dosagePoint}>
//           {index + 1}. {point}
//         </Text>
//       ))}

//       <Text style={styles.subHeading}>Precautions</Text>
//       {[
//         'For external use only.',
//         'Avoid contact with eyes.',
//         'Keep out of reach of children.',
//         'Discontinue use if irritation occurs.',
//         'Consult a doctor if allergic.',
//       ].map((point, index) => (
//         <Text key={index} style={styles.dosagePoint}>
//           {index + 1}. {point}
//         </Text>
//       ))}

//       {/* Rating and Reviews Section */}
//       <Text style={styles.sectionTitle}>Rating and Reviews</Text>
//       {[
//         '⭐️⭐️⭐️⭐️☆ "This product really works wonders!" - User A',
//         '⭐️⭐️⭐️⭐️⭐️ "I\'ve seen great results after a month!" - User B',
//         '⭐️⭐️⭐️☆☆ "Good but could be improved." - User C',
//       ].map((review, index) => (
//         <Text key={index} style={styles.review}>
//           {review}
//         </Text>
//       ))}

//       {/* Common Questions and Answers Section */}
//       <Text style={styles.sectionTitle}>Common Questions</Text>
//       <Text style={styles.question}>
//         Q: How long does it take to see results?
//       </Text>
//       <Text style={styles.answer}>
//         A: Most users see results in about 8 weeks.
//       </Text>
//       <Text style={styles.question}>
//         Q: Is this product suitable for all hair types?
//       </Text>
//       <Text style={styles.answer}>
//         A: Yes, it is formulated for all hair types.
//       </Text>

//       {/* Buy and Add to Cart Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             /* Handle Buy action */
//           }}>
//           <Text style={styles.buttonText}>Buy Now</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             /* Handle Add to Cart action */
//           }}>
//           <Text style={styles.addButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   ...ComponentStyles,
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
//   productImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 8,
//     color: '#140F1F',
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#140F1F',
//   },
//   originalPrice: {
//     fontSize: 14,
//     textDecorationLine: 'line-through',
//     color: '#7f8c8d',
//     marginLeft: 5,
//   },
//   // discount: {
//   //   fontSize: 14,
//   //   color: 'red',
//   //   marginLeft: -50,
//   // },
//   // ratingContainer: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   marginBottom: 10,
//   // },
//   starSymbol: {
//     fontSize: 16,
//     color: '#FFD700',
//   },
//   productRating: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   productReviews: {
//     fontSize: 14,
//     marginLeft: 5,
//     color: '#7f8c8d',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 20,
//     color: '#140F1F',
//   },
//   summaryPoint: {
//     fontSize: 14,
//     marginVertical: 5,
//     marginLeft: 10,
//   },
//   subHeading: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   dosagePoint: {
//     fontSize: 14,
//     marginVertical: 5,
//     marginLeft: 20,
//   },
//   question: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   answer: {
//     fontSize: 14,
//     marginVertical: 5,
//     marginLeft: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   button: {
//     flex: 1,
//     backgroundColor: '#FEDB71',
//     padding: 15,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#140F1F',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default ProductDetailScreen;

// ProductDetailScreen.js

import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useCart} from '../context/CartContext'; // Import the useCart hook
import {Colors, ComboCommonStyles, ComponentStyles} from '../components/Theme';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const {addToCart} = useCart(); // Access the addToCart function from the context

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: product.images[0]}} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>₹{product.price}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.starSymbol}>★</Text>
        <Text style={styles.productRating}>{product.rating}</Text>
        <Text style={styles.productReviews}>
          {` (${product.reviews} Reviews)`}
        </Text>
      </View>

      {/* Product Summary */}
      <Text style={styles.sectionTitle}>Product Summary</Text>
      {[
        'Clinically tested for efficacy.',
        'Suitable for all hair types.',
        'Contains natural ingredients.',
        'No side effects reported.',
        'Results visible in 8 weeks.',
      ].map((point, index) => (
        <Text key={index} style={styles.summaryPoint}>
          {index + 1}. {point}
        </Text>
      ))}

      {/* How to Use Section */}
      <Text style={styles.sectionTitle}>How to Use</Text>
      <Text style={styles.subHeading}>Dosage</Text>
      {[
        'Apply 2-3 times a week.',
        'Use on clean, dry hair.',
        'Massage gently into the scalp.',
        'Leave for 30 minutes before washing.',
        'Follow with a mild shampoo.',
      ].map((point, index) => (
        <Text key={index} style={styles.dosagePoint}>
          {index + 1}. {point}
        </Text>
      ))}

      <Text style={styles.subHeading}>Precautions</Text>
      {[
        'For external use only.',
        'Avoid contact with eyes.',
        'Keep out of reach of children.',
        'Discontinue use if irritation occurs.',
        'Consult a doctor if allergic.',
      ].map((point, index) => (
        <Text key={index} style={styles.dosagePoint}>
          {index + 1}. {point}
        </Text>
      ))}

      {/* Rating and Reviews Section */}
      <Text style={styles.sectionTitle}>Rating and Reviews</Text>
      {[
        '⭐️⭐️⭐️⭐️☆ "This product really works wonders!" - User A',
        '⭐️⭐️⭐️⭐️⭐️ "I\'ve seen great results after a month!" - User B',
        '⭐️⭐️⭐️☆☆ "Good but could be improved." - User C',
      ].map((review, index) => (
        <Text key={index} style={styles.review}>
          {review}
        </Text>
      ))}

      {/* Common Questions and Answers Section */}
      <Text style={styles.sectionTitle}>Common Questions</Text>
      <Text style={styles.question}>
        Q: How long does it take to see results?
      </Text>
      <Text style={styles.answer}>
        A: Most users see results in about 8 weeks.
      </Text>
      <Text style={styles.question}>
        Q: Is this product suitable for all hair types?
      </Text>
      <Text style={styles.answer}>
        A: Yes, it is formulated for all hair types.
      </Text>

      {/* Buy and Add to Cart Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Handle Buy action */
          }}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#140F1F',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  // productPrice: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#140F1F',
  // },
  // originalPrice: {
  //   fontSize: 14,
  //   textDecorationLine: 'line-through',
  //   color: '#7f8c8d',
  //   marginLeft: 5,
  // },
  starSymbol: {
    fontSize: 16,
    color: '#FFD700',
  },
  productRating: {
    fontSize: 16,
    marginLeft: 5,
  },
  productReviews: {
    fontSize: 14,
    marginLeft: 5,
    color: '#7f8c8d',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#140F1F',
  },
  summaryPoint: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 10,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dosagePoint: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 20,
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  answer: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  addButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;

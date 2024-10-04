// import React from 'react';
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import {ComponentStyles} from '../components/Theme';

// const SmallCard = ({
//   imageUrl,
//   title,
//   price,
//   originalPrice,
//   discount,
//   rating,
//   reviews,
//   onPress,
// }) => {
//   return (
//     <TouchableOpacity style={styles.productCard} onPress={onPress}>
//       <Image source={{uri: imageUrl}} style={styles.productImage} />
//       <View style={styles.productInfo}>
//         <Text style={styles.productName}>{title}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.productPrice}>{price}</Text>
//           <Text style={styles.originalPrice}>{originalPrice}</Text>
//           <Text style={styles.discountPercent}>({discount})</Text>
//         </View>
//         <View style={styles.ratingContainer}>
//           <Text style={styles.ratingText}>★ {rating}</Text>
//           <Text style={styles.reviewText}>({reviews} reviews)</Text>
//         </View>
//         <TouchableOpacity style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   ...ComponentStyles, // Assuming ComponentStyles contains your base styles
// });

// export default SmallCard;

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ComponentStyles} from '../components/Theme';

const SmallCard = ({
  imageUrl,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  onPress,
  onAddToCart, // New prop for handling add to cart
}) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{price}</Text>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
          <Text style={styles.discountPercent}>({discount})</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★ {rating}</Text>
          <Text style={styles.reviewText}>({reviews} reviews)</Text>
        </View>
        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles, // Assuming ComponentStyles contains your base styles
});

export default SmallCard;

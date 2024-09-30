// // LargeCard.js
// import React from 'react';
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// const LargeCard = ({
//   imageUrl,
//   title,
//   price,
//   originalPrice,
//   discount,
//   rating,
//   reviews,
//   onPress,
//   buttonText,
// }) => {
//   return (
//     <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
//       <Image source={{uri: imageUrl}} style={styles.productImage} />
//       <Text style={styles.productTitle}>{title}</Text>
//       <View style={styles.priceContainer}>
//         <Text style={styles.productPrice}>{price}</Text>
//         <Text style={styles.originalPrice}>{originalPrice}</Text>
//         <Text style={styles.discountPercent}>{discount}</Text>
//       </View>
//       <View style={styles.ratingContainer}>
//         <Text style={styles.ratingText}>★ {rating}</Text>
//         <Text style={styles.reviewText}>({reviews} reviews)</Text>
//       </View>
//       <TouchableOpacity style={styles.addButton} onPress={onPress}>
//         <Text style={styles.addButtonText}>{buttonText || 'Add to Cart'}</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: '48%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 5,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   productPrice: {
//     fontSize: 16,
//     color: 'green',
//   },
//   originalPrice: {
//     fontSize: 14,
//     textDecorationLine: 'line-through',
//     marginHorizontal: 5,
//     color: 'gray',
//   },
//   discountPercent: {
//     fontSize: 14,
//     color: 'red',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#ffa41b',
//   },
//   reviewText: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   addButton: {
//     backgroundColor: '#f0c14b',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   addButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#111',
//   },
// });

// export default LargeCard;

// BestSellerRelatedProduct.js
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Assuming React Navigation is used
import LargeCard from './LargeCard'; // Import the LargeCard component
import {productData} from '../product/FakeProductData';
import {ComponentStyles, ComboCommonStyles, Colors} from '../components/Theme';

const BestSellerRelatedProduct = ({products}) => {
  const navigation = useNavigation();
  const displayProducts =
    products && products.length > 0 ? products : productData;

  const handleProductPress = product => {
    navigation.navigate('ProductDetail', {product});
  };

  return (
    <ScrollView style={styles.container}>
      {displayProducts.map((product, index) => (
        <LargeCard
          key={index}
          imageUrl={product.images[0]}
          title={product.name}
          price={`₹${product.price}`}
          originalPrice={`₹${product.originalPrice}`}
          discount={`${product.discount}% OFF`}
          rating={product.rating}
          reviews={product.reviews}
          buttonText="Add to Cart"
          onPress={() => handleProductPress(product)}
        />
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
});

export default BestSellerRelatedProduct;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Assuming React Navigation is used
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
  ComboCommonStyles,
} from '../components/Theme';
import {productData} from '../product/FakeProductData';

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
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.originalPrice}>{product.originalPrice}</Text>
              <Text style={styles.discount}>{product.discount}</Text>
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
          <TouchableOpacity style={styles.addToCartButton}>
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
  //   container:ComboCommonStyles.container,
});

export default BestSellerRelatedProduct;

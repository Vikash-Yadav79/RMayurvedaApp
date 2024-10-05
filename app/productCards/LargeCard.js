import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ComboCommonStyles, ComponentStyles} from '../components/Theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LargeCard = ({
  imageUrl,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  onPress,
  buttonText,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountPercent}>{discount}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>★ {rating}</Text>
        <Text style={styles.reviewText}>({reviews} reviews)</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Text style={styles.addButtonText}>{buttonText || 'Add to Cart'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ...ComboCommonStyles,
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },

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
  cardContainer: {
    width: '94%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  // productImage: {
  //   width: '100%',
  //   height: 100,
  //   borderRadius: 10,
  //   marginBottom: 10,
  // },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginHorizontal: 5,
    color: 'gray',
  },
  discountPercent: {
    fontSize: 14,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#f0c14b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
});

export default LargeCard;

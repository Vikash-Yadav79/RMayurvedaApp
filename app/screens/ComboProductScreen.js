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
import {useNavigation} from '@react-navigation/native';
import {ComboProductData} from '../product/FakeProductData';

// Get screen width to make the product card responsive

import {Colors, screenWidth, ComboCommonStyles} from '../components/Theme';

const ProductCard = ({product, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{uri: product.images[0]}} style={styles.productImage} />
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
        style={styles.productReviews}>{` (${product.reviews} Reviews)`}</Text>
    </View>
    <TouchableOpacity style={styles.addToCartButton}>
      <Text style={styles.addButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const ComboProductScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = product => {
    navigation.navigate('ComboDetail', {product});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Bestsellers section */}
        <View style={styles.bestsellerHeader}>
          <Text style={styles.sectionTitle}>Bestsellers Combo</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BestSellerRelatedProduct')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Full-Width Product Carousel */}
        <FlatList
          data={ComboProductData}
          renderItem={({item}) => (
            <ProductCard
              product={item}
              onPress={() => handleProductPress(item)}
            />
          )}
          keyExtractor={item => item.id}
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
  addButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  ...ComboCommonStyles,
});

export default ComboProductScreen;

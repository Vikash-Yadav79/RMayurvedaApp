import React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SmallCard from '../productCards/SmallCard';
import {useCart} from '../context/CartContext'; // Import useCart hook
import {ComponentStyles} from '../components/Theme';
import {productData} from '../product/FakeProductData';

const RecentOrder = () => {
  const navigation = useNavigation();
  const {addToCart} = useCart(); // Get the addToCart function from CartContext

  const handleCardPress = item => {
    navigation.navigate('ProductDetail', {product: item});
  };

  const renderProduct = ({item}) => {
    const discountPercent = Math.round(
      ((item.originalPrice - item.price) / item.originalPrice) * 100,
    );

    return (
      <SmallCard
        imageUrl={item.images[0]}
        title={item.name}
        price={`₹${item.price}`}
        originalPrice={`₹${item.originalPrice}`}
        discount={`${discountPercent}% OFF`}
        rating={item.rating}
        reviews={item.reviews}
        onPress={() => handleCardPress(item)}
        onAddToCart={() => addToCart(item)} // Add to cart when the button is pressed
      />
    );
  };

  // Limit to the first 4 products
  const limitedProductData = productData.slice(0, 8);

  return (
    <ScrollView style={styles.container}>
      {/* Product List */}
      <FlatList
        data={limitedProductData}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default RecentOrder;

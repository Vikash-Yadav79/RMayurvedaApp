import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SmallCard from '../productCards/SmallCard';
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
} from '../components/Theme';
import {productData} from './FakeProductData';

const categories = [
  {name: 'All', url: 'https://example.com/all'},
  {name: 'Hair Fall', url: 'https://example.com/hair-fall'},
  {name: 'Dandruff', url: 'https://example.com/dandruff'},
  {name: 'Beard', url: 'https://example.com/beard'},
  {name: 'All', url: 'https://example.com/all'},
  {name: 'Hair Fall', url: 'https://example.com/hair-fall'},
  {name: 'Dandruff', url: 'https://example.com/dandruff'},
];

const ProductList = () => {
  const navigation = useNavigation();

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
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Category Buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => Linking.openURL(category.url)}>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Clinically Tested & Proven</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={productData}
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

  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.accent,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    elevation: 1,
  },
  categoryText: {
    fontFamily: FontFamily.primary,
    fontSize: FontSizes.small,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
  },
});

export default ProductList;

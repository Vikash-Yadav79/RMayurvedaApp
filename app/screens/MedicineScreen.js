import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../context/CartContext'; // Import CartContext
import SmallCard from '../productCards/SmallCard'; // Product card component
import {productData} from '../product/FakeProductData'; // Product data
import {ComponentStyles} from '../components/Theme'; // Styles from Theme

const MedicineScreen = () => {
  const [showAll, setShowAll] = useState(false);
  const {addToCart} = useCart(); // Extract addToCart from CartContext
  const navigation = useNavigation();

  // Handle navigation to product detail page
  const handleCardPress = item => {
    navigation.navigate('ProductDetail', {product: item, single: true});
  };

  // Handle rendering of each product
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
        onAddToCart={() => addToCart(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Medicines</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={showAll ? productData : productData.slice(0, 3)}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
});

export default MedicineScreen;

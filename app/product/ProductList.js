import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
} from '../components/Theme';

const products = [
  {
    id: 1,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '₹949',
    originalPrice: '₹1398',
    discount: '32% off',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 2,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '₹899',
    originalPrice: '₹1198',
    discount: '24% off',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
  {
    id: 3,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '₹949',
    originalPrice: '₹1398',
    discount: '32% off',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 4,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '₹899',
    originalPrice: '₹1198',
    discount: '24% off',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
  {
    id: 5,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '₹949',
    originalPrice: '₹1398',
    discount: '32% off',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 6,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '₹899',
    originalPrice: '₹1198',
    discount: '24% off',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
];

const categories = [
  {name: 'All', url: 'https://example.com/all'},
  {name: 'Hair Fall', url: 'https://example.com/hair-fall'},
  {name: 'Dandruff', url: 'https://example.com/dandruff'},
  {name: 'Beard', url: 'https://example.com/beard'},
  {name: 'All', url: 'https://example.com/all'},
  {name: 'Hair Fall', url: 'https://example.com/hair-fall'},
  {name: 'Dandruff', url: 'https://example.com/dandruff'},
  {name: 'Beard', url: 'https://example.com/beard'},
];

const ProductCard = ({product}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <Image
        source={{uri: product.images[0]}}
        style={styles.productImage}
        onError={() => console.error('Image failed to load')}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.originalPrice}>{product.originalPrice}</Text>
          <Text style={styles.discountPercent}>{product.discount}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color={Colors.starColor} />
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Text style={styles.reviewText}>| {product.reviews} Reviews</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const ProductList = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;

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
        data={products}
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
    backgroundColor: Colors.lightGray,
    borderRadius: 20, // Rounded corners for category button
    marginHorizontal: 5,
    alignItems: 'center', // Center the text inside the category button
    justifyContent: 'center', // Center vertically
    shadowColor: '#000',

    elevation: 2, // Adds shadow to the category cards for depth effect
  },
  categoryText: {
    fontFamily: FontFamily.primary,
    fontSize: FontSizes.small,
    fontWeight: 'bold',
    color: Colors.darkGray,
    textAlign: 'center', // Center the text horizontally
  },
  // subTitle: {
  //   fontSize: FontSizes.small,
  //   color: Colors.secondary,
  //   marginBottom: 15,
  // },
});

export default ProductList;

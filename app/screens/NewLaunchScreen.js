// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useCart} from '../context/CartContext';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {
//   Colors,
//   FontSizes,
//   FontFamily,
//   ComponentStyles,
// } from '../components/Theme';
// import {productData} from '../product/FakeProductData';

// const NewLaunchScreen = () => {
//   const [showAll, setShowAll] = useState(false);
//   const {addToCart} = useCart();
//   const navigation = useNavigation();

//   const handleCardPress = item => {
//     navigation.navigate('ProductDetail', {product: item});
//   };

//   const renderProduct = ({item}) => {
//     const discountPercent = Math.round(
//       ((item.originalPrice - item.price) / item.originalPrice) * 100,
//     );

//     return (
//       <TouchableOpacity
//         style={styles.productCard}
//         onPress={() => handleCardPress(item)}>
//         <Image source={{uri: item.images[0]}} style={styles.productImage} />
//         <View style={styles.productInfo}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <View style={styles.priceContainer}>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <Text style={styles.originalPrice}>{item.originalPrice}</Text>
//             <Text style={styles.discountPercent}>{item.discount}</Text>
//           </View>
//           <View style={styles.ratingContainer}>
//             <Icon name="star" size={16} color="#FFD700" />
//             <Text style={styles.ratingText}>{item.rating}</Text>
//             <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
//           </View>
//         </View>
//         <TouchableOpacity
//           style={styles.addButton}
//           onPress={() => {
//             addToCart(item);
//             Alert.alert('Success', `${item.name} added to cart!`);
//           }}>
//           <Text style={styles.addButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>New Launch Medicine</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Product')}>
//           <Text style={styles.viewAllText}>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={showAll ? productData : productData.slice(0, 4)}
//         renderItem={renderProduct}
//         keyExtractor={item => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.productList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ...ComponentStyles,
// });

// export default NewLaunchScreen;

import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../context/CartContext';
import SmallCard from '../productCards/SmallCard';
import {productData} from '../product/FakeProductData';
import {ComponentStyles} from '../components/Theme';

const NewLaunchScreen = () => {
  const [showAll, setShowAll] = useState(false);
  const {addToCart} = useCart();
  const navigation = useNavigation();

  const handleCardPress = item => {
    navigation.navigate('ProductDetail', {product: item});
  };

  const renderProduct = ({item}) => {
    const discountPercent = Math.round(
      ((+item.originalPrice - +item.price) / +item.originalPrice) * 100,
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>New Launch Medicine</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={showAll ? productData : productData.slice(0, 4)}
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

export default NewLaunchScreen;

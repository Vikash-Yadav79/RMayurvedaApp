// import React, {useState} from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useCart} from '../context/CartContext';
// import SmallCard from '../productCards/SmallCard';
// import {productData} from '../product/FakeProductData';
// import {ComponentStyles} from '../components/Theme';

// const NewLaunchScreen = () => {
//   const [showAll, setShowAll] = useState(false);
//   const {addToCart} = useCart();
//   const navigation = useNavigation();

//   const handleCardPress = item => {
//     navigation.navigate('ProductDetail', {product: item});
//   };

//   const renderProduct = ({item}) => {
//     const discountPercent = Math.round(
//       ((+item.originalPrice - +item.price) / +item.originalPrice) * 100,
//     );

//     return (
//       <SmallCard
//         imageUrl={item.images[0]}
//         title={item.name}
//         price={`₹${item.price}`}
//         originalPrice={`₹${item.originalPrice}`}
//         discount={`${discountPercent}% OFF`}
//         rating={item.rating}
//         reviews={item.reviews}
//         onPress={() => handleCardPress(item)}
//       />
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
  const {addToCart} = useCart(); // Get the addToCart function from CartContext
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
        onPress={() => handleCardPress(item)} // Navigate to product detail on card press
        onAddToCart={() => addToCart(item)} // Add to cart when "Add to Cart" button is pressed
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

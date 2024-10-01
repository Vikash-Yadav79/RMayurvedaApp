// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from '../context/CartContext';

// const medicineProducts = [
//   {
//     id: '1',
//     name: 'Ayurvedic Cough Syrup',
//     price: '₹299',
//     description: 'A soothing syrup for cough relief made with Ayurvedic herbs.',
//     images: [
//       'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       'https://cdn01.pharmeasy.in/dam/products_otc/H49807/kerala-ayurveda-gulguluthikthakam-kwath-200-ml-2-1703593592.jpg?dim=400x0&dpr=1&q=100',
//       'https://maharishiayurvedaindia.com/cdn/shop/files/kasni-ayurvedic-medicine-for-cough-and-cold-200ml-bottle-maharishi-ayurveda-india-1_1024x.jpg?v=1692185607',
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockup_1.png?v=1710228423&width=1946',
//       'https://mahaherbals.biz/public/uploads/product3/Blood%20Pressure%20Balance-.jpg',
//     ],
//   },
//   {
//     id: '2',
//     name: 'Herbal Pain Relief Oil',
//     price: '₹399',
//     description: 'A natural oil for effective pain relief using herbal ingredients.',
//     images: [
//       'https://5.imimg.com/data5/IK/XK/OU/SELLER-8711974/dabur-100-ml-bottle-cough-and-cold-ayurvedic-medicine.jpg',
//       'https://cdn01.pharmeasy.in/dam/products_otc/H49807/kerala-ayurveda-gulguluthikthakam-kwath-200-ml-2-1703593592.jpg?dim=400x0&dpr=1&q=100',
//       'https://maharishiayurvedaindia.com/cdn/shop/files/kasni-ayurvedic-medicine-for-cough-and-cold-200ml-bottle-maharishi-ayurveda-india-1_1024x.jpg?v=1692185607',
//       'https://mahaherbals.biz/public/uploads/product3/Blood%20Pressure%20Balance-.jpg',
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockup_1.png?v=1710228423&width=1946',
//     ],
//   },
//   {
//     id: '3',
//     name: 'Digestive Aid Tablets',
//     price: '₹199',
//     description: 'Tablets formulated to improve digestion and relieve bloating.',
//     images: [
//       'https://cdn01.pharmeasy.in/dam/products_otc/H49807/kerala-ayurveda-gulguluthikthakam-kwath-200-ml-2-1703593592.jpg?dim=400x0&dpr=1&q=100',
//       'https://maharishiayurvedaindia.com/cdn/shop/files/kasni-ayurvedic-medicine-for-cough-and-cold-200ml-bottle-maharishi-ayurveda-india-1_1024x.jpg?v=1692185607',
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockup_1.png?v=1710228423&width=1946',
//       'https://mahaherbals.biz/public/uploads/product3/Blood%20Pressure%20Balance-.jpg',
//       'https://rukminim2.flixcart.com/image/850/1000/xif0q/ayurvedic/r/w/f/blood-cleaner-anti-acne-ayurvedic-medicine-blood-purifier-for-original-imagz4ypbb2nz6hd.jpeg?q=90&crop=false',
//     ],
//   },
//   {
//     id: '4',
//     name: 'Immune Booster Gummies',
//     price: '₹599',
//     description: 'Delicious gummies packed with vitamins to boost your immune system.',
//     images: [
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockupprostpro.png?v=1710841877&width=1946',
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockup_1.png?v=1710228423&width=1946',
//       'https://mahaherbals.biz/public/uploads/product3/Blood%20Pressure%20Balance-.jpg',
//       'https://rukminim2.flixcart.com/image/850/1000/xif0q/ayurvedic/r/w/f/blood-cleaner-anti-acne-ayurvedic-medicine-blood-purifier-for-original-imagz4ypbb2nz6hd.jpeg?q=90&crop=false',
//       'https://maharishiayurvedaindia.com/cdn/shop/files/kasni-ayurvedic-medicine-for-cough-and-cold-200ml-bottle-maharishi-ayurveda-india-1_1024x.jpg?v=1692185607',
//     ],
//   },
//   {
//     id: '5',
//     name: 'Herbal Sleep Aid',
//     price: '₹499',
//     description: 'A blend of herbs designed to promote better sleep quality.',
//     images: [
//       'https://m.media-amazon.com/images/I/61fZV0t3rBL._AC_UL1000_.jpg',
//       'https://dharishahayurveda.com/cdn/shop/files/CapsuleTabletMockup_1.png?v=1710228423&width=1946',
//       'https://mahaherbals.biz/public/uploads/product3/Blood%20Pressure%20Balance-.jpg',
//       'https://rukminim2.flixcart.com/image/850/1000/xif0q/ayurvedic/r/w/f/blood-cleaner-anti-acne-ayurvedic-medicine-blood-purifier-for-original-imagz4ypbb2nz6hd.jpeg?q=90&crop=false',
//       'https://example.com/image21.jpg',
//     ],
//   },
// ];

// const MedicineScreen = () => {
//   const [showAll, setShowAll] = useState(false);
//   const { addToCart } = useCart();
//   const navigation = useNavigation();

//   const handleCardPress = (item) => {
//     navigation.navigate('ProductDetail', { product: item });
//   };

//   const renderProduct = ({ item }) => (
//     <TouchableOpacity style={styles.productCard} onPress={() => handleCardPress(item)}>
//       <Image source={{ uri: item.images[0] }} style={styles.productImage} />
//       <Text style={styles.productName}>{item.name}</Text>
//       <Text style={styles.productPrice}>{item.price}</Text>
//       <TouchableOpacity style={styles.addButton} onPress={() => {
//         addToCart(item);
//         Alert.alert('Success', `${item.name} added to cart!`);
//       }}>
//         <Text style={styles.addButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>Medicines</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Product')}>
//           <Text style={styles.viewAllText}>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={showAll ? medicineProducts : medicineProducts.slice(0, 3)}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.productList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,

//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 12,
//   },
//   viewAllText: {
//     color: '#4CAF50',
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   productList: {
//     paddingLeft: 15,
//   },
//   productCard: {
//     width: 120,
//     marginRight: 15,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     elevation: 2,
//     marginTop:2,
//     marginBottom:2
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginTop: 5,
//   },
//   productPrice: {
//     fontSize: 12,
//     color: '#777',
//     marginTop: 2,
//   },
//   addButton: {
//     marginTop: 10,
//     backgroundColor: '#140f1f',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default MedicineScreen;

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

// const MedicineScreen = () => {
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
//             <Text style={styles.discountPercent}>{item.discount}% OFF</Text>
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
//         <Text style={styles.heading}>Medicines</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Product')}>
//           <Text style={styles.viewAllText}>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={showAll ? productData : productData.slice(0, 3)}
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

// export default MedicineScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../context/CartContext';
import SmallCard from '../productCards/SmallCard';
import {productData} from '../product/FakeProductData';
import {ComponentStyles} from '../components/Theme';

const MedicineScreen = () => {
  const [showAll, setShowAll] = useState(false);
  const {addToCart} = useCart();
  const navigation = useNavigation();

  const handleCardPress = item => {
    navigation.navigate('ProductDetail', {product: item, single: true});
  };

  const renderProduct = ({item}) => {
    console.log('renderProduct', item);
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

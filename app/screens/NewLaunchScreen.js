

// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Colors, FontSizes, FontFamily, ComponentStyles } from '../components/Theme'

// const products = [
//   {
//     id: 1,
//     name: 'Stage 1 Hairloss Kit for Genetics',
//     price: '₹949',
//     originalPrice: '₹1398',
//     discount: '32% off',
//     rating: 4.5,
//     reviews: 475,
//     image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
//   },
//   {
//     id: 2,
//     name: 'Stage 2 Hair Regrowth Kit',
//     price: '₹899',
//     originalPrice: '₹1198',
//     discount: '24% off',
//     rating: 4.3,
//     reviews: 913,
//     image: 'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
//   },
//   {
//     id: 3,
//     name: 'Herbal Hair Treatment Kit',
//     price: '₹799',
//     originalPrice: '₹999',
//     discount: '20% off',
//     rating: 4.0,
//     reviews: 215,
//     image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
//   },
//   {
//     id: 4,
//     name: 'Advanced Hair Repair Serum',
//     price: '₹1299',
//     originalPrice: '₹1599',
//     discount: '19% off',
//     rating: 4.8,
//     reviews: 312,
//     image: 'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
//   },
// ];

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <View style={styles.productCard}>
//       <Image source={{ uri: product.image }} style={styles.productImage} />
//       <Text style={styles.productName}>{product.name}</Text>
//       <View style={styles.priceRow}>
//         <Text style={styles.productPrice}>{product.price}</Text>
//         <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//         <Text style={styles.discount}>{product.discount}</Text>
//       </View>
//       <Text style={styles.reviews}>
//         <Icon name="star" size={16} color="#f39c12" /> {product.rating} | {product.reviews} Reviews
//       </Text>
//       <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
//         <Text style={styles.addToCartText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const NewLaunchScreen = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.headerTitle}>New Launch</Text>
//       {/* Horizontal ScrollView for Products */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productScrollView}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </ScrollView>
//       {/* Optional: Display cart count */}
//       <Text style={styles.cartCount}>Items in Cart: {cart.length}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: -16,
//     marginBottom: 10,
//     color: 'black',
//   },
//   productScrollView: {
//     marginBottom: 20,
//   },
//   // productCard: {
//   //   backgroundColor: '#f9f9f9',
//   //   borderRadius: 10,
//   //   padding: 10,
//   //   marginRight: 10,
//   //   width: 180, // Adjust width for product card
//   //   elevation: 2, // Add shadow for Android
//   //   shadowColor: '#000', // Shadow for iOS
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 3,
//   // },
//   productImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   // productName: {
//   //   fontSize: 14,
//   //   fontWeight: 'bold',
//   //   marginBottom: 10,
//   // },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   // productPrice: {
//   //   fontSize: 12,
//   //   fontWeight: 'bold',
//   //   color: '#000',
//   // },
//   // originalPrice: {
//   //   fontSize: 12,
//   //   textDecorationLine: 'line-through',
//   //   marginLeft: 8,
//   //   color: '#888',
//   // },
//   discount: {
//     fontSize: 12,
//     color: '#27ae60',
//     marginLeft: 8,
//   },
//   // reviews: {
//   //   fontSize: 12,
//   //   color: '#888',
//   //   marginBottom: 10,
//   // },
//   addToCartButton: {
//     backgroundColor: '#140f1f',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   addToCartText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   cartCount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: '#27ae60',
//   },
//   productCard: ComponentStyles.productCard,
//   productName: ComponentStyles.productName,
//   addToCartButton: ComponentStyles.addButton,
//   productPrice:ComponentStyles.productPrice,
//   reviews:ComponentStyles.reviewText,
//   // discount:ComponentStyles.discount,
//   productImage:ComponentStyles.productImage,
//   reviewText:ComponentStyles.reviewText,
 
// });

// export default NewLaunchScreen;




import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSizes, FontFamily, ComponentStyles } from '../components/Theme'

const medicineProducts = [
  {
    id: '1',
    name: 'Ayurvedic Cough ',
    price: 299,
    originalPrice: 399,
    description: 'A soothing syrup for cough relief made with Ayurvedic herbs.',
    rating: 4.5,
    reviews: 112,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: '2',
    name: 'Herbal Pain Relief Oil',
    price: 399,
    originalPrice: 499,
    description: 'A natural oil for effective pain relief using herbal ingredients.',
    rating: 4.8,
    reviews: 85,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },

  {
    id: '3',
    name: 'Ayurvedic Cough Syrup',
    price: 299,
    originalPrice: 399,
    description: 'A soothing syrup for cough relief made with Ayurvedic herbs.',
    rating: 4.5,
    reviews: 112,
    images: [
      'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    ],
  },
  {
    id: '4',
    name: 'Herbal Pain Relief Oil',
    price: 399,
    originalPrice: 499,
    description: 'A natural oil for effective pain relief using herbal ingredients.',
    rating: 4.8,
    reviews: 85,
    images: [
      'https://5.imimg.com/data5/IK/XK/OU/SELLER-8711974/dabur-100-ml-bottle-cough-and-cold-ayurvedic-medicine.jpg',
    ],
  },
];

const NewLaunchScreen = () => {
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart(); 
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate('ProductDetail', { product: item });
  };

  const renderProduct = ({ item }) => {
    const discountPercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    
    return (
      <TouchableOpacity style={styles.productCard} onPress={() => handleCardPress(item)}>
        <Image source={{ uri: item.images[0] }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>₹{item.price}</Text>
            <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
            <Text style={styles.discountPercent}>{discountPercent}% OFF</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            addToCart(item);
            Alert.alert('Success', `${item.name} added to cart!`);
          }}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
        data={showAll ? medicineProducts : medicineProducts.slice(0, 4)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
  //  productCard: ComponentStyles.productCard,
  //   productName: ComponentStyles.productName,
  //   addButton: ComponentStyles.addButton,
  //   productPrice:ComponentStyles.productPrice,
  //   reviews:ComponentStyles.reviewText,
  //   discount:ComponentStyles.discount,
  //   productImage:ComponentStyles.productImage,
  //   ratingText:ComponentStyles.ratingText,
  //   reviewText:ComponentStyles.reviewText,
  //   addButtonText:ComponentStyles.addButtonText,
  //   ratingContainer:ComponentStyles.ratingContainer,
  //   discountPercent:ComponentStyles.discountPercent,
  //   originalPrice:ComponentStyles.originalPrice,
  //   priceContainer:ComponentStyles.priceContainer,
  //   productInfo:ComponentStyles.productInfo,
  //  productList:ComponentStyles.productList,
  //  viewAllText:ComponentStyles.viewAllText,
  //  heading:ComponentStyles.heading,
  //  header:ComponentStyles.header,
  //  container:ComponentStyles.container,
   
});

export default NewLaunchScreen;


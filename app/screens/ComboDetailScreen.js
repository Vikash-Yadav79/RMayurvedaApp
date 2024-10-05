// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {
//   Colors,
//   FontSizes,
//   FontFamily,
//   ComponentStyles,
// } from '../components/Theme';

// const screenWidth = Dimensions.get('window').width;

// const ComboDetailScreen = ({route, navigation}) => {
//   const {product} = route.params;

//   // Create pairs of medicines to display side by side
//   const productPairs = [];
//   for (let i = 0; i < product.medicine.length; i += 2) {
//     productPairs.push(product.medicine.slice(i, i + 2));
//   }

//   // Render a pair of products (for horizontal display)
//   const renderProductPair = ({item}) => (
//     <View style={styles.productPair}>
//       {item.map(subItem => (
//         <TouchableOpacity
//           key={subItem.id}
//           style={styles.productCard}
//           onPress={() =>
//             navigation.navigate('ProductDetail', {product: subItem})
//           }>
//           <Image
//             source={{uri: subItem.images[0]}}
//             style={styles.productImage}
//           />
//           <Text style={styles.productName}>{subItem.name}</Text>
//           <View style={styles.priceRow}>
//             <Text style={styles.productPrice}>{subItem.price}</Text>
//             <Text style={styles.originalPrice}>{subItem.originalPrice}</Text>
//             <Text style={styles.discount}>{subItem.discount}</Text>
//           </View>
//           <Text style={styles.reviews}>
//             <Icon name="star" size={16} color="#f39c12" /> {subItem.rating} (
//             {subItem.reviews} Reviews)
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Product Image */}
//       <Image
//         source={{uri: product.images[0]}}
//         style={styles.productImageLarge}
//       />

//       {/* Product Details Section */}
//       <View style={styles.productDetailContainer}>
//         <Text style={styles.productTitle}>{product.name}</Text>

//         {/* Price and Discount Section */}
//         <View style={styles.priceRow}>
//           <Text style={styles.productPrice}>{product.price}</Text>
//           {product.originalPrice && (
//             <>
//               <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//               <Text style={styles.discount}>{product.discount}</Text>
//             </>
//           )}
//         </View>

//         {/* Product Reviews */}
//         <Text style={styles.reviews}>
//           <Icon name="star" size={16} color="#f39c12" /> {product.rating} (
//           {product.reviews} Reviews)
//         </Text>

//         {/* Product Description */}
//         <Text style={styles.sectionHeader}>Product Description:</Text>
//         <Text style={styles.productDescription}>
//           {product.description || 'No description available.'}
//         </Text>

//         {/* Add to Cart Button */}
//         <TouchableOpacity style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Medicines in this Combo Section */}
//       <Text style={styles.medicinesHeader}>Medicines in this Combo Pack:</Text>
//       <FlatList
//         data={productPairs}
//         renderItem={renderProductPair}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.medicineList}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   ...ComponentStyles,
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
//   productDetailContainer: {
//     marginBottom: 20,
//     paddingHorizontal: 8,
//   },
//   productImageLarge: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },

//   priceRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginBottom: 8,
//   },

//   medicinesHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginVertical: 20,
//   },
//   medicineList: {
//     paddingBottom: 20,
//   },
//   productPair: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },

//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   productDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//     marginBottom: 20,
//   },
//   addButton: {
//     marginTop: 10,
//     backgroundColor: Colors.accent,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: Colors.text,
//     fontWeight: 'bold',
//   },
// });

// export default ComboDetailScreen;

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useCart} from '../context/CartContext'; // Import the useCart hook
import {Colors, ComponentStyles} from '../components/Theme';

const screenWidth = Dimensions.get('window').width;

const ComboDetailScreen = ({route, navigation}) => {
  const {product} = route.params;
  const {addToCart, cartItems} = useCart(); // Access addToCart and cartItems from CartContext

  // Create pairs of medicines to display side by side
  const productPairs = [];
  for (let i = 0; i < product.medicine.length; i += 2) {
    productPairs.push(product.medicine.slice(i, i + 2));
  }

  // Check if the product is already in the cart
  const isProductInCart = () => {
    return cartItems ? cartItems.find(item => item.id === product.id) : null;
  };

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    const existingProduct = isProductInCart();
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
      addToCart({...product, quantity: 1}); // Add new product with quantity 1
    }
  };

  // Render a pair of products (for horizontal display)
  const renderProductPair = ({item}) => (
    <View style={styles.productPair}>
      {item.map(subItem => (
        <TouchableOpacity
          key={subItem.id}
          style={styles.productCard}
          onPress={() =>
            navigation.navigate('ProductDetail', {product: subItem})
          }>
          <Image
            source={{uri: subItem.images[0]}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{subItem.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>{subItem.price}</Text>
            <Text style={styles.originalPrice}>{subItem.originalPrice}</Text>
            <Text style={styles.discount}>{subItem.discount}</Text>
          </View>
          <Text style={styles.reviews}>
            <Icon name="star" size={16} color="#f39c12" /> {subItem.rating} (
            {subItem.reviews} Reviews)
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      <Image
        source={{uri: product.images[0]}}
        style={styles.productImageLarge}
      />

      {/* Product Details Section */}
      <View style={styles.productDetailContainer}>
        <Text style={styles.productTitle}>{product.name}</Text>

        {/* Price and Discount Section */}
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{product.price}</Text>
          {product.originalPrice && (
            <>
              <Text style={styles.originalPrice}>{product.originalPrice}</Text>
              <Text style={styles.discount}>{product.discount}</Text>
            </>
          )}
        </View>

        {/* Product Reviews */}
        <Text style={styles.reviews}>
          <Icon name="star" size={16} color="#f39c12" /> {product.rating} (
          {product.reviews} Reviews)
        </Text>

        {/* Product Description */}
        <Text style={styles.sectionHeader}>Product Description:</Text>
        <Text style={styles.productDescription}>
          {product.description || 'No description available.'}
        </Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Medicines in this Combo Section */}
      <Text style={styles.medicinesHeader}>Medicines in this Combo Pack:</Text>
      <FlatList
        data={productPairs}
        renderItem={renderProductPair}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.medicineList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  productDetailContainer: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  productImageLarge: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  medicinesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  medicineList: {
    paddingBottom: 20,
  },
  productPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: Colors.accent,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  productCard: {
    width: screenWidth / 2 - 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    color: '#27ae60',
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
    color: '#888',
  },
  discount: {
    marginLeft: 5,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  reviews: {
    marginTop: 5,
    color: '#666',
  },
});

export default ComboDetailScreen;

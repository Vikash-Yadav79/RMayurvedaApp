// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
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
//     images:[ 'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg']
//   },
//   {
//     id: 2,
//     name: 'Stage 2 Hair Regrowth Kit',
//     price: '₹899',
//     originalPrice: '₹1198',
//     discount: '24% off',
//     rating: 4.3,
//     reviews: 913,
//     images:[ 'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg']
//   },
//   {
//         id: 3,
//         name: 'Stage 1 Hairloss Kit for Genetics',
//         price: '₹949',
//         originalPrice: '₹1398',
//         discount: '32% off',
//         rating: 4.5,
//         reviews: 475,
//         images: ['https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg']// Replace with actual image URL
//       },
//       {
//         id: 4,
//         name: 'Stage 2 Hair Regrowth Kit',
//         price: '₹899',
//         originalPrice: '₹1198',
//         discount: '24% off',
//         rating: 4.3,
//         reviews: 913,
//         images:[ 'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg']
//       },
//       {
//         id: 5,
//         name: 'Stage 1 Hairloss Kit for Genetics',
//         price: '₹949',
//         originalPrice: '₹1398',
//         discount: '32% off',
//         rating: 4.5,
//         reviews: 475,
//         images: ['https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg'] // Replace with actual image URL
//       },
//       {
//         id: 6,
//         name: 'Stage 2 Hair Regrowth Kit',
//         price: '₹899',
//         originalPrice: '₹1198',
//         discount: '24% off',
//         rating: 4.3,
//         reviews: 913,
//         images: ['https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg'] // Replace with actual image URL
//       },
//       {
//         id: 7,
//         name: 'Stage 1 Hairloss Kit for Genetics',
//         price: '₹949',
//         originalPrice: '₹1398',
//         discount: '32% off',
//         rating: 4.5,
//         reviews: 475,
//         images: ['https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg'] // Replace with actual image URL
//       },
//       {
//         id: 8,
//         name: 'Stage 2 Hair Regrowth Kit',
//         price: '₹899',
//         originalPrice: '₹1198',
//         discount: '24% off',
//         rating: 4.3,
//         reviews: 913,
//         images:[ 'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg']// Replace with actual image URL
//       },
// ];

// const categories = [
//   { name: "All", url: "https://example.com/all" },
//   { name: "Hair Fall", url: "https://example.com/hair-fall" },
//   { name: "Dandruff", url: "https://example.com/dandruff" },
//   { name: "Beard", url: "https://example.com/beard" },
//   { name: "All", url: "https://example.com/all" },
//   { name: "Hair Fall", url: "https://example.com/hair-fall" },
//   { name: "Dandruff", url: "https://example.com/dandruff" },
//   { name: "Beard", url: "https://example.com/beard"}
// ];
// const ProductCard = ({ product }) => {
//     const navigation = useNavigation();
  
//     return (
//       <TouchableOpacity
//         style={styles.productCard}
//         onPress={() => navigation.navigate('ProducDetails', { product })}
//       >
//         {/* Use the first image from the images array */}
//         <Image 
//           source={{ uri: product.images[0] }} 
//           style={styles.productImage} 
//           // Fallback if images[0] is undefined
//           onError={() => console.error('Image failed to load')} 
//         />
//         <Text style={styles.productName}>{product.name}</Text>
//         <View style={styles.priceRow}>
//           <Text style={styles.productPrice}>{product.price}</Text>
//           <Text style={styles.originalPrice}>{product.originalPrice}</Text>
//           <Text style={styles.discount}>{product.discount}</Text>
//         </View>
//         <Text style={styles.reviews}>
//           <Icon name="star" size={16} color="#f39c12" /> {product.rating} | {product.reviews} Reviews
//         </Text>
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </TouchableOpacity>
//     );
//   };
  

// const ProductList = () => {
//   const renderProduct = ({ item }) => <ProductCard product={item} />;

//   return (
//     <ScrollView style={styles.container}>
//       {/* Category Buttons */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
//         {categories.map((category, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.categoryButton}
//             onPress={() => Linking.openURL(category.url)}
//           >
//             <Text style={styles.categoryText}>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Header */}
//       <Text style={styles.headerTitle}>Clinically Tested & Proven</Text>
//       <Text style={styles.subTitle}>Products for effective treatment</Text>

//       {/* Product List */}
//           <FlatList
//   data={products}
//   renderItem={renderProduct}
//   keyExtractor={(item) => item.id.toString()}
//   numColumns={2}
//   columnWrapperStyle={styles.row}
//   contentContainerStyle={styles.productList}
//   key={2} 
  
// />

//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#ffffff',
//   //   padding: 16,
//   // },
//   categoryRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginBottom: 20,
//   },
//   categoryButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   categoryText: {
//     fontWeight: 'bold',
//   },
//   headerTitle: {
//     fontSize: FontSizes.medium,
//     fontWeight: 'bold',
//     marginTop: 12,
//   },
//   subTitle: {
//     fontSize: 12,
//     marginBottom: 15,
//   },
//   productList: {
//     flexGrow: 1,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   // productCard: {
//   //   backgroundColor: '#f9f9f9',
//   //   borderRadius: 10,
//   //   padding: 10,
//   //   marginBottom: 20,
//   //   width: '48%',
//   // },
//   // productImage: {
//   //   width: '100%',
//   //   height: 100,
//   //   borderRadius: 10,
//   //   marginBottom: 10,
//   // },
//   // productName: {
//   //   fontSize: 10,
//   //   fontWeight: 'bold',
//   //   marginBottom: 10,
//   // },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   productPrice: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   originalPrice: {
//     fontSize: 12,
//     textDecorationLine: 'line-through',
//     marginLeft: 8,
//     color: '#888',
//   },
//   discount: {
//     fontSize: 12,
//     color: '#27ae60',
//     marginLeft: 8,
//   },
//   reviews: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 10,
//   },
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
//   row: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//  // new style from Theme
//  productCard: ComponentStyles.productCard,
//  productName: ComponentStyles.productName,
//  addButton: ComponentStyles.addButton,
//  productPrice:ComponentStyles.productPrice,
//  reviews:ComponentStyles.reviewText,
//  discount:ComponentStyles.discount,
//  productImage:ComponentStyles.productImage,
//  ratingText:ComponentStyles.ratingText,
//  reviewText:ComponentStyles.reviewText,
//  addButtonText:ComponentStyles.addButtonText,
//  ratingContainer:ComponentStyles.ratingContainer,
//  discountPercent:ComponentStyles.discountPercent,
//  originalPrice:ComponentStyles.originalPrice,
//  priceContainer:ComponentStyles.priceContainer,
//  productInfo:ComponentStyles.productInfo,
// productList:ComponentStyles.productList,
// viewAllText:ComponentStyles.viewAllText,
// heading:ComponentStyles.heading,
// header:ComponentStyles.header,
// container:ComponentStyles.container,
  
// });

// export default ProductList;




import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSizes, FontFamily, ComponentStyles } from '../components/Theme';

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
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg'
    ]
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
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg'
    ]
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
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg'
    ]
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
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg'
    ]
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
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg'
    ]
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
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg'
    ]
  },
];



const categories = [
  { name: "All", url: "https://example.com/all" },
  { name: "Hair Fall", url: "https://example.com/hair-fall" },
  { name: "Dandruff", url: "https://example.com/dandruff" },
  { name: "Beard", url: "https://example.com/beard" },
  { name: "All", url: "https://example.com/all" },
  { name: "Hair Fall", url: "https://example.com/hair-fall" },
  { name: "Dandruff", url: "https://example.com/dandruff" },
  { name: "Beard", url: "https://example.com/beard" }
];

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product })}
    >
      <Image
        source={{ uri: product.images[0] }}
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
  const renderProduct = ({ item }) => <ProductCard product={item} />;

  return (
    <ScrollView style={styles.container}>
      {/* Category Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => Linking.openURL(category.url)}
          >
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
        keyExtractor={(item) => item.id.toString()}
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
    marginTop:10
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.lightGray,
    borderRadius: 20, // Rounded corners for category button
    marginHorizontal: 5,
    alignItems: 'center', // Center the text inside the category button
    justifyContent: 'center', // Center vertically
    shadowColor: "#000",
   
  
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


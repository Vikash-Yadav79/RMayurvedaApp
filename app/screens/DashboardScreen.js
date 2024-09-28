import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MedicineScreen from './MedicineScreen'; 
import NewLaunchScreen from './NewLaunchScreen';
import HeaderScreen from '../components/HeaderScreen';
import FooterScreen from '../components/FooterScreen';
import ComboProductScreen from './ComboProductScreen';

// Get screen width to make the banner responsive
const screenWidth = Dimensions.get('window').width;

// const products = [
//   {
//     id: '1',
//     name: 'Biotin Hair Gummies (30N) No Sugar',
//     price: '₹499',
//     image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//     reviews: 2488,
//     medicine:[ {
//       id: '5',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '6',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '7',
//       name: 'Vitamin C Serum',
//       price: '₹399',
//       image: 'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
//       reviews: 500,
//     }, {
//       id: '8',
//       name: 'Stage 2 Hair Regrowth Kit',
//       price: '₹899',
//       image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
//       reviews: 912,
//     },]
//   },
//   {
//     id: '2',
//     name: 'Anti Hair Fall Shampoo (200ml)',
//     price: '₹399',
//     image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//     reviews: 786,
//     medicine:[ {
//       id: '9',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '10',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '11',
//       name: 'Vitamin C Serum',
//       price: '₹399',
//       image: 'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
//       reviews: 500,
//     }, {
//       id: '12',
//       name: 'Stage 2 Hair Regrowth Kit',
//       price: '₹899',
//       image: 'https://i0.wp.com/rajayurved.in/wp-content/uploads/2022/05/f087d1c8704872c17ff2910512a57117882d7b2b_WEB-BANNER-4.jpg?fit=1400%2C410&ssl=1',
//       reviews: 912,
//     },]
//   },
//   {
//     id: '3',
//     name: 'Stage 2 Hair Regrowth Kit',
//     price: '₹899',
//     image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//     reviews: 912,
//     medicine:[ {
//       id: '13',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '14',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '15',
//       name: 'Vitamin C Serum',
//       price: '₹399',
//       image: 'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
//       reviews: 500,
//     }, {
//       id: '16',
//       name: 'Stage 2 Hair Regrowth Kit',
//       price: '₹899',
//       image: 'https://i0.wp.com/rajayurved.in/wp-content/uploads/2022/05/f087d1c8704872c17ff2910512a57117882d7b2b_WEB-BANNER-4.jpg?fit=1400%2C410&ssl=1',
//       reviews: 912,
//     },]
//   },
//   {
//     id: '3',
//     name: 'Vitamin C Serum',
//     price: '₹399',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
//     reviews: 500,
//     medicine:[ {
//       id: '17',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '18',
//       name: 'Anti Hair Fall Shampoo (200ml)',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
//       reviews: 786,
//     }, {
//       id: '19',
//       name: 'Vitamin C Serum',
//       price: '₹399',
//       image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
//       reviews: 500,
//     }, {
//       id: '20',
//       name: 'Stage 2 Hair Regrowth Kit',
//       price: '₹899',
//       image: 'https://i0.wp.com/rajayurved.in/wp-content/uploads/2022/05/f087d1c8704872c17ff2910512a57117882d7b2b_WEB-BANNER-4.jpg?fit=1400%2C410&ssl=1',
//       reviews: 912,
//     },]
//   },
// ];

// Example banner data
const banners = [
  { id: '1', image: 'https://c8.alamy.com/comp/R67PTM/ayurvedic-medicine-R67PTM.jpg' },
  { id: '2', image: 'https://www.shutterstock.com/image-photo/close-view-mortar-salt-oil-260nw-1774721042.jpg' },
  { id: '3', image: 'https://www.shutterstock.com/image-vector/ayurveda-concept-illustration-ayurvedic-healing-260nw-2196249447.jpg' },
];

// const ProductCard = ({ product, onPress }) => (
//   <TouchableOpacity style={styles.card} onPress={onPress}>
//     <Image source={{ uri: product.image }} style={styles.productImage} />
//     <Text style={styles.productName}>{product.name}</Text>
//     <Text style={styles.productPrice}>{product.price}</Text>
//     <Text style={styles.productReviews}>{`${product.reviews} Reviews`}</Text>
//     <TouchableOpacity style={styles.addToCartButton}>
//       <Text style={styles.addToCartText}>Add to Cart</Text>
//     </TouchableOpacity>
//   </TouchableOpacity>
// );

const DashboardScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const renderBanner = ({ item }) => (
    <View style={styles.bannerImageContainer}>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
    </View>
  );

  const handleProductPress = (product) => {
    navigation.navigate('ComboDetail', { product });
  };

  return (
    <View style={styles.container}>
      <HeaderScreen/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <FlatList
            ref={bannerRef}
            data={banners}
            renderItem={renderBanner}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment="center"
            snapToInterval={screenWidth}
            decelerationRate="fast"
            windowSize={3}
            style={styles.bannerList}
          />
        </View>

        {/* New Medicine View All Section */}
        <MedicineScreen />

        {/* Bestsellers section */}
        <View style={styles.bestsellerHeader}>
          <ComboProductScreen/>
          {/* <Text style={styles.sectionTitle}>Bestsellers Combo</Text>
          <TouchableOpacity onPress={() => navigation.navigate('BestSellerRelatedProduct')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity> */}
        </View>

        {/* Horizontal Scroll for First Two Products */}
        {/* <FlatList
          data={products.slice(0, 3)} 
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => handleProductPress(item)} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productListHorizontal}
        /> */}
    
        <NewLaunchScreen/>
      </ScrollView>
      <FooterScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  bannerContainer: {
    marginVertical: 15,
  },
  bannerList: {
    height: 160,
  },
  bannerImageContainer: {
    width: screenWidth - 30,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  bannerImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  bestsellerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  productListHorizontal: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 1,
    marginRight: 10, 
    width: 320, 
    marginTop:10
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  productReviews: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#140f1f',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;






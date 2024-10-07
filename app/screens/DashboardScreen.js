import React, {useEffect, useRef, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import MedicineScreen from './MedicineScreen';
import NewLaunchScreen from './NewLaunchScreen';
import HeaderScreen from '../components/HeaderScreen';
import FooterScreen from '../components/FooterScreen';
import ComboProductScreen from './ComboProductScreen';
import {ComponentStyles, Colors, FontSizes} from '../components/Theme';
const screenWidth = Dimensions.get('window').width;
import BestSellerRelatedProduct from '../screens/BestSellerRelatedProduct';
import RecentOrder from './RecentOrder';
import {
  BannerScreen1,
  BannerScreen2,
  BannerScreen3,
} from '../components/BannerScreen';

// Example banner data
const banners = [
  {
    id: '1',
    image: 'https://c8.alamy.com/comp/R67PTM/ayurvedic-medicine-R67PTM.jpg',
  },
  {
    id: '2',
    image:
      'https://www.shutterstock.com/image-photo/close-view-mortar-salt-oil-260nw-1774721042.jpg',
  },
  {
    id: '3',
    image:
      'https://www.shutterstock.com/image-vector/ayurveda-concept-illustration-ayurvedic-healing-260nw-2196249447.jpg',
  },
];

const DashboardScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.scrollToIndex({index: currentIndex, animated: true});
    }
  }, [currentIndex]);

  const renderBanner = ({item}) => (
    <View style={styles.bannerImageContainer}>
      <Image source={{uri: item.image}} style={styles.bannerImage} />
    </View>
  );

  const handleProductPress = product => {
    navigation.navigate('ComboDetail', {product});
  };

  return (
    <View style={styles.container}>
      <HeaderScreen />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <FlatList
            ref={bannerRef}
            data={banners}
            renderItem={renderBanner}
            keyExtractor={item => item.id}
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
        {/* Button Section Below Banner */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OrderDetails')}>
            <Text style={styles.buttonText}>Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Order')}>
            <Text style={styles.buttonText}>Your History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Recent')}>
            <Text style={styles.buttonText}>Recent Orders</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AnotherScreen')}>
            <Text style={styles.buttonText}>Another Option</Text>
          </TouchableOpacity> */}
        </ScrollView>

        {/* New Medicine View All Section */}
        <MedicineScreen />
        {/* Bestsellers section */}
        <View style={styles.bestsellerHeader}>
          <ComboProductScreen />
        </View>
        <NewLaunchScreen />
        {/* Small Banner Section */}
        <View style={styles.smallBannerContainer}>
          <Image
            source={{
              uri: 'https://www.dhanvantri.co.in/wp-content/uploads/2023/10/banner-01.jpg',
            }}
            style={styles.smallBanner}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.Popular}> Your Recent Order</Text>
        <RecentOrder />
        <BannerScreen2 />
      </ScrollView>
      <FooterScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  ...ComponentStyles,
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
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
  productListHorizontal: {
    paddingHorizontal: 15,
  },

  // Styles for small banner section
  smallBannerContainer: {
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  smallBanner: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  Popular: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
    marginLeft: 20,
  },

  // Styles for button section
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginHorizontal: -6,
    marginLeft: 16,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;

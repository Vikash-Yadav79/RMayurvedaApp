// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const HeaderScreen = ({ cartCount }) => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.logo}>R & M</Text>
//       <View style={styles.iconContainer}>
//         <Ionicons name="search" size={28} color="#333" style={styles.icon} />
//         <Ionicons name="person" size={28} color="#333" style={styles.icon} />
//         <View style={styles.cartContainer}>
//           <MaterialIcons name="shopping-cart" size={28} color="#333" style={styles.icon} />
//           {cartCount > 0 && (
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{cartCount}</Text>
//             </View>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#FEDB71',
//   },
//   logo: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//   },
//   icon: {
//     marginLeft: 15,
//     width: 26,
//     fontSize: 18,
//   },
//   cartContainer: {
//     position: 'relative',
//   },
//   badge: {
//     position: 'absolute',
//     right: -8,
//     top: -8,
//     backgroundColor: 'red',
//     borderRadius: 8,
//     padding: 4,
//     minWidth: 20,
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

// export default HeaderScreen;

// HeaderScreen.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext'; // Adjust the path
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  FontSizes,
  FontFamily,
  ComponentStyles,
} from '../components/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderScreen = () => {
  const {cart} = useCart(); // Access the cart from context
  const navigation = useNavigation(); // Hook to access navigation

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>RM Ayurved</Text>
      <TouchableOpacity
        style={styles.cartContainer}
        onPress={() => navigation.navigate('CartScreen')}>
        <MaterialIcons
          name="shopping-cart"
          size={20}
          color="#333"
          style={styles.icon}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.accent,
  },
  logo: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: Colors.text,
  },
  cartContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: FontSizes.large,
    marginRight: 5,
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HeaderScreen;

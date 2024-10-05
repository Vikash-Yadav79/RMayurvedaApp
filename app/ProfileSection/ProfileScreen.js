// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {Colors} from '../components/Theme';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   // Mock profile data
//   const defaultProfileData = {
//     firstNumber: '+91 7905808846',
//     fullName: 'User Name',
//   };

//   // Retrieve user details from navigation params, if available
//   const {userDetails} = route.params || {};
//   const profileData = userDetails
//     ? {
//         phoneNumber: userDetails.firstNumber,
//         userName: `${userDetails.fullName}`,
//       }
//     : defaultProfileData;

//   // List of account options with screen names for navigation
//   const accountOptions = [
//     {
//       id: 1,
//       title: 'Address',
//       subtitle: 'View or edit saved addresses',
//       icon: 'map-marker-outline',
//       screen: 'Address',
//     },
//     {
//       id: 2,
//       title: 'Orders',
//       subtitle: 'Your order history',
//       icon: 'cart-outline',
//       screen: 'Order',
//     },
//     {
//       id: 3,
//       title: 'Refer your friends',
//       subtitle: 'Earn upto Rs 2500',
//       icon: 'gift-outline',
//       screen: 'Refer',
//     },
//     {
//       id: 4,
//       title: 'MM Wallet',
//       subtitle: '₹0',
//       icon: 'wallet-outline',
//       screen: 'Wallet',
//     },
//     {
//       id: 5,
//       title: 'Payment Methods',
//       subtitle: 'Manage your saved payment methods',
//       icon: 'credit-card-outline',
//       screen: 'Payment',
//     },
//     {
//       id: 6,
//       title: 'Notification Settings',
//       subtitle: 'Enable or disable app notifications',
//       icon: 'bell-outline',
//       screen: 'Notification',
//     },
//     {
//       id: 7,
//       title: 'FAQ',
//       subtitle: 'Frequently Asked Questions',
//       icon: 'comment-question-outline',
//       screen: 'Faq',
//     },
//     {
//       id: 8,
//       title: 'Contact Us',
//       subtitle: 'Chat with us',
//       icon: 'phone-outline',
//       screen: 'Contact',
//     },
//     {
//       id: 9,
//       title: 'Privacy Policy',
//       subtitle: 'View Privacy Policy',
//       icon: 'shield-lock-outline',
//       screen: 'PrivacyPolicy',
//     },
//     {
//       id: 10,
//       title: 'Terms of Service',
//       subtitle: 'View Terms of Service',
//       icon: 'file-document-outline',
//       screen: 'TermsOfService',
//     },
//   ];

//   // Function to handle navigation on item press
//   const handleNavigation = screen => {
//     if (screen) {
//       navigation.navigate(screen);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header with Back Arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backButton}>
//           <Icon name="arrow-left" size={24} color="#140F1F" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Your Account</Text>
//       </View>

//       {/* Profile Section */}
//       <TouchableOpacity
//         style={styles.profileSection}
//         onPress={() => navigation.navigate('UserDetails')}>
//         <Icon
//           name="account-outline"
//           size={24}
//           color="#140F1F"
//           style={styles.profileIcon}
//         />
//         <View style={styles.profileInfo}>
//           <Text style={styles.userName}>{profileData.userName}</Text>
//           <Text style={styles.phoneNumber}>{profileData.phoneNumber}</Text>
//         </View>
//         <Icon
//           name="chevron-right"
//           size={24}
//           color="#140F1F"
//           style={styles.profileChevron}
//         />
//       </TouchableOpacity>

//       {/* Account Options List */}
//       <View style={styles.optionsContainer}>
//         {accountOptions.map(option => (
//           <TouchableOpacity
//             key={option.id}
//             style={styles.option}
//             onPress={() => handleNavigation(option.screen)}>
//             <View style={styles.optionIconContainer}>
//               <Icon name={option.icon} size={24} color="#000" />
//             </View>
//             <View style={styles.optionContent}>
//               <Text style={styles.optionTitle}>{option.title}</Text>
//               <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
//             </View>
//             <Icon name="chevron-right" size={24} color="#000" />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Full Width Logout Button */}
//       <TouchableOpacity
//         style={styles.logoutButton}
//         onPress={() => {
//           /* Add logout logic here */
//         }}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   backButton: {
//     marginRight: 16,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//     backgroundColor: '#fff',
//     color: Colors.text,
//   },
//   profileIcon: {
//     marginRight: 14,
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   phoneNumber: {
//     fontSize: 14,
//     color: Colors.text,
//   },
//   profileChevron: {
//     marginLeft: 16,
//   },
//   optionsContainer: {
//     paddingVertical: 16,
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//     backgroundColor: '#fff',
//   },
//   optionIconContainer: {
//     width: 40,
//     alignItems: 'center',
//   },
//   optionContent: {
//     flex: 1,
//   },
//   optionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   optionSubtitle: {
//     fontSize: 12,
//     color: '#888',
//   },
//   logoutButton: {
//     backgroundColor: Colors.accent,
//     paddingVertical: 14,
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   logoutButtonText: {
//     color: Colors.text,
//     fontWeight: 'bold',
//   },
// });

// export default ProfileScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../components/Theme';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Corrected profile data structure to match the expected keys
  const defaultProfileData = {
    phoneNumber: '+91 7905808846',
    userName: 'User Name',
  };

  // Retrieve user details from navigation params, if available
  const {userDetails} = route.params || {};
  const profileData = userDetails
    ? {
        phoneNumber: userDetails.firstNumber,
        userName: `${userDetails.fullName}`,
      }
    : defaultProfileData;

  // List of account options with screen names for navigation
  const accountOptions = [
    {
      id: 1,
      title: 'Address',
      subtitle: 'View or edit saved addresses',
      icon: 'map-marker-outline',
      screen: 'Address',
    },
    {
      id: 2,
      title: 'Orders',
      subtitle: 'Your order history',
      icon: 'cart-outline',
      screen: 'Order',
    },
    {
      id: 3,
      title: 'Refer your friends',
      subtitle: 'Earn upto Rs 2500',
      icon: 'gift-outline',
      screen: 'Refer',
    },
    {
      id: 4,
      title: 'MM Wallet',
      subtitle: '₹0',
      icon: 'wallet-outline',
      screen: 'Wallet',
    },
    {
      id: 5,
      title: 'Payment Methods',
      subtitle: 'Manage your saved payment methods',
      icon: 'credit-card-outline',
      screen: 'Payment',
    },
    {
      id: 6,
      title: 'Notification Settings',
      subtitle: 'Enable or disable app notifications',
      icon: 'bell-outline',
      screen: 'Notification',
    },
    {
      id: 7,
      title: 'FAQ',
      subtitle: 'Frequently Asked Questions',
      icon: 'comment-question-outline',
      screen: 'Faq',
    },
    {
      id: 8,
      title: 'Contact Us',
      subtitle: 'Chat with us',
      icon: 'phone-outline',
      screen: 'Contact',
    },
    {
      id: 9,
      title: 'Privacy Policy',
      subtitle: 'View Privacy Policy',
      icon: 'shield-lock-outline',
      screen: 'PrivacyPolicy',
    },
    {
      id: 10,
      title: 'Terms of Service',
      subtitle: 'View Terms of Service',
      icon: 'file-document-outline',
      screen: 'TermsOfService',
    },
  ];

  // Function to handle navigation on item press
  const handleNavigation = screen => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#140F1F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Account</Text>
      </View>

      {/* Profile Section */}
      <TouchableOpacity
        style={styles.profileSection}
        onPress={() => navigation.navigate('UserDetails')}>
        <Icon
          name="account-outline"
          size={24}
          color="#140F1F"
          style={styles.profileIcon}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{profileData.userName}</Text>
          <Text style={styles.phoneNumber}>{profileData.phoneNumber}</Text>
        </View>
        <Icon
          name="chevron-right"
          size={24}
          color="#140F1F"
          style={styles.profileChevron}
        />
      </TouchableOpacity>

      {/* Account Options List */}
      <View style={styles.optionsContainer}>
        {accountOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.option}
            onPress={() => handleNavigation(option.screen)}>
            <View style={styles.optionIconContainer}>
              <Icon name={option.icon} size={24} color="#000" />
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Full Width Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          /* Add logout logic here */
        }}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#fff',
    color: Colors.text,
  },
  profileIcon: {
    marginRight: 14,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
  },
  phoneNumber: {
    fontSize: 14,
    color: Colors.text,
  },
  profileChevron: {
    marginLeft: 16,
  },
  optionsContainer: {
    paddingVertical: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  optionIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  logoutButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 30,
    margin: 16,
  },
  logoutButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

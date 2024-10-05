import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';

export const BannerScreen1 = () => {
  <View style={styles.smallBannerContainer}>
    <Image
      source={{
        uri: 'https://www.dhanvantri.co.in/wp-content/uploads/2023/10/banner-01.jpg',
      }}
      style={styles.smallBanner}
      resizeMode="cover"
    />
  </View>;
};
export const BannerScreen2 = () => {
  <View style={styles.smallBannerContainer}>
    <Image
      source={{
        uri: 'https://www.dhanvantri.co.in/wp-content/uploads/2023/10/banner-01.jpg',
      }}
      style={styles.smallBanner}
      resizeMode="cover"
    />
  </View>;
};
export const BannerScreen3 = () => {
  <View style={styles.smallBannerContainer}>
    <Image
      source={{
        uri: 'https://www.dhanvantri.co.in/wp-content/uploads/2023/10/banner-01.jpg',
      }}
      style={styles.smallBanner}
      resizeMode="cover"
    />
  </View>;
};

const styles = StyleSheet.create({
  smallBannerContainer: {
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff', // Temporary background color for debugging
    paddingVertical: 20, // Adjust padding to ensure proper spacing
  },
  smallBanner: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

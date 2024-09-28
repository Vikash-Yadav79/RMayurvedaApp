import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSizes, FontFamily, ComponentStyles } from '../components/Theme'

const FooterScreen = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons name="home-outline" size={18} color="#555" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <Ionicons name="bag-handle-outline" size={18} color="#555" />
        <Text style={styles.navText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={18} color="#555" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: Colors.accent,
    borderTopWidth: 1,
    borderColor: '#ddd',
    height:50
  },
  navText: {
    fontSize: 10,
    color: '#555',
    textAlign: 'center',
    // marginTop: -1,
    // marginBottom:0
  },
});

export default FooterScreen;

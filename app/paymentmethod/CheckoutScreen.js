import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CheckoutScreen = ({ navigation }) => {
  const address = "3 Newbridge Court, Chino Hills, CA 91709, United States";
  const payment = "**** **** **** 3947";
  const deliveryOptions = [
    { id: 1, logo: 'https://logo.clearbit.com/fedex.com', name: 'FedEx', deliveryTime: '2-3 days' },
    { id: 2, logo: 'https://logo.clearbit.com/usps.com', name: 'USPS.COM', deliveryTime: '2-3 days' },
    { id: 3, logo: 'https://logo.clearbit.com/dhl.com', name: 'DHL', deliveryTime: '2-3 days' }
  ];

  const orderAmount = 112;
  const deliveryCharge = 15;
  const totalAmount = orderAmount + deliveryCharge;

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Shipping Address Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shipping address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressName}>Jane Doe</Text>
          <Text style={styles.addressText}>{address}</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Payment</Text>
        <View style={styles.paymentContainer}>
          <Image
            source={{ uri: 'https://logo.clearbit.com/mastercard.com' }}
            style={styles.paymentLogo}
          />
          <Text style={styles.paymentText}>{payment}</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Delivery Method Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Delivery method</Text>
        <View style={styles.deliveryOptions}>
          {deliveryOptions.map((option) => (
            <View key={option.id} style={styles.deliveryOption}>
              <Image source={{ uri: option.logo }} style={styles.deliveryLogo} />
              <Text style={styles.deliveryText}>{option.name}</Text>
              <Text style={styles.deliveryTime}>{option.deliveryTime}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Order:</Text>
          <Text style={styles.summaryText}>{orderAmount}$</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery:</Text>
          <Text style={styles.summaryText}>{deliveryCharge}$</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryText, styles.totalText]}>Summary:</Text>
          <Text style={[styles.summaryText, styles.totalText]}>{totalAmount}$</Text>
        </View>
      </View>

      {/* Submit Order Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressContainer: {
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 14,
    color: '#777',
  },
  changeText: {
    fontSize: 14,
    color: '#FF5A5F',
    marginTop: 10,
    textAlign: 'right',
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentLogo: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  paymentText: {
    flex: 1,
    fontSize: 14,
  },
  deliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryOption: {
    alignItems: 'center',
  },
  deliveryLogo: {
    width: 60,
    height: 40,
    marginBottom: 5,
  },
  deliveryText: {
    fontSize: 14,
  },
  deliveryTime: {
    fontSize: 12,
    color: '#888',
  },
  summaryContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
  },
  totalText: {
    fontWeight: 'bold',
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#140f1f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;

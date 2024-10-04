import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Order history</Text>
      <Text style={styles.subHeader}>All past order details at one place</Text>

      {/* Order Card */}
      <View style={styles.card}>
        {/* Order Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Complete</Text>
        </View>

        {/* Order Details */}
        <View style={styles.orderDetails}>
          <View style={styles.orderIdContainer}>
            <Text style={styles.label}>Order Id</Text>
            <Text style={styles.value}>#052788353</Text>
          </View>
          <View style={styles.orderPriceContainer}>
            <Text style={styles.label}>Prepaid</Text>
            <Text style={styles.value}>₹1198.00</Text>
          </View>
        </View>

        <Text style={styles.orderDate}>Order placed on</Text>
        <Text style={styles.date}>26 Nov, 2023</Text>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderText}>Reorder Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.detailsText}>Order Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
  },
  backText: {
    fontSize: 20,
    color: '#000',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 4,
  },
  statusContainer: {
    backgroundColor: '#00c851',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  orderIdContainer: {
    flex: 1,
  },
  orderPriceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderDate: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  reorderButton: {
    backgroundColor: '#FEDB71',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  reorderText: {
    color: '#140F1F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#FEDB71',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsText: {
    color: '#140F1F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderScreen;

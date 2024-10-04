import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OrderDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* My Orders Title */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      {/* Order Tracker */}
      <View style={styles.trackerContainer}>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>Picked Up</Text>
          <View style={styles.dot} />
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>In Transit</Text>
          <View style={styles.dot} />
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>Delivered</Text>
          <View style={styles.dot} />
        </View>
      </View>

      {/* Order Tracking Details */}
      <View style={styles.orderTrackContainer}>
        <Text style={styles.trackTitle}>Track your order : #052788353</Text>
        <Text style={styles.completeStatus}>
          Status: <Text style={styles.complete}>Complete</Text>
        </Text>
        <Text style={styles.timeline}>
          Delivered at 14:35 PM on 27th Nov, 2023
        </Text>
        <Text style={styles.timeline}>
          Out For Delivery: 12:24 PM on 27th Nov, 2023
        </Text>
      </View>

      {/* Order Details */}
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailsTitle}>Order Details #052788353</Text>
        <Text style={styles.orderStatus}>
          Your order is now Complete (2 items)
        </Text>

        {/* Product 1 */}
        <View style={styles.productRow}>
          <Image
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text>Anti-Dandruff Shampoo</Text>
            <Text>299.00 x 1 Qty.</Text>
          </View>
        </View>

        {/* Product 2 */}
        <View style={styles.productRow}>
          <Image
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text>Biotin Hair Gummies</Text>
            <Text>899.00 x 1 Qty.</Text>
          </View>
        </View>

        {/* Reorder Button */}
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>Re-Order</Text>
        </TouchableOpacity>
      </View>

      {/* Shipping Details */}
      <View style={styles.shippingDetailsContainer}>
        <Text style={styles.shippingDetailsTitle}>Shipping Details</Text>
        <Text style={styles.shippingInfo}>Deliver to:</Text>
        <Text>Nitin Kumar</Text>
        <Text>16/304, Pyare Lal Road, Karol Bagh, New Delhi, 110005</Text>
        <Text>9808848001</Text>
        <Text>wwwnk9333@gmail.com</Text>
      </View>

      {/* Continue Shopping */}
      <TouchableOpacity style={styles.continueShoppingButton}>
        <Text style={styles.continueShoppingButtonText}>Continue Shopping</Text>
      </TouchableOpacity>

      {/* Order Summary */}
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Item Total</Text>
          <Text>₹1289</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Item Discount</Text>
          <Text>- ₹91</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Subtotal</Text>
          <Text>₹1198</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Shipping</Text>
          <Text>Free</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Order total</Text>
          <Text>₹1198</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Prepaid</Text>
          <Text>₹1198</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Total amount paid</Text>
          <Text>₹1198</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  header: {
    padding: 20,
    backgroundColor: '#F0F8FF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  trackerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  statusWrapper: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  orderTrackContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  completeStatus: {
    fontSize: 14,
    marginBottom: 10,
  },
  complete: {
    color: 'green',
    fontWeight: 'bold',
  },
  timeline: {
    color: '#555',
    marginBottom: 5,
  },
  orderDetailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  orderDetailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderStatus: {
    color: 'green',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    justifyContent: 'center',
  },
  reorderButton: {
    backgroundColor: '#FEDB71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  reorderButtonText: {
    color: '#140F1F',
    fontWeight: 'bold',
  },
  shippingDetailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  shippingDetailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shippingInfo: {
    fontWeight: 'bold',
  },
  continueShoppingButton: {
    backgroundColor: '#FEDB71',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  continueShoppingButtonText: {
    color: '#140F1F',
    fontSize: 13,
    fontWeight: 'bold',
  },
  orderSummaryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default OrderDetailsScreen;

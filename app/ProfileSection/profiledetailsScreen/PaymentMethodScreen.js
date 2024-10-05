import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, FontSizes} from '../../components/Theme';

const PaymentMethodScreen = ({navigation}) => {
  // State to track the selected payment method
  const [selectedMethod, setSelectedMethod] = useState('');

  // List of payment methods
  const paymentMethods = [
    {id: '1', name: 'Credit/Debit Card'},
    {id: '2', name: 'Net Banking'},
    {id: '3', name: 'UPI Payment'},
    {id: '4', name: 'Cash on Delivery'},
  ];

  // Total amount (example value)
  const totalAmount = '₹ 1500.00';

  const handlePayment = () => {
    if (selectedMethod) {
      Alert.alert('Payment Successful', `You selected ${selectedMethod}.`);
    } else {
      Alert.alert('Error', 'Please select a payment method.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
      </View>

      {/* Payment Method Options */}
      <FlatList
        data={paymentMethods}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.methodContainer}
            onPress={() => setSelectedMethod(item.name)}>
            <RadioButton
              value={item.name}
              status={selectedMethod === item.name ? 'checked' : 'unchecked'}
              onPress={() => setSelectedMethod(item.name)}
              color="#007bff"
            />
            <Text style={styles.methodName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Payment Summary Section */}
      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.amountText}>{totalAmount}</Text>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    fontSize: 18,
    color: '#007bff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.text,
  },
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  methodName: {
    fontSize: 16,
    marginLeft: 10,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 10,
  },
  payButton: {
    backgroundColor: Colors.accent,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentMethodScreen;

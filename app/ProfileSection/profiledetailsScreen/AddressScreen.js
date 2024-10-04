import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Colors} from '../../components/Theme';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(null);

  // Load addresses from AsyncStorage when the screen is focused
  useFocusEffect(
    useCallback(() => {
      const fetchAddresses = async () => {
        const storedAddresses = await AsyncStorage.getItem('addresses');
        if (storedAddresses) {
          const parsedAddresses = JSON.parse(storedAddresses);
          setAddresses(parsedAddresses);
          // Set default address index if it exists
          const defaultIndex = parsedAddresses.findIndex(
            address => address.isDefault,
          );
          setDefaultAddressIndex(defaultIndex !== -1 ? defaultIndex : null);
        }
      };
      fetchAddresses();
    }, []),
  );

  // Function to handle adding a new address
  const handleAddAddress = async newAddress => {
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  // Function to handle editing an existing address
  const handleEditAddress = async (index, editedAddress) => {
    const updatedAddresses = addresses.map((item, i) =>
      i === index ? editedAddress : item,
    );
    setAddresses(updatedAddresses);
    await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  // Function to handle deleting an address
  const handleDeleteAddress = index => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedAddresses = addresses.filter((_, i) => i !== index);
            setAddresses(updatedAddresses);
            await AsyncStorage.setItem(
              'addresses',
              JSON.stringify(updatedAddresses),
            );
            // Reset default if the deleted address was the default
            if (defaultAddressIndex === index) {
              setDefaultAddressIndex(null);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  // Function to handle setting an address as default
  const handleSetDefault = async index => {
    const updatedAddresses = addresses.map((address, i) => ({
      ...address,
      isDefault: i === index, // Mark the selected address as default
    }));
    setAddresses(updatedAddresses);
    setDefaultAddressIndex(index);
    await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Addresses</Text>
      </View>

      {/* Address List */}
      <ScrollView>
        {addresses.length > 0 ? (
          addresses.map((item, index) => (
            <View
              key={index}
              style={[
                styles.addressCard,
                defaultAddressIndex === index ? styles.defaultCard : null,
              ]}>
              <Text style={styles.addressText}>{item.name}</Text>
              <Text style={styles.addressText}>{item.address}</Text>
              <Text style={styles.addressText}>{item.city}</Text>
              <Text style={styles.addressText}>{item.state}</Text>
              <Text style={styles.addressText}>{item.pincode}</Text>
              <Text style={styles.addressText}>{item.phoneNumber}</Text>

              {/* Action Buttons in a single line */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('AddAddress', {
                      address: item,
                      index,
                      onSave: handleEditAddress,
                    })
                  }>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDeleteAddress(index)}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSetDefault(index)}>
                  <Text style={styles.buttonText}>Set as Default</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noAddressesText}>No addresses added yet.</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddAddress', {onSave: handleAddAddress})
        }>
        <Text style={styles.addButtonText}> + Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addressCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    marginLeft: 1,
    marginRight: 1,
  },
  defaultCard: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 4,
  },
  defaultText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.accent,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 4, // Optional: Space between buttons
  },
  buttonText: {
    color: Colors.text,
  },
  noAddressesText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.text,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: Colors.accent,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default AddressScreen;

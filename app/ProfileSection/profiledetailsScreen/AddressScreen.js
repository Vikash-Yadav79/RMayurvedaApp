import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddressScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    phoneNumber: '',
  });

  // Function to add address
  const addAddress = () => {
    if (addresses.length < 3) {
      setAddresses([...addresses, newAddress]);
      setNewAddress({
        name: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        phoneNumber: '',
      });
      setIsModalVisible(false);
    } else {
      alert('Only 3 addresses can be displayed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Addresses</Text>

      {/* Address List */}
      <FlatList
        data={addresses}
        renderItem={({item}) => (
          <View style={styles.addressItem}>
            <Text>{item.name}</Text>
            <Text>
              {item.address}, {item.city}, {item.state}, {item.pincode}
            </Text>
            <Text>Phone: {item.phoneNumber}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Add New Address Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add New Address</Text>
      </TouchableOpacity>

      {/* Modal for Adding Address */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add New Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newAddress.name}
            onChangeText={text => setNewAddress({...newAddress, name: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={newAddress.address}
            onChangeText={text => setNewAddress({...newAddress, address: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            keyboardType="numeric"
            value={newAddress.pincode}
            onChangeText={text => setNewAddress({...newAddress, pincode: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={newAddress.city}
            onChangeText={text => setNewAddress({...newAddress, city: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={newAddress.state}
            onChangeText={text => setNewAddress({...newAddress, state: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            value={newAddress.phoneNumber}
            onChangeText={text =>
              setNewAddress({...newAddress, phoneNumber: text})
            }
          />

          {/* Cancel and Save Buttons */}
          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            <Button title="Save" onPress={addAddress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default AddressScreen;

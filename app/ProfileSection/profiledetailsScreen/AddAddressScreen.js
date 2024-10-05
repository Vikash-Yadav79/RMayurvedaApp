// import React, {useState} from 'react';
// import {View, TextInput, Button, StyleSheet} from 'react-native';
// import {Colors} from '../../components/Theme'; // Adjust this import based on your file structure

// const AddAddressScreen = ({route, navigation}) => {
//   const {address, index, onSave} = route.params || {};
//   const [name, setName] = useState(address?.name || '');
//   const [addressText, setAddressText] = useState(address?.address || '');
//   const [city, setCity] = useState(address?.city || '');
//   const [state, setState] = useState(address?.state || '');
//   const [pincode, setPincode] = useState(address?.pincode || '');
//   const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber || '');

//   const handleSave = () => {
//     const newAddress = {
//       name,
//       address: addressText,
//       city,
//       state,
//       pincode,
//       phoneNumber,
//     };

//     // Call onSave and pass the new address
//     if (onSave) {
//       if (index !== undefined) {
//         onSave(index, newAddress);
//       } else {
//         onSave(newAddress);
//       }
//     }

//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         value={addressText}
//         onChangeText={setAddressText}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={city}
//         onChangeText={setCity}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="State"
//         value={state}
//         onChangeText={setState}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Pincode"
//         value={pincode}
//         onChangeText={setPincode}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <Button
//         style={styles.button}
//         title={index ? 'Update' : 'Save'}
//         onPress={handleSave}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 40,
//     borderColor: Colors.border,
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     borderRadius: 8,
//   },
//   button: {
//     backgroundColor: Colors.accent,
//   },
// });

// export default AddAddressScreen;

import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors} from '../../components/Theme'; // Adjust this import based on your file structure

const AddAddressScreen = ({route, navigation}) => {
  const {address, index, onSave} = route.params || {};
  const [name, setName] = useState(address?.name || '');
  const [addressText, setAddressText] = useState(address?.address || '');
  const [city, setCity] = useState(address?.city || '');
  const [state, setState] = useState(address?.state || '');
  const [pincode, setPincode] = useState(address?.pincode || '');
  const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber || '');

  const handleSave = () => {
    const newAddress = {
      name,
      address: addressText,
      city,
      state,
      pincode,
      phoneNumber,
    };

    // Call onSave and pass the new address
    if (onSave) {
      if (index !== undefined) {
        onSave(index, newAddress);
      } else {
        onSave(newAddress);
      }
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={addressText}
        onChangeText={setAddressText}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>
          {index !== undefined ? 'Update' : 'Save'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: -150,
  },
  input: {
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: Colors.accent,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddAddressScreen;

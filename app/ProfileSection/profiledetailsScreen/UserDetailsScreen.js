import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView, // Import ScrollView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, FontSizes} from '../../components/Theme';
import {Picker} from '@react-native-picker/picker';

const UserDetails = () => {
  const navigation = useNavigation();

  // State for user details
  const [fullName, setFullName] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle save action
  const handleSave = () => {
    if (!fullName || !firstNumber || !whatsappNumber) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // navigation.navigate('Profile', {
    //   userDetails: {
    //     fullName,
    //     firstNumber,
    //     secondNumber,
    //     whatsappNumber,
    //     pincode,
    //     gender,
    //     city,
    //     address,
    //   },
    // });
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Details</Text>
      </View>

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Edit Your Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="First Number (Required)"
          value={firstNumber}
          onChangeText={setFirstNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Second Number (Optional)"
          value={secondNumber}
          onChangeText={setSecondNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="WhatsApp Number (Required)"
          value={whatsappNumber}
          onChangeText={setWhatsappNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={itemValue => setGender(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
    color: Colors.text,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: FontSizes.medium,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: FontSizes.medium,
    marginBottom: 5,
    color: Colors.text,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20, // Optional: add padding at the bottom for better spacing
  },
  saveButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  saveButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: FontSizes.medium,
  },
});

export default UserDetails;

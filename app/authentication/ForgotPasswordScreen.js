import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // For gradient background
import Icon from 'react-native-vector-icons/Ionicons'; // For icons
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();

  const handleSendLink = () => {
    // Handle password reset logic here
    console.log("Mobile Number for password reset: ", mobileNumber);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F6C850" />

      {/* Top gradient section */}
      <LinearGradient
        colors={['#F6C850', '#F2994A']}
        style={styles.topContainer}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Text style={styles.welcomeText}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your mobile number to reset password</Text>
      </LinearGradient>

      {/* Bottom white section */}
      <View style={styles.bottomContainer}>
        {/* Mobile Number Input */}
        <View style={styles.inputContainer}>
          <Icon name="call-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>

        {/* Send Link Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSendLink}>
          <Text style={styles.loginButtonText}>Send Reset Link</Text>
        </TouchableOpacity>

        {/* Back to Login */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Remember your password? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background for the container
  },
  topContainer: {
    flex: 0.4, // Top section takes 40% of the screen
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50, // Rounded bottom corner to create that curved effect
    borderBottomLeftRadius: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
  },
  bottomContainer: {
    flex: 0.6, // Bottom section takes 60% of the screen
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#F2994A',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#000',
  },
  signupLink: {
    color: '#F2994A',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;

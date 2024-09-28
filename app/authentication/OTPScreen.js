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

const OTPScreen = () => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Handle OTP verification logic here
    // console.log("Entered OTP: ", otp);
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic here
    console.log("Resend OTP clicked");
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
        <Text style={styles.welcomeText}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the OTP sent to your mobile number</Text>
      </LinearGradient>

      {/* Bottom white section */}
      <View style={styles.bottomContainer}>
        {/* OTP Input */}
        <View style={styles.inputContainer}>
          <Icon name="key-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
            maxLength={6} // Limiting OTP to 6 digits
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.resendOtpText}>Resend OTP?</Text>
        </TouchableOpacity>
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
    textAlign: 'center',
    paddingHorizontal: 30,
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
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2, // Adds space between characters for better OTP visibility
  },
  verifyButton: {
    backgroundColor: '#F2994A',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 30,
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resendOtpText: {
    color: '#F2994A', // Orange color for the resend OTP link
    fontWeight: 'bold',
  },
});

export default OTPScreen;

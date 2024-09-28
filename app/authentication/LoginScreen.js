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

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  // Uncomment when needed
  // const [password, setPassword] = useState('');
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('OTPScreen');
  };
  
  // const handleGuestLogin = () => {
  //   navigation.navigate('ForgotPassword');
  // };

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
        <Text style={styles.welcomeText}>Welcome to R&M Ayurveda</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>
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

        {/* Uncomment when needed */}
        {/* Password Input */}
        {/* <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View> */}

        {/* Forgot Password */}
        {/* <TouchableOpacity onPress={handleGuestLogin}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity> */}

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Login as a Guest? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.signupLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
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
    flex: 0.6,
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
  eyeIcon: {
    justifyContent: 'center',
  },
  forgotPassword: {
    color: '#F2994A',
    marginBottom: 30,
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

export default LoginScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, FontSizes} from '../../components/Theme';

const TermsOfServiceScreen = ({navigation}) => {
  const termsOfService = `
  Welcome to our application. By accessing or using our service, you agree to the following terms and conditions. Please read them carefully.

  1. **Acceptance of Terms**: By using our service, you agree to comply with these Terms of Service.
  
  2. **Privacy Policy**: Our Privacy Policy explains how we handle your personal data. By using our service, you agree to our Privacy Policy.
  
  3. **User Responsibilities**: You are responsible for your use of our service and any content you provide, including compliance with applicable laws.
  
  4. **Prohibited Activities**: You agree not to engage in any activities that violate these Terms, including but not limited to illegal activities, infringement of intellectual property, and harassment.
  
  5. **Termination**: We reserve the right to suspend or terminate your access to our service if you violate these Terms.
  
  6. **Changes to Terms**: We may modify these Terms at any time. Your continued use of our service signifies your acceptance of the updated Terms.
  
  7. **Governing Law**: These Terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in accordance with the laws of [Your Country/State].

  For more details, please contact our support team.

  Last updated: [Date]
  `;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms of Service</Text>
      </View>

      {/* Scrollable Terms Text */}
      <ScrollView style={styles.termsContainer}>
        <Text style={styles.termsText}>{termsOfService}</Text>
      </ScrollView>

      {/* Accept Button */}
      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => alert('Terms Accepted')}>
        <Text style={styles.acceptButtonText}>Accept Terms</Text>
      </TouchableOpacity>
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
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007bff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  termsContainer: {
    flex: 1,
    padding: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  acceptButton: {
    padding: 15,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsOfServiceScreen;

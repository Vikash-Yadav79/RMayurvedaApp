import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Clipboard,
  Alert,
} from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ComponentStyles, Colors} from '../../components/Theme';

const ReferFriendScreen = () => {
  const referralCode = 'ABC123';

  // Function to handle sharing
  const handleShare = async () => {
    const shareOptions = {
      title: 'Refer Your Friends',
      message: `Hey! Use my referral code ${referralCode} to get exclusive discounts.`,
      url: '', // Add a link if necessary
    };
    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  // Function to handle copying referral code to clipboard
  const handleCopyCode = () => {
    Clipboard.setString(referralCode);
    Alert.alert('Referral Code', 'Referral code copied to clipboard!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer Your Friends</Text>
      </View>

      {/* Referral Code Section */}
      <View style={styles.referralCard}>
        <Text style={styles.referralLabel}>Your Referral Code</Text>
        <Text style={styles.referralCode}>{referralCode}</Text>
        <TouchableOpacity style={styles.copyButton} onPress={handleCopyCode}>
          <Text style={styles.copyButtonText}>Copy Code</Text>
        </TouchableOpacity>
      </View>

      {/* Share Options Section */}
      <View style={styles.shareSection}>
        <Text style={styles.shareTitle}>Share via</Text>
        <View style={styles.shareOptions}>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Icon name="share" size={24} color="#140F1F" />
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
          {/* Add more share options as necessary */}
        </View>
      </View>

      {/* Benefits Section */}
      <View style={styles.benefitsSection}>
        <Text style={styles.sectionTitle}>Benefits of Referring</Text>
        <View style={styles.benefitItem}>
          <Icon name="monetization-on" size={32} color="#4CAF50" />
          <Text style={styles.benefitText}>
            Get ₹500 for every successful referral
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <Icon name="card-giftcard" size={32} color="#FFC107" />
          <Text style={styles.benefitText}>
            Earn bonus points that can be redeemed for gifts
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <Icon name="group" size={32} color="#2196F3" />
          <Text style={styles.benefitText}>
            Help your friends save money on their purchases
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  referralCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  referralLabel: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
  },
  referralCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  copyButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  copyButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
  shareSection: {
    marginBottom: 24,
  },
  shareTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  shareOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButtonText: {
    color: Colors.text,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  benefitsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#555',
  },
});

export default ReferFriendScreen;

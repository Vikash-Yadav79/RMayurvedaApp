import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactUsScreen = () => {
  const openWhatsApp = () => {
    // Replace '1234567890' with your WhatsApp number
    Linking.openURL('https://wa.me/1234567890');
  };

  const openEmail = () => {
    Linking.openURL('mailto:support@manmatters.com');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Go back')}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        {/* <Text style={styles.headerTitle}>Contact Us</Text> */}
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Talk to Us</Text>
        <Text style={styles.infoDescription}>
          We want to make expert advice and healthcare more accessible to
          everyone. Reach out to us for any queries or issues you might be
          facing.
        </Text>
      </View>

      {/* Contact Options */}
      <TouchableOpacity style={styles.contactItem} onPress={openWhatsApp}>
        <Icon name="whatsapp" size={30} color="#25D366" />
        <View style={styles.contactText}>
          <Text style={styles.contactTitle}>Connect on WhatsApp</Text>
          <Text style={styles.contactSubtitle}>
            Our customer happiness team is dedicated to helping you out
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
        <Icon name="email-outline" size={30} color="#EA4335" />
        <View style={styles.contactText}>
          <Text style={styles.contactTitle}>support@manmatters.com</Text>
          <Text style={styles.contactSubtitle}>
            We want to address your concerns and value your feedback
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.contactItem}>
        <Icon name="map-marker-outline" size={30} color="#EA4335" />
        <View style={styles.contactText}>
          <Text style={styles.contactTitle}>
            Mosaic Wellness Private Limited
          </Text>
          <Text style={styles.contactSubtitle}>
            5th Floor, Vaman Techno Centre, Marol, Andheri East, Mumbai 400059
          </Text>
        </View>
      </View>

      {/* Social Media */}
      <Text style={styles.socialHeader}>Stay Connected Online</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Icon name="facebook" size={40} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="twitter" size={40} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="instagram" size={40} color="#C13584" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="youtube" size={40} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  infoBox: {
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 16,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 15,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  socialHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default ContactUsScreen;

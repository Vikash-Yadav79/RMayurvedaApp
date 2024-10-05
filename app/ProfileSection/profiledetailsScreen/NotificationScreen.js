import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, FontSizes} from '../../components/Theme';

const NotificationScreen = ({navigation}) => {
  // Sample list of notifications
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Order Shipped',
      message: 'Your order has been shipped successfully!',
      timestamp: '2 hours ago',
      read: false,
    },
    {
      id: '2',
      title: 'New Discount Available!',
      message: 'Grab 20% off on your next purchase.',
      timestamp: '1 day ago',
      read: true,
    },
    {
      id: '3',
      title: 'Order Delivered',
      message: 'Your order has been delivered.',
      timestamp: '3 days ago',
      read: false,
    },
    {
      id: '4',
      title: 'Payment Received',
      message: 'Your payment has been successfully received.',
      timestamp: '1 week ago',
      read: true,
    },
  ]);

  // Function to mark a notification as read
  const markAsRead = id => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? {...notification, read: true} : notification,
      ),
    );
  };

  // Render function for each notification item
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.notificationContainer,
        item.read ? styles.readNotification : styles.unreadNotification,
      ]}
      onPress={() => markAsRead(item.id)}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 18,
    color: '#007bff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.text,
  },
  notificationContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
  },
  unreadNotification: {
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  readNotification: {
    borderLeftWidth: 5,
    borderLeftColor: '#ccc',
  },
  notificationContent: {
    flexDirection: 'column',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
});

export default NotificationScreen;

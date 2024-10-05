import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {Colors, FontSizes} from '../../components/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use icons as needed

const WalletScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Sample recharge options
  const rechargeOptions = [
    {
      id: 1,
      label: 'Pay ₹5000 Get ₹6500',
      description: 'No Cost EMI on UPI, Debit, Credit Card @ ₹1667/month',
      bonus: '30% BONUS',
    },
    {
      id: 2,
      label: 'Pay ₹3500 Get ₹4200',
      description: 'No Cost EMI on UPI, Debit, Credit Card @ ₹1166/month',
      bonus: '20% BONUS',
    },
    {
      id: 3,
      label: 'Pay ₹2500 Get ₹3000',
      description: 'No Cost EMI on UPI, Debit, Credit Card @ ₹834/month',
      bonus: '20% BONUS',
    },
    {
      id: 4,
      label: 'Pay ₹910 Get ₹1001',
      description: 'Recharge via UPI, Card & other payment methods',
      bonus: '10% BONUS',
    },
  ];

  const renderOption = ({item}) => (
    <TouchableOpacity
      style={[
        styles.optionCard,
        selectedOption === item.id && styles.selectedCard,
      ]}
      onPress={() => setSelectedOption(item.id)}>
      <View style={styles.optionContent}>
        <View style={styles.optionHeader}>
          <Text style={styles.optionText}>{item.label}</Text>
          <Text style={styles.bonusText}>{item.bonus}</Text>
        </View>
        <Text style={styles.optionDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ManMatters Wallet</Text>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceContent}>
          <Icon
            name="account-balance-wallet"
            size={32}
            color={Colors.primary}
          />
          <View>
            <Text style={styles.balanceLabel}>Your MM Wallet balance</Text>
            <Text style={styles.balanceAmount}>₹0</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.transactionHistory}>Transaction history</Text>
        </TouchableOpacity>
      </View>

      {/* Recharge Options */}
      <Text style={styles.sectionTitle}>
        No Cost EMI on UPI, Cards above ₹1550*
      </Text>
      <FlatList
        data={rechargeOptions}
        renderItem={renderOption}
        keyExtractor={item => item.id.toString()}
      />

      {/* Recharge Button */}
      <View style={styles.rechargeButtonContainer}>
        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.rechargeButtonText}>Pay & Recharge Wallet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
    color: Colors.text,
  },
  headerTitle: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: Colors.text,
  },
  balanceCard: {
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: FontSizes.medium,
    color: Colors.text,
  },
  balanceAmount: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  transactionHistory: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.text,
  },
  optionCard: {
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedCard: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  optionContent: {
    flexDirection: 'column',
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  optionText: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
  },
  bonusText: {
    backgroundColor: Colors.secondaryBackground,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: FontSizes.small,
    color: Colors.primary,
  },
  optionDescription: {
    fontSize: FontSizes.small,
    color: Colors.text,
  },
  rechargeButtonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  rechargeButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  rechargeButtonText: {
    color: Colors.text,
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
  },
});

export default WalletScreen;

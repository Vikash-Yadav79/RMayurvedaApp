import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Colors} from '../../components/Theme'; // Adjust the import based on your file structure

const FAQScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Sample FAQ data
  const faqs = [
    {
      question: 'What is Ayurveda?',
      answer:
        'Ayurveda is an ancient Indian system of medicine that focuses on balancing the body, mind, and spirit through natural remedies.',
    },
    {
      question: 'How do I order products?',
      answer:
        'To order products, simply browse our catalog, select the items you wish to purchase, and add them to your cart.',
    },
    {
      question: 'What is the return policy?',
      answer:
        'You can return items within 30 days of purchase, provided they are unused and in their original packaging.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can contact customer support via email at support@example.com or call us at (123) 456-7890.',
    },
    // Add more FAQs as needed
  ];

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderFAQItem = ({item, index}) => {
    const isExpanded = expandedIndex === index;

    return (
      <View style={styles.faqCard}>
        <TouchableOpacity
          onPress={() => toggleExpand(index)}
          style={styles.faqHeader}>
          <Text style={styles.question}>{item.question}</Text>
        </TouchableOpacity>
        {isExpanded && <Text style={styles.answer}>{item.answer}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <FlatList
        data={faqs}
        renderItem={renderFAQItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  faqCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    padding: 12,
  },
  faqHeader: {
    paddingVertical: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginTop: 4,
    color: Colors.text,
  },
});

export default FAQScreen;

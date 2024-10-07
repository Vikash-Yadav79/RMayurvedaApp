import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './Theme';

const testimonials = [
  {
    title: '1. Nitin Kumar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'State Infotech',
    position: 'CEO / Director',
    image:
      'https://w7.pngwing.com/pngs/688/682/png-transparent-chin-testimonial-testimonial-cheek-chin-thumbnail.png',
  },
  {
    title: '2. Manish Kumar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Mtech Solution',
    position: 'CEO / Director',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fMNCa8OuzUIQCkYbZoAc5dT0TSOGHQHRw&s',
  },
  {
    title: '3. VIkash Yadav',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Am Solution',
    position: 'CEO / Director',
    image:
      'https://e7.pngegg.com/pngimages/894/454/png-clipart-testimonial-business-company-organization-customer-corporate-company-service-thumbnail.png',
  },
];

const {width} = Dimensions.get('window');

const TestimonialScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Testimonial</Text> */}
      <Text style={styles.subHeading}>What our Customers Say</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.quoteIcon}>
              <Icon name="format-quote-close" size={24} color="#fff" />
            </View>
            <Text style={styles.title}>{testimonial.title}</Text>
            <Text style={styles.description}>{testimonial.description}</Text>
            <Image
              source={{uri: testimonial.image}}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{testimonial.name}</Text>
            <Text style={styles.position}>{testimonial.position}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
    alignItems: 'center',
    marginLeft: -10,
    marginTop: -5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#009688',
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginLeft: -40,
  },
  scrollView: {
    paddingLeft: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: width * 0.8,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 5,
    marginBottom: 5,
  },
  quoteIcon: {
    position: 'absolute',
    top: -15,
    left: 0,
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
    lineHeight: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  position: {
    fontSize: 14,
    color: '#777',
  },
});

export default TestimonialScreen;

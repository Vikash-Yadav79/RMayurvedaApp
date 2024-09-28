import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.originalPrice}>{product.originalPrice}</Text>
      <Text style={styles.discount}>{product.discount}</Text>
      <Text style={styles.reviews}>{product.rating} | {product.reviews} Reviews</Text>
      
      {/* Product Summary */}
      <Text style={styles.sectionTitle}>Product Summary</Text>
      <Text style={styles.summaryPoint}>1. Clinically tested for efficacy.</Text>
      <Text style={styles.summaryPoint}>2. Suitable for all hair types.</Text>
      <Text style={styles.summaryPoint}>3. Contains natural ingredients.</Text>
      <Text style={styles.summaryPoint}>4. No side effects reported.</Text>
      <Text style={styles.summaryPoint}>5. Results visible in 8 weeks.</Text>

      {/* How to Use Section */}
      <Text style={styles.sectionTitle}>How to Use</Text>
      <Text style={styles.subHeading}>Dosage</Text>
      <Text style={styles.dosagePoint}>1. Apply 2-3 times a week.</Text>
      <Text style={styles.dosagePoint}>2. Use on clean, dry hair.</Text>
      <Text style={styles.dosagePoint}>3. Massage gently into the scalp.</Text>
      <Text style={styles.dosagePoint}>4. Leave for 30 minutes before washing.</Text>
      <Text style={styles.dosagePoint}>5. Follow with a mild shampoo.</Text>
      
      <Text style={styles.subHeading}>Precautions</Text>
      <Text style={styles.dosagePoint}>1. For external use only.</Text>
      <Text style={styles.dosagePoint}>2. Avoid contact with eyes.</Text>
      <Text style={styles.dosagePoint}>3. Keep out of reach of children.</Text>
      <Text style={styles.dosagePoint}>4. Discontinue use if irritation occurs.</Text>
      <Text style={styles.dosagePoint}>5. Consult a doctor if allergic.</Text>

      {/* Rating and Reviews Section */}
      <Text style={styles.sectionTitle}>Rating and Reviews</Text>
      <Text style={styles.review}>⭐️⭐️⭐️⭐️☆ "This product really works wonders!" - User A</Text>
      <Text style={styles.review}>⭐️⭐️⭐️⭐️⭐️ "I've seen great results after a month!" - User B</Text>
      <Text style={styles.review}>⭐️⭐️⭐️☆☆ "Good but could be improved." - User C</Text>

      {/* Common Questions and Answers Section */}
      <Text style={styles.sectionTitle}>Common Questions</Text>
      <Text style={styles.question}>Q: How long does it take to see results?</Text>
      <Text style={styles.answer}>A: Most users see results in about 8 weeks.</Text>
      <Text style={styles.question}>Q: Is this product suitable for all hair types?</Text>
      <Text style={styles.answer}>A: Yes, it is formulated for all hair types.</Text>

      {/* Buy and Add to Cart Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Buy action */}}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Add to Cart action */}}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discount: {
    fontSize: 14,
    color: '#27ae60',
  },
  reviews: {
    fontSize: 12,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  summaryPoint: {
    fontSize: 14,
    marginVertical: 5,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dosagePoint: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 10,
  },
  review: {
    fontSize: 14,
    marginVertical: 5,
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  answer: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#140f1f',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    marginBottom:30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
});

export default ProductDetailScreen
;

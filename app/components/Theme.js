import {Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('window').width;

// Define a centralized theme for colors, font sizes, font families, and component styles.

const Colors = {
  primary: '#3498db', // Primary color used for main buttons, links, etc.
  secondary: '#FFFFFF', // Secondary color for highlights, accents.
  accent: '#FEDB71', // Accent color for alerts, warnings, or special attention.
  background: '#FCFAF8', // Background color for screens, containers, etc.
  text: '#140F1F', // Default text color.
  border: '#bdc3c7', // Border color for inputs, cards, etc.
  placeholder: '#95a5a6', // Placeholder text color for inputs.
  success: '#27ae60', // Success state color for notifications.
  warning: '#f39c12', // Warning state color for alerts.
  error: '#e74c3c', // Error state color for alerts or messages.
  cardBackground: '#fff', // Background color for cards.
  shadow: '#000', // Shadow color for card elevation.
  discount: '#FF6347', // Color for discount percentage text.
  originalPrice: '#888', // Color for original price text with strikethrough.
  review: '#888', // Color for review text.
  buttonBackground: '#140f1f', // Background color for buttons.
};

const FontSizes = {
  small: 12, // Small font size for minor text, captions, etc.
  medium: 16, // Default font size for regular text.
  large: 20, // Large font size for headings or important text.
  xLarge: 32, // Extra large font size for large titles.
  xxLarge: 44, // Extra extra large font size for special emphasis.
};

const FontFamily = {
  regular: 'Roboto-Regular', // Regular font style for standard text.
  medium: 'Roboto-Medium', // Medium font style for slight emphasis.
  bold: 'Roboto-Bold', // Bold font style for headings or strong emphasis.
  italic: 'Roboto-Italic', // Italic font style for special emphasis.
  boldItalic: 'Roboto-BoldItalic',
};

// Additional styles for components like cards, buttons, descriptions, and more.
const ComponentStyles = {
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  viewAllText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: FontSizes.small,
    marginRight: 13,
  },
  productList: {
    paddingLeft: 15,
  },
  productCard: {
    width: 160,
    marginRight: 8,
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 10,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    marginVertical: 8,
    //   marginTop:-
  },
  productImage: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 8,
  },
  productName: {
    fontSize: FontSizes.small,
    fontWeight: '400',
    color: Colors.text,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: FontSizes.small,
    fontWeight: 'bold',
    color: Colors.text,
  },
  originalPrice: {
    fontSize: FontSizes.small,
    color: Colors.originalPrice,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  discountPercent: {
    fontSize: FontSizes.small,
    color: Colors.discount,
    marginLeft: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: FontSizes.small,
    fontWeight: '500',
    marginLeft: 4,
    color: Colors.text,
  },
  reviewText: {
    fontSize: 10,
    color: Colors.review,
    marginLeft: 4,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: Colors.accent,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
  },
};

const ComboCommonStyles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  bestsellerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: -10,
    marginTop: -5,
  },
  viewAllText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  productList: {
    paddingHorizontal: 0,
  },
  carousel: {
    width: screenWidth,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    // shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
    width: screenWidth * 0.9, // Set width to 80% of screen
    height: 240,
    marginLeft: 1, // Add space between cards
    marginTop: 5,
    borderColor: '#ddd', // Add border color
    borderWidth: 1, // Add border width
    marginRight: 8,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#000', // Changed price color to black
    fontWeight: 'bold',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  discount: {
    fontSize: 14,
    color: '#4CAF50',
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starSymbol: {
    fontSize: 16,
    color: Colors.accent, // Star color set to yellow
    marginRight: 5,
  },
  productRating: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000', // Rating number color set to black
  },
  productReviews: {
    fontSize: 13,
    color: '#999',
    marginLeft: 5,
  },
  addToCartButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    position: 'absolute', // Positioned absolutely within the card
    bottom: 15, // Distance from the bottom
    right: 15, // Distance from the right
    width: 100, // Fixed width for the button
  },
};
export {Colors, FontSizes, FontFamily, ComponentStyles, ComboCommonStyles};

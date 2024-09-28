export interface Product {
    id: string;          // Product ID, should be a string
    name: string;        // Name of the product
    price: number;       // Current price of the product
    originalPrice: number; // Original price of the product (before discount)
    description: string;   // Short description of the product
    rating: number;      // Rating of the product (e.g., 4.5 stars)
    reviews: number;     // Number of reviews the product has received
    images: string[];    // Array of image URLs for the product
  }
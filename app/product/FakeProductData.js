// const faker = require('faker'); // Ensure you have faker.js installed: npm install faker

// // Function to generate fake product data
// export function FakeProductData(numProducts = 10) {
//   const fakeProducts = [];

//   for (let i = 0; i < numProducts; i++) {
//     const fakeProduct = {
//       id: i + 1,
//       name: `Product ${i + 1} - ${faker.commerce.productName()}`,
//       price: `${faker.commerce.price(100, 1000, 0)}`,
//       originalPrice: `${faker.commerce.price(1200, 2000, 0)}`,
//       discount: `${Math.floor(Math.random() * 50 + 10)}`,
//       rating: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)),
//       reviews: Math.floor(Math.random() * 500 + 1),
//       images: [
//         faker.image.imageUrl(),
//         faker.image.imageUrl(),
//         faker.image.imageUrl(),
//       ],
//       summary: [
//         'Clinically tested for efficacy.',
//         'Suitable for all hair types.',
//         'Contains natural ingredients.',
//         'No side effects reported.',
//         'Results visible in 8 weeks.',
//       ],
//       dosage: [
//         'Apply 2-3 times a week.',
//         'Use on clean, dry hair.',
//         'Massage gently into the scalp.',
//         'Leave for 30 minutes before washing.',
//         'Follow with a mild shampoo.',
//       ],
//       precautions: [
//         'For external use only.',
//         'Avoid contact with eyes.',
//         'Keep out of reach of children.',
//         'Discontinue use if irritation occurs.',
//         'Consult a doctor if allergic.',
//       ],
//       reviews: [
//         {
//           rating: 4,
//           text: 'This product really works wonders!',
//           user: faker.name.firstName(),
//         },
//         {
//           rating: 5,
//           text: "I've seen great results after a month!",
//           user: faker.name.firstName(),
//         },
//         {
//           rating: 3,
//           text: 'Good but could be improved.',
//           user: faker.name.firstName(),
//         },
//       ],
//       commonQuestions: [
//         {
//           question: 'How long does it take to see results?',
//           answer: 'Most users see results in about 8 weeks.',
//         },
//         {
//           question: 'Is this product suitable for all hair types?',
//           answer: 'Yes, it is formulated for all hair types.',
//         },
//       ],
//     };

//     fakeProducts.push(fakeProduct);
//   }

//   return fakeProducts;
// }

export const productData = [
  {
    id: 1,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '949',
    originalPrice: '1398',
    discount: '32',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 2,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '899',
    originalPrice: '1198',
    discount: '24',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
  {
    id: 3,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '949',
    originalPrice: '1398',
    discount: '32',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 4,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '899',
    originalPrice: '1198',
    discount: '24',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
  {
    id: 5,
    name: 'Stage 1 Hairloss Kit for Genetics',
    price: '949',
    originalPrice: '1398',
    discount: '32',
    rating: 4.5,
    reviews: 475,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335738156/IV/OX/AS/19172632/fever-ayurvedic-medicine-500x500.jpeg',
    ],
  },
  {
    id: 6,
    name: 'Stage 2 Hair Regrowth Kit',
    price: '899',
    originalPrice: '1198',
    discount: '24',
    rating: 4.3,
    reviews: 913,
    images: [
      'https://5.imimg.com/data5/WV/IH/GLADMIN-65909823/chandra-prabha-batti-250x250.jpg',
    ],
  },
];

export const ComboProductData = [
  {
    id: '1',
    name: 'Biotin Hair Gummies (30N) No Sugar',
    price: '₹499',
    originalPrice: '₹599',
    discount: '16',
    rating: 4.5,
    images: [
      'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    ],
    reviews: 2488,
    medicine: [
      {
        id: '5',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '6',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '7',
        name: 'Vitamin C Serum',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
        ],
        reviews: 500,
      },
      {
        id: '8',
        name: 'Stage 2 Hair Regrowth Kit',
        price: '₹899',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
        ],
        reviews: 912,
      },
    ],
  },
  {
    id: '2',
    name: 'Anti Hair Fall Shampoo (200ml)',
    price: '₹399',
    originalPrice: '₹499',
    discount: '20',
    rating: 4.2,
    images: [
      'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    ],
    reviews: 786,
    medicine: [
      {
        id: '5',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '6',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '7',
        name: 'Vitamin C Serum',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
        ],
        reviews: 500,
      },
      {
        id: '8',
        name: 'Stage 2 Hair Regrowth Kit',
        price: '₹899',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
        ],
        reviews: 912,
      },
    ],
  },
  {
    id: '3',
    name: 'Stage 2 Hair Regrowth Kit',
    price: '₹899',
    originalPrice: '₹999',
    discount: '10',
    rating: 4.8,
    images: [
      'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
    ],
    reviews: 912,
    medicine: [
      {
        id: '5',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '6',
        name: 'Anti Hair Fall Shampoo (200ml)',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/UN/EY/JC/SELLER-8711974/dabur-10ml-and-30ml-bottle-pudin-hara-active-ayurvedic-medicine.jpg',
        ],
        reviews: 786,
      },
      {
        id: '7',
        name: 'Vitamin C Serum',
        price: '₹399',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://upakarma.com/wp-content/uploads/2024/03/SR-30g-Afgani-Kesar-1g.webp',
        ],
        reviews: 500,
      },
      {
        id: '8',
        name: 'Stage 2 Hair Regrowth Kit',
        price: '₹899',
        originalPrice: '₹599',
        discount: '16',
        rating: 4.5,
        images: [
          'https://5.imimg.com/data5/SELLER/Default/2023/2/LG/ZX/HR/1238425/bipolar-disorder-healer-kit-500x500.jpg',
        ],
        reviews: 912,
      },
    ],
  },
  // Add more products as needed...
];

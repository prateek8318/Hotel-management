export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  images: string[];
  description: string;
  amenities: string[];
  features: string[];
  size: string;
  bedType: string;
  maxOccupancy: number;
  view: string;
  special?: string;
  rating: number;
  reviews: number;
}

export const roomsData: Room[] = [
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite',
    type: 'Suite',
    price: 12000,
    images: [
      'https://www.theleela.com/prod/content/assets/aio-banner/dekstop/Executive%20Suite_1920x950_2.webp?VersionId=crLOhRJKX5CSnx_4f._c2rClRflToP_2',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-new-delhi/tondelhi_25july24/accommodation/deluxe-suite/new/820x646/deluxe_suite-820x646-01.jpg?w=724&hash=9beffe885ca2da304f1227d6454dcd63',
      'https://images.unsplash.com/photo-1611892440504-42a792e24a32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience ultimate luxury in our Deluxe Suite featuring modern amenities and breathtaking city views. This spacious suite offers a perfect blend of comfort and elegance for discerning travelers.',
    amenities: [
      'King Size Bed',
      'Air Conditioning',
      'Mini Bar',
      'Safe Deposit Box',
      'LED TV with Netflix',
      'High-Speed WiFi',
      'Coffee/Tea Maker',
      'Work Desk',
      'Jacuzzi',
      'Rain Shower',
      'Bathrobes & Slippers',
      'Premium Toiletries'
    ],
    features: [
      '65 sqm spacious area',
      'Separate living room',
      'City view balcony',
      '24/7 room service',
      'Complimentary breakfast'
    ],
    size: '65 sqm',
    bedType: 'King Size Bed',
    maxOccupancy: 3,
    view: 'City View',
    special: 'Most Popular',
    rating: 4.8,
    reviews: 324
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    type: 'Room',
    price: 8000,
    images: [
      'https://www.theleela.com/prod/content/assets/aio-banner/dekstop/Executive%20Suite_1920x950_3.webp?VersionId=LUsw9xEuyoDpfg0Ne00l1n8HKFdeW1Lv',
      'https://www.theleela.com/prod/content/assets/aio-banner/dekstop/Executive%20Suite_1920x950_2.webp?VersionId=crLOhRJKX5CSnx_4f._c2rClRflToP_2',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Our Executive Room combines comfort with functionality, perfect for business travelers. Enjoy modern amenities and a peaceful environment for work and relaxation.',
    amenities: [
      'Queen Size Bed',
      'Air Conditioning',
      'Mini Bar',
      'Safe Deposit Box',
      'LED TV',
      'High-Speed WiFi',
      'Coffee/Tea Maker',
      'Work Desk',
      'Rain Shower',
      'Bathrobes & Slippers',
      'Premium Toiletries'
    ],
    features: [
      '45 sqm comfortable space',
      'Work-friendly desk',
      'Partial city view',
      'Express check-in',
      'Complimentary breakfast'
    ],
    size: '45 sqm',
    bedType: 'Queen Size Bed',
    maxOccupancy: 2,
    view: 'Partial City View',
    rating: 4.6,
    reviews: 256
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    type: 'Suite',
    price: 15000,
    images: [
      'https://hotelroyalsignature.com/wp-content/uploads/2023/08/family-suite-room-interior-deluxe-twin-2.jpg',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/589845128.jpg?k=d18ada29e94660d6549125bd2da34e0cfb1d3594dc5614cfbee5cffcd2b76d66&o=',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9WjKr68wfMIPEow_0joxtBVbWjDoANbVuQ&s'
    ],
    description: 'Ideal for families, our spacious Family Suite offers multiple rooms and child-friendly amenities while maintaining the luxury standards DreamStay is known for.',
    amenities: [
      'King Size Bed + Twin Beds',
      'Air Conditioning',
      'Mini Bar',
      'Safe Deposit Box',
      'LED TV with Netflix',
      'High-Speed WiFi',
      'Coffee/Tea Maker',
      'Work Desk',
      'Bathtub & Shower',
      'Bathrobes & Slippers',
      'Premium Toiletries',
      'Kids Welcome Kit'
    ],
    features: [
      '85 sqm family space',
      'Separate bedroom for kids',
      'Garden view balcony',
      'Kids activity area',
      'Complimentary breakfast for all'
    ],
    size: '85 sqm',
    bedType: 'King + Twin Beds',
    maxOccupancy: 5,
    view: 'Garden View',
    rating: 4.9,
    reviews: 189
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    type: 'Suite',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618773924128-363a4789b5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490364888-a35d2e0b78e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The pinnacle of luxury, our Presidential Suite offers unparalleled comfort, exclusive amenities, and personalized service for the most discerning guests.',
    amenities: [
      'California King Bed',
      'Air Conditioning',
      'Premium Mini Bar',
      'Safe Deposit Box',
      'Smart TV with Netflix',
      'High-Speed WiFi',
      'Coffee/Tea Maker',
      'Executive Work Desk',
      'Private Jacuzzi',
      'Steam Room',
      'Rain Shower',
      'Designer Bathrobes',
      'Luxury Toiletries',
      'Wine Cooler',
      'Private Butler Service'
    ],
    features: [
      '120 sqm luxury space',
      'Separate dining area',
      'Panoramic city view',
      'Private elevator access',
      '24/7 personal butler',
      'Complimentary spa access'
    ],
    size: '120 sqm',
    bedType: 'California King Bed',
    maxOccupancy: 4,
    view: 'Panoramic City View',
    special: 'Luxury Choice',
    rating: 4.9,
    reviews: 98
  }
];

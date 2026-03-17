// Application constants
export const APP_CONFIG = {
  NAME: 'DreamStay Hotel',
  VERSION: '1.0.0',
  DESCRIPTION: 'Luxury Hotel Management System',
  PHONE: '+91 98765 43210',
  EMAIL: 'info@dreamstay.in',
  ADDRESS: 'New Delhi, India',
} as const;

export const ROOM_CATEGORIES = {
  STANDARD: 'standard',
  DELUXE: 'deluxe',
  SUITE: 'suite',
  PRESIDENTIAL: 'presidential',
} as const;

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
} as const;

export const API_ENDPOINTS = {
  ROOMS: '/api/rooms',
  BOOKINGS: '/api/bookings',
  CONTACT: '/api/contact',
  AVAILABILITY: '/api/availability',
} as const;

export const VALIDATION = {
  MIN_ADULTS: 1,
  MAX_ADULTS: 6,
  MAX_CHILDREN: 4,
  MIN_STAY_DAYS: 1,
  MAX_STAY_DAYS: 30,
} as const;

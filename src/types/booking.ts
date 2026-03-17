// Booking related types
export interface BookingData {
  checkin: string;
  checkout: string;
  adults: string;
  children: string;
  roomId?: string;
  specialRequests?: string;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkin: Date;
  checkout: Date;
  adults: number;
  children: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  specialRequests?: string;
}

export interface BookingFormErrors {
  checkin?: string;
  checkout?: string;
  adults?: string;
  children?: string;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
}

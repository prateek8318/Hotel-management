// Room related types
export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  images: string[];
  features: string[];
  special?: string;
  description?: string;
  maxGuests: number;
  size: string;
  bedType: string;
  amenities: string[];
  available: boolean;
}

export interface RoomCardProps {
  roomId: string;
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  features: string[];
  icon?: React.ReactNode;
  special?: string;
}

export interface RoomFilter {
  type?: string;
  priceRange?: [number, number];
  amenities?: string[];
  available?: boolean;
}

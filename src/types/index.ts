// Export all types from central location
export * from './room';
export * from './booking';

// Common types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export type UserRole = 'guest' | 'admin' | 'staff';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

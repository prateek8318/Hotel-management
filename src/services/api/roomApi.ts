import { Room, ApiResponse, PaginatedResponse } from '../../types';
import { API_ENDPOINTS } from '../../lib/constants/appConstants';

// Mock API service for rooms
class RoomApiService {
  private baseUrl: string = API_ENDPOINTS.ROOMS;

  async getAllRooms(): Promise<ApiResponse<Room[]>> {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [], // Will be populated with actual room data
          message: 'Rooms fetched successfully',
          success: true
        });
      }, 1000);
    });
  }

  async getRoomById(id: string): Promise<ApiResponse<Room>> {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {} as Room, // Will be populated with actual room data
          message: 'Room fetched successfully',
          success: true
        });
      }, 500);
    });
  }

  async getAvailableRooms(
    checkin: string,
    checkout: string,
    adults: number,
    children: number = 0
  ): Promise<ApiResponse<Room[]>> {
    // Mock API call for availability check
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [], // Will be populated with available rooms
          message: 'Available rooms fetched successfully',
          success: true
        });
      }, 1500);
    });
  }

  async searchRooms(filters: {
    type?: string;
    priceRange?: [number, number];
    amenities?: string[];
  }): Promise<ApiResponse<PaginatedResponse<Room>>> {
    // Mock API call for room search
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            items: [],
            total: 0,
            page: 1,
            limit: 10,
            hasNext: false,
            hasPrev: false
          },
          message: 'Rooms searched successfully',
          success: true
        });
      }, 1000);
    });
  }
}

export const roomApiService = new RoomApiService();

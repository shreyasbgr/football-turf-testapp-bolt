export interface Turf {
  id: string;
  name: string;
  location: string;
  pricePerHour: number;
  description: string;
  imageUrl: string;
  slots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface Booking {
  id: string;
  turfId: string;
  userId: string;
  date: string;
  slots: string[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
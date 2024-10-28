import { Turf } from '../types';

export const mockTurfs: Turf[] = [
  {
    id: '1',
    name: 'Green Field Arena',
    location: 'Downtown Sports Complex',
    pricePerHour: 1200,
    description: 'FIFA certified artificial turf with floodlights',
    imageUrl: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3',
    slots: [
      { id: '1', startTime: '06:00', endTime: '07:00', isBooked: false },
      { id: '2', startTime: '07:00', endTime: '08:00', isBooked: false },
      { id: '3', startTime: '08:00', endTime: '09:00', isBooked: true },
      { id: '4', startTime: '09:00', endTime: '10:00', isBooked: false },
    ]
  },
  {
    id: '2',
    name: 'Urban Kicks',
    location: 'City Center Mall',
    pricePerHour: 1500,
    description: 'Premium indoor football facility with air conditioning',
    imageUrl: 'https://images.unsplash.com/photo-1524015368236-cf67f6b6f1f1?ixlib=rb-4.0.3',
    slots: [
      { id: '1', startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: '2', startTime: '11:00', endTime: '12:00', isBooked: false },
      { id: '3', startTime: '12:00', endTime: '13:00', isBooked: false },
      { id: '4', startTime: '13:00', endTime: '14:00', isBooked: true },
    ]
  }
];
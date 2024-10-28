import React from 'react';
import { Link } from 'react-router-dom';
import { Turf } from '../types';

interface TurfCardProps {
  turf: Turf;
}

export const TurfCard: React.FC<TurfCardProps> = ({ turf }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-200">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={turf.imageUrl} 
          alt={turf.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{turf.name}</h3>
        <p className="mt-2 text-gray-600">{turf.location}</p>
        <p className="mt-2 text-lg font-bold text-green-600">₹{turf.pricePerHour}/hour</p>
        <div className="mt-4">
          <Link 
            to={`/turf/${turf.id}`}
            className="inline-block w-full text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
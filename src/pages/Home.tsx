import React from 'react';
import { TurfCard } from '../components/TurfCard';
import { useAuthStore } from '../store/authStore';
import { mockTurfs } from '../data/mockData';

const Home: React.FC = () => {
  const user = useAuthStore(state => state.user);

  return (
    <div className="py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {user?.isAdmin ? 'Manage Turfs' : 'Available Turfs'}
          </h1>
          
          {user?.isAdmin && (
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Add New Turf
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTurfs.map(turf => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
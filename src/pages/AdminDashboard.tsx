import React, { useState } from 'react';
import { AdminTurfForm } from '../components/AdminTurfForm';
import { TurfCard } from '../components/TurfCard';
import { Turf } from '../types';

const AdminDashboard: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [turfs, setTurfs] = useState<Turf[]>([]);

  const handleSubmit = (turfData: Partial<Turf>) => {
    const newTurf: Turf = {
      ...turfData,
      id: Math.random().toString(36).substr(2, 9),
      slots: [],
    } as Turf;

    setTurfs([...turfs, newTurf]);
    setShowAddForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showAddForm ? 'Cancel' : 'Add New Turf'}
        </button>
      </div>

      {showAddForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Add New Turf</h2>
          <AdminTurfForm onSubmit={handleSubmit} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {turfs.map(turf => (
          <TurfCard key={turf.id} turf={turf} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
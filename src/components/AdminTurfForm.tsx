import React, { useState } from 'react';
import { Turf } from '../types';

interface AdminTurfFormProps {
  turf?: Turf;
  onSubmit: (turfData: Partial<Turf>) => void;
}

export const AdminTurfForm: React.FC<AdminTurfFormProps> = ({ turf, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: turf?.name || '',
    location: turf?.location || '',
    pricePerHour: turf?.pricePerHour || 0,
    description: turf?.description || '',
    imageUrl: turf?.imageUrl || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Turf Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price per Hour (₹)
        </label>
        <input
          type="number"
          value={formData.pricePerHour}
          onChange={(e) => setFormData(prev => ({ ...prev, pricePerHour: Number(e.target.value) }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {turf ? 'Update Turf' : 'Add Turf'}
      </button>
    </form>
  );
};
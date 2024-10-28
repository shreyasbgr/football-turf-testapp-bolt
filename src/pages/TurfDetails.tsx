import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingForm } from '../components/BookingForm';
import { mockTurfs } from '../data/mockData';

const TurfDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showPayment, setShowPayment] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const turf = mockTurfs.find(t => t.id === id);

  if (!turf) {
    return <div>Turf not found</div>;
  }

  const handleBooking = (date: Date, selectedSlots: string[]) => {
    const amount = selectedSlots.length * turf.pricePerHour;
    setTotalAmount(amount);
    setShowPayment(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={turf.imageUrl} 
          alt={turf.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{turf.name}</h1>
          <p className="text-gray-600 mb-4">{turf.description}</p>
          <p className="text-green-600 font-bold mb-6">₹{turf.pricePerHour}/hour</p>

          {!showPayment ? (
            <BookingForm turf={turf} onSubmit={handleBooking} />
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
                <p className="text-gray-600">Total Amount: ₹{totalAmount}</p>
              </div>
              
              <button 
                onClick={() => {/* Integrate UPI payment here */}}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600"
              >
                Pay with UPI
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { TimeSlot, Turf } from '../types';
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  turf: Turf;
  onSubmit: (date: Date, selectedSlots: string[]) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ turf, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const handleSlotSelection = (slotId: string) => {
    setSelectedSlots(prev => 
      prev.includes(slotId)
        ? prev.filter(id => id !== slotId)
        : [...prev, slotId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedDate, selectedSlots);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          minDate={new Date()}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Available Slots
        </label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {turf.slots.map((slot: TimeSlot) => (
            <button
              key={slot.id}
              type="button"
              disabled={slot.isBooked}
              onClick={() => handleSlotSelection(slot.id)}
              className={`
                p-2 rounded-md text-sm
                ${slot.isBooked 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : selectedSlots.includes(slot.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              {slot.startTime} - {slot.endTime}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={selectedSlots.length === 0}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-300"
        >
          Book Selected Slots
        </button>
      </div>
    </form>
  );
};
import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AddDestination = ({ isOpen, onClose, onAdd }) => {
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [bestMonth, setBestMonth] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !description || !photoURL || !bestMonth || !category) return;

    onAdd({ destination, description, photoURL, bestMonth, category });
    setDestination('');
    setDescription('');
    setPhotoURL('');
    setBestMonth('');
    setCategory('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Add Destination</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <GooglePlacesAutocomplete
            selectProps={{
              value: destination ? { label: destination, value: destination } : null,
              onChange: (v) => setDestination(v.label),
            }}
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Why do you want to go there?"
            required
          />

          <select
            value={bestMonth}
            onChange={(e) => setBestMonth(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a month</option>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            {["Urban", "Beach", "Natural Wonder", "Cultural", "Adventure"].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/photo.jpg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add to Wishlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
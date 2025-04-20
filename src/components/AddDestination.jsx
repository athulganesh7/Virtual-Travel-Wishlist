import { TextField } from "@mui/material";
import React, { useState } from "react";

const AddDestination = ({ isOpen, onClose,onAdd }) => {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !description) return;

    onAdd({ destination, description, photoURL });
    setDestination("");
    setDescription("");
    setPhotoURL("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{height:'100vh' , width:'100%'}} className="fixed  inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm transform transition-all duration-300 scale-100 opacity-0 animate-fade-in">
    

      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Add Destination</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Name
            </label> */}
            {/* <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g. Paris"
              required
            /> */}
            <TextField  onChange={(e) => setDestination(e.target.value)} className="w-full" id="outlined-basic" label="Destination name" variant="outlined" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Why do you want to go there?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL (optional)
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

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

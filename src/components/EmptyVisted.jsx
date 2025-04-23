import React from 'react'
import { MapPin,Plus } from 'lucide-react';

const EmptyVisted = () => {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <MapPin className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No visited places yet</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Start adding places you've visited to keep track of your travel memories and experiences.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto">
          <Plus className="mr-2 h-5 w-5" />
          Add Your First Memory
        </button>
      </div>
    );
  };

export default EmptyVisted

import React from 'react'
import { MapPin, Plus , CheckSquare } from 'lucide-react'
// Visited Hero Section
const VistedHero = ({ totalDestinations, totalCountries }) => {
  return (
    <div className="relative bg-green-700 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/api/placeholder/1600/500')",
          opacity: 0.3
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <CheckSquare className="h-12 w-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Places I've Visited</h1>
          <p className="text-xl mb-6">A collection of memories from my travels around the world.</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{totalDestinations}</div>
              <div className="text-green-200">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{totalCountries}</div>
              <div className="text-green-200">Countries</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded-md flex items-center justify-center">
              <Plus className="mr-2 h-5 w-5" />
              Add New Memory
            </button>
            <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              View Travel Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VistedHero
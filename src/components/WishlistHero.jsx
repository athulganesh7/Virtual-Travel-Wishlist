import { Heart, MapPin, Plus } from 'lucide-react'
import React from 'react'


function WishlistHero() {
  return (
    <>
    <div className="relative bg-pink-700 text-white">
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
            <Heart className="h-12 w-12 text-pink-400" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Travel Wishlist</h1>
          <p className="text-xl mb-8">Keep track of all the amazing places you dream of visiting.</p>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md flex items-center justify-center">
              <Plus className="mr-2 h-5 w-5" />
              Add New Destination
            </button>
            <button className="bg-white text-pink-700 hover:bg-gray-100 px-6 py-3 rounded-md flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              View on Map
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WishlistHero
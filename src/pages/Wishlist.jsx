import React, { useState } from 'react'
import {  Filter  } from 'lucide-react';

import WishlistFilters from '../components/WishlistFilters';
import WishlistHero from '../components/WishlistHero';
import WishlistGrid from '../components/WishlistGrid';
import EmptyWishlist from '../components/EmptyWishlist';
import Header from '../components/Header';
import Footer from '../components/Footer';




const wishlistData = [
  {
    id: 1,
    name: "Kyoto, Japan",
    image: "/api/placeholder/400/250",
    description: "Ancient temples, traditional gardens, and stunning cherry blossoms.",
    priority: "High",
    bestTimeToVisit: "Spring (March-April)",
    category: "Cultural",
    notes: "Visit during cherry blossom season. Explore Fushimi Inari Shrine and Arashiyama Bamboo Grove."
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "/api/placeholder/400/250",
    description: "Breathtaking sunsets, white-washed buildings, and crystal-clear waters.",
    priority: "Medium",
    bestTimeToVisit: "Late Spring or Early Fall",
    category: "Beach",
    notes: "Stay in Oia for the best sunset views. Visit the black sand beaches."
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "/api/placeholder/400/250",
    description: "Ancient Incan city set high in the Andes Mountains.",
    priority: "High",
    bestTimeToVisit: "May to September",
    category: "Adventure",
    notes: "Book Inca Trail permits well in advance. Consider a guided tour."
  },
  {
    id: 4,
    name: "Safari in Tanzania",
    image: "/api/placeholder/400/250",
    description: "Witness the Great Migration across the Serengeti.",
    priority: "Medium",
    bestTimeToVisit: "June to October",
    category: "Wildlife",
    notes: "Visit Ngorongoro Crater and Serengeti National Park. Try to time visit with the wildebeest migration."
  },
  {
    id: 5,
    name: "Northern Lights in Iceland",
    image: "/api/placeholder/400/250",
    description: "Spectacular display of natural lights in the night sky.",
    priority: "Low",
    bestTimeToVisit: "September to March",
    category: "Natural Wonder",
    notes: "Stay at least a week to increase chances of seeing the aurora. Rent a car to chase the lights."
  },
  {
    id: 6,
    name: "New York City, USA",
    image: "/api/placeholder/400/250",
    description: "Iconic skyline, Broadway shows, and diverse culture.",
    priority: "Medium",
    bestTimeToVisit: "Spring or Fall",
    category: "Urban",
    notes: "Get the New York City Pass for attractions. Explore different neighborhoods."
  }
];



 export default  function Wishlist() {

  const [items, setItems] = useState(wishlistData);

 
 
  
  return (
    <>
     
  

  <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <WishlistHero />
        <WishlistFilters />
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">My Wishlist ({items.length}) </h2>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Filter className="h-5 w-5 mr-2" />
                Additional Filters
              </button>
            </div>
            
            {items.length > 0 ? (
              <WishlistGrid items={items} />
            ) : (
              <EmptyWishlist />
            )}
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Need Inspiration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Trending Destinations</h3>
                <p className="text-gray-600 mb-4">Explore places that are popular with other travelers right now.</p>
                <a href="/destinations/trending" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Trending →
                </a>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Season's Best</h3>
                <p className="text-gray-600 mb-4">Discover destinations that are perfect to visit during this season.</p>
                <a href="/destinations/seasonal" className="text-green-600 hover:text-green-800 font-medium">
                  See Seasonal Picks →
                </a>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Hidden Gems</h3>
                <p className="text-gray-600 mb-4">Find lesser-known but amazing destinations to add to your wishlist.</p>
                <a href="/destinations/hidden-gems" className="text-purple-600 hover:text-purple-800 font-medium">
                  Explore Hidden Gems →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>



   





    </>
  )
}


import React from 'react'
import { useState } from 'react';
import {   Filter,  Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VistedHero from '../components/VistedHero';
import TravelStates from '../components/TravelStates';
import VistedFilters from '../components/VistedFilters';
import VistedGrid from '../components/VistedGrid';
import EmptyVisted from '../components/EmptyVisted'

// Sample visited places data
const visitedPlacesData = [
  {
    id: 1,
    name: "Paris, France",
    image: "/api/placeholder/400/250",
    description: "The city of lights with iconic landmarks and romantic atmosphere.",
    visitDate: "June 2023",
    rating: 5,
    category: "Urban",
    highlights: "Visited the Eiffel Tower at sunset, explored the Louvre Museum, enjoyed pastries at local bakeries.",
    photos: 24,
    memories: "The view from Montmartre at dusk was breathtaking. Met some lovely locals who showed us hidden cafés.",
    wouldRecommend: true
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "/api/placeholder/400/250",
    description: "Tropical paradise with beautiful beaches and rich culture.",
    visitDate: "August 2022",
    rating: 4,
    category: "Beach",
    highlights: "Explored rice terraces in Ubud, surfed at Kuta Beach, watched traditional dance performances.",
    photos: 42,
    memories: "Waking up to the sound of waves every morning. The local food was incredibly flavorful.",
    wouldRecommend: true
  },
  {
    id: 3,
    name: "Grand Canyon, USA",
    image: "/api/placeholder/400/250",
    description: "One of the world's most spectacular natural wonders.",
    visitDate: "May 2024",
    rating: 5,
    category: "Natural Wonder",
    highlights: "Hiked Bright Angel Trail, watched sunrise at Mather Point, took a helicopter tour.",
    photos: 36,
    memories: "The sheer scale of the canyon was humbling. The colors during sunrise were indescribable.",
    wouldRecommend: true
  },
  {
    id: 4,
    name: "Rome, Italy",
    image: "/api/placeholder/400/250",
    description: "Ancient ruins, art, and amazing food in the Eternal City.",
    visitDate: "October 2023",
    rating: 5,
    category: "Cultural",
    highlights: "Toured the Colosseum, visited Vatican City, tossed a coin in the Trevi Fountain.",
    photos: 58,
    memories: "Getting lost in the narrow streets and finding the most incredible small restaurant. The pasta was divine!",
    wouldRecommend: true
  },
  {
    id: 5,
    name: "Bangkok, Thailand",
    image: "/api/placeholder/400/250",
    description: "Vibrant city with ornate shrines, bustling markets, and amazing street food.",
    visitDate: "January 2022",
    rating: 3,
    category: "Urban",
    highlights: "Visited the Grand Palace, explored floating markets, tried various street foods.",
    photos: 29,
    memories: "The contrast between ancient temples and modern skyscrapers. The city never sleeps!",
    wouldRecommend: false
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    image: "/api/placeholder/400/250",
    description: "Stunning coastal city with Table Mountain as a backdrop.",
    visitDate: "March 2024",
    rating: 5,
    category: "Adventure",
    highlights: "Hiked Table Mountain, visited Robben Island, drove along Chapman's Peak.",
    photos: 47,
    memories: "The view from the top of Table Mountain was unforgettable. The local wines were excellent.",
    wouldRecommend: true
  }
];
export default function Visited() {
  const [items, setItems] = useState(visitedPlacesData);
  
  // Calculate stats
  const totalDestinations = items.length;
  const uniqueCountries = new Set(items.map(item => item.name.split(',')[1]?.trim())).size;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <VistedHero totalDestinations={totalDestinations} totalCountries={uniqueCountries} />
        <TravelStates />
        <VistedFilters />
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">My Travel Memories ({items.length})</h2>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Filter className="h-5 w-5 mr-2" />
                Additional Filters
              </button>
            </div>
            
            {items.length > 0 ? (
              <VistedGrid items={items} />
            ) : (
              <EmptyVisted />
            )}
          </div>
        </section>
        
        {/* Memory Albums Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">My Travel Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 text-white rounded-lg overflow-hidden relative group">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="European Adventure" 
                  className="w-full h-48 object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">European Adventure</h3>
                  <p className="text-gray-300">Summer 2023</p>
                  <div className="mt-2 text-sm">4 destinations</div>
                </div>
              </div>
              
              <div className="bg-gray-800 text-white rounded-lg overflow-hidden relative group">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="Asian Exploration" 
                  className="w-full h-48 object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">Asian Exploration</h3>
                  <p className="text-gray-300">Winter 2022</p>
                  <div className="mt-2 text-sm">3 destinations</div>
                </div>
              </div>
              
              <div className="bg-gray-800 text-white rounded-lg overflow-hidden relative group">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="Natural Wonders" 
                  className="w-full h-48 object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">Natural Wonders</h3>
                  <p className="text-gray-300">Various trips</p>
                  <div className="mt-2 text-sm">5 destinations</div>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 h-48 text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors">
                <Plus className="h-8 w-8 mb-2" />
                <p className="font-medium">Create New Collection</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Travel Statistics Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">My Travel Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Places Visited by Category</h3>
                <div className="h-64 flex items-center justify-center">
                  {/* Placeholder for a chart */}
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500">Category Distribution Chart</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Travel Timeline</h3>
                <div className="h-64 flex items-center justify-center">
                  {/* Placeholder for a chart */}
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500">Yearly Travel Timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}













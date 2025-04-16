import React from 'react'
import { ChevronDown, Search } from 'lucide-react';
// Visited Filters Section
const VistedFilters = () => {
  return (
    <div className="bg-white py-6 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search your memories..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">All Categories</option>
                <option value="beach">Beach</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure</option>
                <option value="urban">Urban</option>
                <option value="wildlife">Wildlife</option>
                <option value="natural-wonder">Natural Wonder</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Sort By</option>
                <option value="date-desc">Most Recent</option>
                <option value="date-asc">Oldest First</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="name-asc">Name (A-Z)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistedFilters
import React from 'react'
import { useState } from 'react';
import { CheckSquare, Camera , Calendar , MapPin ,Award, Star } from 'lucide-react';

const VistedItem = ({ item }) => {
  
    const [expanded, setExpanded] = useState(false);
    
    // Generate stars based on rating
    const renderStars = (rating) => {
      return Array(5).fill(0).map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
        />
      ));
    };
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-600 text-white flex items-center">
            <CheckSquare className="h-4 w-4 mr-1" />
            Visited
          </div>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-white flex items-center">
            <Camera className="h-4 w-4 mr-1" />
            {item.photos} photos
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-3">{item.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{item.visitDate}</span>
            </div>
            
            <div className="flex">
              {renderStars(item.rating)}
            </div>
          </div>
          
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
            {item.wouldRecommend && (
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full ml-2">
                Recommended
              </span>
            )}
          </div>
          
          {expanded && (
            <div className="mb-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                <p className="text-gray-700">{item.highlights}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 mb-2">Memories:</h4>
                <p className="text-gray-700">{item.memories}</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setExpanded(!expanded)} 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
            
            <div className="flex space-x-2">
              <button className="bg-green-100 text-green-800 hover:bg-green-200 p-2 rounded-full">
                <Award className="h-4 w-4" />
              </button>
              <button className="bg-blue-100 text-blue-800 hover:bg-blue-200 p-2 rounded-full">
                <Camera className="h-4 w-4" />
              </button>
              <button className="bg-purple-100 text-purple-800 hover:bg-purple-200 p-2 rounded-full">
                <MapPin className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default VistedItem
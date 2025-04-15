import { Calendar, Heart, Trash2 } from 'lucide-react'
import React, { useState } from 'react'



  
function WishlistCard({item}) {
    const [expanded, setExpanded] = useState(false);
        
        const priorityColor = {
          "High": "bg-red-100 text-red-800",
          "Medium": "bg-yellow-100 text-yellow-800",
          "Low": "bg-green-100 text-green-800"
        };
        
      
    
    
  
    
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover"
        />
        {/* <div className={absolute top-4 left-4 px-3 py-1 rounded-full ${priorityColor[item.priority]}}>
          {item.priority} Priority
        </div> */}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-gray-700">{item.bestTimeToVisit}</span>
        </div>
        
        <div className="flex items-center mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>



        {expanded && (
            <div className="mb-4 bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900 mb-2">Notes:</h4>
              <p className="text-gray-700">{item.notes}</p>
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
            <button className="text-green-600 hover:text-green-800 p-1">
              <Calendar className="h-5 w-5" />
            </button>
            <button className="text-pink-600 hover:text-pink-800 p-1">
              <Heart className="h-5 w-5" fill="currentColor" />
            </button>
            <button className="text-red-600 hover:text-red-800 p-1">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

          
    </>

    
  )
}

export default WishlistCard
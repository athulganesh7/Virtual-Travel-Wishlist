import { Calendar, CheckSquare, Heart, Trash2 } from 'lucide-react'
import React, { useState } from 'react'



  
function WishlistCard({item}) {
    
      
    
    
  
    
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



        
  
          
          <div className="flex justify-between items-center">
          <button className="text-green-600 flex justify-between cursor-pointer hover:text-green-800 p-1">
            <CheckSquare className="h-5 w-5 mr-1" />
           <span className='text-blue-600'>Add To Visit</span> 
            
            </button>
          <div className="flex space-x-2">
           
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
import { Heart, Plus } from 'lucide-react'
import React from 'react'


function EmptyWishlist({setModalOpen}) {
  return (
    <>
     <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
        <Heart className="h-8 w-8 text-pink-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Start adding destinations to your travel wishlist and keep track of all the amazing places you want to visit.
      </p>
      <button onClick={()=>setModalOpen(true)} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto">
        <Plus className="mr-2 h-5 w-5" />
        Add Your First Destination
      </button>
    </div>

    </>
  )
}

export default EmptyWishlist
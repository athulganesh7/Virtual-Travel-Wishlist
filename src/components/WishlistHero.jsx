import { Heart, MapPin, Plus } from 'lucide-react'

import React, { useState } from 'react'
import AddDestination from '../components/AddDestination';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';



function WishlistHero({setDataStatus,modalOpen,setModalOpen}) {


  const [wishlist, setWishlist] = useState([]);

  const addDestination = async (newItem) => {
    const user = localStorage.getItem('user')
    if (user) {
      const updatedWishlist = [...wishlist, newItem];
      setWishlist(updatedWishlist);
      await saveData(updatedWishlist);
    } else {
      toast.error('please login first')
    }



  }

  const saveData = async (updatedWishlist) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const docId = Date.now().toString()
    try {
     const result= await setDoc(doc(db, "TripDetails", docId), {
        userInput: updatedWishlist,
        userEmail: user?.email,
        id: docId
      })
      setDataStatus(result)
      toast.success('wishlist added')

    } catch (error) {
      console.log(error);


    }
  }
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
              <button onClick={() => setModalOpen(true)} className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md flex items-center justify-center">
                <Plus className="mr-2 h-5 w-5" />
                Add New Destination
              </button>
             <Link target='blank' to={'https://www.google.co.in/maps/'}>
                <button className="bg-white text-pink-700 hover:bg-gray-100 px-6 py-3 rounded-md flex items-center justify-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  View on Map
                </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
      <AddDestination isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addDestination} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       
      />
    </>
  )
}

export default WishlistHero
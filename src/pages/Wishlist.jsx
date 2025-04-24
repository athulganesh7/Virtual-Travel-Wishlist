import React, { useEffect, useState } from 'react'
import {  Filter  } from 'lucide-react';

import WishlistFilters from '../components/WishlistFilters';
import WishlistHero from '../components/WishlistHero';
import WishlistGrid from '../components/WishlistGrid';
import EmptyWishlist from '../components/EmptyWishlist';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';





 
  




 export default  function Wishlist() {
    const [modalOpen, setModalOpen] = useState(false);
  

   const [dataStatus,setDataStatus]=useState([])


  useEffect(()=>{
    GetData()
  },[dataStatus])


   
   
   const [items, setItems] = useState([]);
   
   const navigate = useNavigate();


  const GetData = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      console.log("No user found in localStorage");
      navigate('/');  
      return;
    }
    console.log("User data:", user); // ✅ Debugging step
      
    try {
      const q = query(collection(db, 'TripDetails'), where('userEmail', '==', user.email));
      const querySnapshot = await getDocs(q);
      setItems([]);

      console.log("Query Snapshot empty:", querySnapshot.empty); // ✅ Debugging step

      if (querySnapshot.empty) {
        console.log("No trips found for this user.");
        return;
      }

      // ✅ Collect all trips into an array
      const trips = [];
      querySnapshot.forEach((doc) => {
        console.log("Trip found:", doc.id, doc.data()); // ✅ Debugging step
        trips.push(doc.data());
      });

      setItems(trips);  // ✅ Update state with collected trips
      console.log("Updated state:", trips); // ✅ Debugging step

    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };


 

 
  
  return (
    <>
     
  

  <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <WishlistHero modalOpen={modalOpen}  setModalOpen={setModalOpen} setDataStatus={setDataStatus} />
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
              <WishlistGrid GetData={GetData}  items={items} />
            ) : (
              <EmptyWishlist setModalOpen={setModalOpen} />
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


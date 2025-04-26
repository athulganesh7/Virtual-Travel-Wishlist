import React from 'react'
import { useState,useEffect } from 'react';
import {   Filter,  Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VistedHero from '../components/VistedHero';
import TravelStates from '../components/TravelStates';
import VistedFilters from '../components/VistedFilters';
import VistedGrid from '../components/VistedGrid';
import EmptyVisted from '../components/EmptyVisted'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/FirebaseConfig"; 
import { useNavigate } from 'react-router-dom';
// Sample visited places data

export default function Visited() {

  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {


    
  
     const fetchVisitedTrips = async () => {
          const user = JSON.parse(localStorage.getItem('user'));
          if (!user) {
            console.log("No user found in localStorage");
            navigate('/');
            return;
          }
        
          const visitedRef = collection(db, 'VisitedTrips');
          const q = query(visitedRef, where('email', '==', user.email));
          const snapshot = await getDocs(q);
        
          const item = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setItems(item);
          console.log(items);
          
        };
    
    
    fetchVisitedTrips();

  }, []);
  
  // Calculate stats
  const totalDestinations = items.length;
  // const uniqueCountries = new Set(items.map(item => item.name.split(',')[1]?.trim())).size;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <VistedHero totalDestinations={totalDestinations}  />
        <TravelStates  />
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
            <VistedGrid   />
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













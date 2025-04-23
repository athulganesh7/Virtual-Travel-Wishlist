import React from 'react';
import { Calendar, CheckSquare, Heart, Trash2 } from 'lucide-react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
function WishlistCard({ item, GetData }) {
  const deleteData = async (id) => {
    try {
      const docRef = doc(db, 'TripDetails', id);
      await deleteDoc(docRef);
      GetData();
      toast.success('Deleted successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete item');
    }
  };

  const data = item?.userInput?.[0];

  const markAsVisited = async (item) => {
    const data = item?.userInput?.[0];
    const visitedData = {
      name: data.destination,
      description: data.description,
      visitDate: new Date().toISOString().split("T")[0], // or get from user
      image: data.photoURL,
      category: data.category,
      photos: 0, // or update based on real photos
      rating: 4, // default or user input
      wouldRecommend: true, // or get from user
      highlights: "Great place to visit!", // optional
      memories: "Unforgettable experience!", // optional
    };
  
    try {
      await addDoc(collection(db, 'VisitedTrips'), visitedData);
      await deleteData(item.id); // optional: remove from wishlist
      toast.success('Moved to visited');
      GetData(); // refresh the wishlist
    } catch (err) {
      console.error(err);
      toast.error('Failed to move item');
    }
  };
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col">
      <img
        src={data?.photoURL}
        alt="Destination"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-1">{data?.destination}</h3>
          <p className="text-gray-600 mb-3 text-sm">{data?.description}</p>

          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            {data?.bestMonth}
          </div>

          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-4">
            {data?.category}
          </span>
        </div>

        <div className="flex justify-between items-center mt-auto">
        <button 
  className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
  onClick={() => markAsVisited(item)}
>
  <CheckSquare className="h-4 w-4 mr-1" /> Add To Visit
</button>
          <div className="flex space-x-2">
            <button className="text-pink-600 hover:text-pink-800">
              <Heart className="h-5 w-5" fill="currentColor" />
            </button>
            <button
              onClick={() => deleteData(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default WishlistCard;
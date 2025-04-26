import React from 'react'
import VistedItem from '../components/VistedItem';
import { useEffect, useState } from 'react';
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { onSnapshot, query, collection, where } from 'firebase/firestore';

const VistedGrid  = () => {
    const [visited, setVisited] = useState([]);

    const navigate = useNavigate()
  
    


    const fetchVisited = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        console.log("No user found in localStorage");
        navigate('/');
        return;
      }
    
      const visitedRef = collection(db, 'VisitedTrips');
      const q = query(visitedRef, where('email', '==', user.email));
    
      // Use onSnapshot to listen for real-time updates
      onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVisited(items); // This will trigger a re-render when data changes
      });
    };
    
  
    useEffect(() => {
      fetchVisited();
    }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {visited.map(item => (
      <VistedItem  key={item.id} item={item} />
    ))}
  </div>
);
};

export default VistedGrid
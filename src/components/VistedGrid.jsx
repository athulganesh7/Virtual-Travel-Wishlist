import React from 'react'
import VistedItem from '../components/VistedItem';
import { useEffect, useState } from 'react';
import { collection, getDocs, where } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const VistedGrid  = () => {
    const [visited, setVisited] = useState([]);

    const navigate = useNavigate()
  
    const fetchVisited = async () => {

      
      const user = JSON.parse(localStorage.getItem('user'))
      if (!user) {
        console.log("No user found in localStorage");
        navigate('/');  
        return;
      }

      // const snapshot = await getDocs(collection(db, 'VisitedTrips'));

      const snapshot = await getDocs(collection(db, 'VisitedTrips'), where('userEmail', '==', user.email));
      
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      




      setVisited(items);
      console.log(visited);
      


    };
  
    useEffect(() => {
      fetchVisited();
    }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {visited.map(item => (
      <VistedItem key={item.id} item={item} />
    ))}
  </div>
);
};

export default VistedGrid
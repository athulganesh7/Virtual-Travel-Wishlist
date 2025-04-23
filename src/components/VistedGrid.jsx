import React from 'react'
import VistedItem from '../components/VistedItem';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';

const VistedGrid  = () => {
    const [visited, setVisited] = useState([]);
  
    const fetchVisited = async () => {
      const snapshot = await getDocs(collection(db, 'VisitedTrips'));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVisited(items);
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
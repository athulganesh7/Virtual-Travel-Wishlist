import React from 'react'
import VistedItem from '../components/VistedItem';
const VistedGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <VistedItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default VistedGrid
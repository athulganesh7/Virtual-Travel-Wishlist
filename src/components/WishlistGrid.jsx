import React from 'react';
import WishlistCard from './WishlistCard';

function WishlistGrid({ items, GetData }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No destinations in your wishlist yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item) => (
        <WishlistCard key={item.id} item={item} GetData={GetData} />
      ))}
    </div>
  );
}

export default WishlistGrid;
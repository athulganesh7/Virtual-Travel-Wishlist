import React from 'react'
import WishlistCard from './WishlistCard'



function WishlistGrid({items,GetData}) {
  
  
  return (
   <>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <WishlistCard  GetData={GetData} key={item.id} item={item} />
      ))}
    </div>

   </>
  )
}

export default WishlistGrid
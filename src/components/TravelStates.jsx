import React from 'react'
import { Award,Camera } from 'lucide-react';

const TravelStates = () => {
  const stats = [
 
    { icon: <Award />, label: "Top Rated Destination", value: "Paris, France" },
    { icon: <Camera />, label: "Total Photos", value: "236" }
  ];

  return (
    <div className="bg-gray-100 py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                {React.cloneElement(stat.icon, { className: "h-6 w-6 text-green-600" })}
              </div>
              <div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="font-semibold text-gray-800">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStates
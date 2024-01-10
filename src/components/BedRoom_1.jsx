import React from 'react';

const ColorBoxes = () => {
  return (
    <div className="flex flex-col items-center">
    
      <div className="w-1/3 h-12 bg-white mb-4"></div>
      <div className="w-1/3 h-12 bg-white mb-4"></div>
      <div className="w-1/3 h-12 bg-white mb-4"></div>

     
      <div className="flex justify-between w-full">
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
      </div>

     
      <div className="flex justify-between">
        <div className="w-1/4 h-16 bg-red-300"></div>
        <div className="w-1/4 h-16 bg-purple-300"></div>
        <div className="w-1/4 h-16 bg-blue-300"></div>
        <div className="w-1/4 h-16 bg-green-300"></div>
      </div>
    </div>
  );
};

export default ColorBoxes;

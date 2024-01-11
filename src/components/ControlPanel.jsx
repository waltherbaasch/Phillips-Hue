import React from 'react';

const ControlPanel = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-36 h-36 rounded-md bg-blue-500 m-4 flex items-center justify-center text-white">
       <h1>Bedroom</h1>
      </div>

      <div className="w-36 h-36 rounded-md bg-green-500 m-4 flex items-center justify-center text-white">
       <h1>Living room</h1>
      </div>

      <div className="w-36 h-36 rounded-md bg-yellow-500 m-4 flex items-center justify-center text-white">
        <h1>Kitchen</h1>
      </div>

      <div className="w-36 h-36 rounded-md bg-red-500 m-4 flex items-center justify-center text-white">
        <h1>Bathroom</h1>
      </div>

      <div className="w-36 h-36 rounded-md bg-purple-500 m-4 flex items-center justify-center text-white">
      <h1>Outdoor</h1>
      </div>

      <div className="w-36 h-36 rounded-md bg-pink-500 m-4 flex items-center justify-center text-white">
      <h1>Balcony</h1>
      </div>
    </div>
  );
};

export default ControlPanel;

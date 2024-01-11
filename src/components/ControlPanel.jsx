import React from 'react';

const ControlPanel = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-36 h-36 rounded-md bg-blue-500 m-4 flex items-center justify-center text-white">
        Box 1
      </div>

      <div className="w-36 h-36 rounded-md bg-green-500 m-4 flex items-center justify-center text-white">
        Box 2
      </div>

      <div className="w-36 h-36 rounded-md bg-yellow-500 m-4 flex items-center justify-center text-white">
        Box 3
      </div>

      <div className="w-36 h-36 rounded-md bg-red-500 m-4 flex items-center justify-center text-white">
        Box 4
      </div>

      <div className="w-36 h-36 rounded-md bg-purple-500 m-4 flex items-center justify-center text-white">
        Box 5
      </div>

      <div className="w-36 h-36 rounded-md bg-pink-500 m-4 flex items-center justify-center text-white">
        Box 6
      </div>
    </div>
  );
};

export default ControlPanel;

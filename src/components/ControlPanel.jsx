import React from "react";

const ControlPanel = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-150 h-150 rounded-md bg-blue-500 m-4 flex items-center justify-center text-white">
        <img src="bedroom_image.jpg" alt="Bedroom" width="51" height="42" />
        <h1>Bedroom</h1>
      </div>

      <div className="w-150 h-150 rounded-md bg-green-500 m-4 flex items-center justify-center text-white">
        <img src="living_room_image.jpg" alt="Living room" width="51" height="42" />
        <h1>Living room</h1>
      </div>

      <div className="w-150 h-150 rounded-md bg-yellow-500 m-4 flex items-center justify-center text-white">
        <img src="kitchen_image.jpg" alt="Kitchen" width="51" height="42" />
        <h1>Kitchen</h1>
      </div>

      <div className="w-150 h-150 rounded-md bg-red-500 m-4 flex items-center justify-center text-white">
        <img src="bathroom_image.jpg" alt="Bathroom" width="51" height="42" />
        <h1>Bathroom</h1>
      </div>

      <div className="w-150 h-150 rounded-md bg-purple-500 m-4 flex items-center justify-center text-white">
        <img src="outdoor_image.jpg" alt="Outdoor" width="51" height="42" />
        <h1>Outdoor</h1>
      </div>

      <div className="w-150 h-150 rounded-md m-4 flex items-center justify-center text-white">
        <img src="balcony_image.jpg" alt="Balcony" width="51" height="42" />
        <h1>Balcony</h1>
      </div>
    </div>
  );
};

export default ControlPanel;

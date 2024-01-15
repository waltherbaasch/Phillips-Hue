
import React, { useState } from 'react';
import axios from 'axios';

const ApiFetch = () => {
  const [lightState, setLightState] = useState(false);

  const handleLightToggle = async () => {
    try {
     
      const response = await axios.put(
        `http://YOUR_BRIDGE_IP/api/YOUR_USERNAME/lights/LIGHT_ID/state`,
        {
          on: !lightState, 
        }
      );

     
      if (response.data[0].success) {
        setLightState(!lightState); 
      } else {
        console.error('Failed to toggle light');
      }
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  };

  return (
    <div>
      <h1>Philips Hue Control</h1>
      <button onClick={handleLightToggle}>
        {lightState ? 'Turn Off Light' : 'Turn On Light'}
      </button>
    </div>
  );
};

export default ApiFetch;

import React from "react";

function IntensitySwitch() {
  return (
    <>
      <p>Light Intensity settings:</p>

      <div>
        <input type="range" id="intensity" name="intensity" min="0" max="11" />
        <label htmlFor="intensity">Intensity</label>
      </div>

      <div>
        <input
          type="range"
          id="sunshine"
          name="sunshine"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <label htmlFor="sunshine">Intesity</label>
      </div>
    </>
  );
}

export default IntensitySwitch;

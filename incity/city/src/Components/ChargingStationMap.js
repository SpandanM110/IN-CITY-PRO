import React from 'react';

const ChargingStationMap = () => {
  return (
    <div>
      <iframe
        src="https://map.openchargemap.io/?mode=embedded"
        title="Charging Station Map"
        allow="geolocation"
        frameBorder="0"
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
};

export default ChargingStationMap;

import React from 'react';

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 z-0 left-1/2 transform -translate-x-1/2">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Define your blob shape using path element */}
        <path
          fill="#34D399" // Green color
          d="M61.3,-57.1C70.3,-48.1,71.8,-32.4,71.4,-17.2C71.1,-2,69.1,13.3,64.2,24.1C59.3,34.8,51.7,40,41.5,45.7C31.2,51.5,18.3,57.8,7.6,56.6C-3.2,55.4,-6.6,46.7,-14.7,38.4C-22.7,30.2,-35.5,22.6,-48.1,15.7C-60.8,8.8,-73.1,2.7,-79.2,-7.7C-85.4,-18.2,-85.4,-35.3,-78.4,-46.3C-71.4,-57.3,-57.3,-62.3,-44.7,-63.2C-32.1,-64,-21.1,-60.7,-6.6,-61.4C7.9,-62.1,15.7,-66.7,28,-66.4C40.3,-66.1,57.2,-61,61.3,-57.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default BlobBackground;

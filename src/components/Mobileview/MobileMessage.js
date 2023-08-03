import React from 'react';

const MobileMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">App Not Optimized for Mobile View</h1>
        <p className="text-gray-700">
          We haven't reached the mobile view yet. For the best experience, please use a laptop or
          larger screen to access this app.
        </p>
      </div>
    </div>
  );
};

export default MobileMessage;

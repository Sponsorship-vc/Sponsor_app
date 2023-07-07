import React from 'react';

function ForbiddenPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-500">403 Forbidden</h1>
      <p className="text-lg text-gray-600">Sorry, you don't have permission to access this page.</p>
    </div>
  );
}

export default ForbiddenPage;

import React from 'react'

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-4">Page not found</p>
      <p className="text-xl">The requested page could not be found.</p>
    </div>
  )
}

export default Notfound
import React from 'react';

function LoaderConnection() {
  return (
    <div className="fixed inset-0 bg-gray-900/90 flex flex-col items-center justify-center z-50 backdrop-blur-md">
      {/* Outer glow container */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring with gradient */}
        <div className="absolute animate-spin-slow rounded-full h-40 w-40 border-t-4 border-b-4 border-r-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
        
        {/* Middle rotating ring */}
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        
        {/* Inner static ring with gradient */}
        <div className="absolute h-24 w-24 rounded-full border-4 border-gray-200/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"></div>
        
        {/* Center pulse effect */}
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
      </div>

      {/* Text container with gradient background */}
      <div className="mt-12 text-center p-6 px-5 my-4 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
        <p className="text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-xl font-semibold mb-4">
          Establishing a secure wallet connection
        </p>
        
        <div className="flex items-center justify-center space-x-1">
          <span className="text-white text-xl font-bold tracking-wider">Please wait</span>
          <span className="flex space-x-1">
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoaderConnection;
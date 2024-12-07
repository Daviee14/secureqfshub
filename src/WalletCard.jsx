import React from 'react';

function WalletCard({ wallet, onClick }) {

  const gradients = [
    'from-blue-400 to-blue-600',
    'from-indigo-400 to-indigo-600',
    'from-purple-400 to-purple-600',
    'from-violet-400 to-violet-600'
  ];

  const randomGradient = gradients[wallet.id % gradients.length];

  return (
    <div
      onClick={() => onClick(wallet)}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${randomGradient} p-0.5`}>
          <div className="w-full h-full rounded-full bg-gray-900 p-2 flex items-center justify-center">
            <img
              src={wallet.icon}
              alt={wallet.name}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
            {wallet.name}
          </h3>
          <p className="text-sm text-gray-400 truncate max-w-[150px]">
            {wallet.url.replace('https://', '')}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
    </div>
  );
}

export default WalletCard;
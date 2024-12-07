import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


import React from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle, ArrowRight, X } from 'lucide-react';

function WalletModal({ wallet, onClose, onTryAgain }) {
  if (!wallet) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl max-w-lg w-full border border-gray-700/50 overflow-hidden">
        {/* Header Section */}
        <div className="relative p-6 pb-4 border-b border-gray-700/50">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 rounded-full">
              <div className="bg-gray-900 p-2 rounded-full">
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{wallet.name}</h2>
              <p className="text-gray-400">{wallet.url}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Error Message */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
              <div className="space-y-1">
                <p className="text-red-400 font-medium">Connection Failed</p>
                <p className="text-gray-300 text-sm">
                  We couldn't establish a secure connection to your wallet. This could be due to:
                </p>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  <li>Network connectivity issues</li>
                  <li>Wallet service temporary unavailability</li>
                  <li>Browser security settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Recommended Steps:</h3>
            <div className="space-y-3">
              {[
                "Check your internet connection",
                "Verify if your wallet is unlocked and active",
                "Ensure your browser permissions are enabled",
                "Try refreshing your browser"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <ArrowRight size={16} className="text-blue-400" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="p-6 pt-2 flex space-x-4">
          <button
            onClick={onTryAgain}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <Link to="/connect-wallet" className="block">
              <button className="w-full py-5 px-5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Connect Manually
              </button>
            </Link>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
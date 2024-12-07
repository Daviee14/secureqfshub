import React from 'react';
import WalletCard from './WalletCard';

function WalletGrid({ wallets, onCardClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {wallets.map(wallet => (
      <WalletCard key={wallet.id} wallet={wallet} onClick={onCardClick} />
    ))}
  </div>
  );
}

export default WalletGrid;
